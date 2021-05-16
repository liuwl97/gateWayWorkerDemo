// document.write("<script type='text/javascript' src='app.js'></script>"); 

window.CHAT = {
	socket: null,
	init: function() {
		if (window.WebSocket) {
			
			// 如果当前的状态已经连接，那就不需要重复初始化websocket
			if (CHAT.socket != null 
				&& CHAT.socket != undefined 
				&& CHAT.socket.readyState == WebSocket.OPEN) {
				return false;
			}
				
			CHAT.socket = new WebSocket(app.nettyServerUrl);
			CHAT.socket.onopen = CHAT.wsopen,
			CHAT.socket.onclose = CHAT.wsclose,
			CHAT.socket.onerror = CHAT.wserror,
			CHAT.socket.onmessage = CHAT.wsmessage;
		} else {
			alert("手机设备过旧，请升级手机设备...");
		}
	},
	chat: function(msg) {
		// 如果当前websocket的状态是已打开，则直接发送， 否则重连
		if (CHAT.socket != null 
				&& CHAT.socket != undefined  
				&& CHAT.socket.readyState == WebSocket.OPEN) {
				CHAT.socket.send(msg);
		} else {
			// 重连websocket
			CHAT.init();
			setTimeout("CHAT.reChat('" + msg + "')", "1000");
		}
		// 渲染快照列表进行展示
		CHAT.loadingChatSnapshot();
	},
	reChat: function(msg) {
		console.log("消息重新发送...");
		CHAT.socket.send(msg);
	},
	wsopen: function() {
		console.log("websocket连接已建立...");
		
		var me = app.getUserGlobalInfo();
		// 构建ChatMsg
		var chatMsg = new app.ChatMsg(me.id, null, null, null);
		// 构建DataContent
		var dataContent = new app.DataContent(app.CONNECT, chatMsg, null);
		// 发送websocket
		CHAT.chat(JSON.stringify(dataContent));
		
		// 每次连接之后，获取用户的未读未签收消息列表
		CHAT.fetchUnReadMsg();
		
		// 定时发送心跳
		setInterval("CHAT.keepalive()", 10000);
	},
	wsmessage: function(e) {
		console.log("接受到消息：" + e.data);
		
		// 转换DataContent为对象
		var dataContent = JSON.parse(e.data);
		var action = dataContent.action;
		if (action === app.PULL_FRIEND) {
			CHAT.fetchContactList();
			return false;						
		}
		
		// 如果不是重新拉取好友列表，则获取聊天消息模型，渲染接收到的聊天记录
		var chatMsg = dataContent.chatMsg;
		var msg = chatMsg.msg;
		var friendUserId = chatMsg.senderId;
		var myId = chatMsg.receiverId;
		
		// 调用聊天webview的receiveMsg方法
//					var chatWebview = plus.webview.getWebviewById("chatting-180718GA2ZM9N5S8");
		var chatWebview = plus.webview.getWebviewById("chatting-" + friendUserId);
		var isRead = true;	// 设置消息的默认状态为已读
		if (chatWebview != null) {
			chatWebview.evalJS("receiveMsg('" + msg + "')");
			chatWebview.evalJS("resizeScreen()");
		} else {
			isRead = false;	// chatWebview 聊天页面没有打开，标记消息未读状态
		}
		
		// 接受到消息之后，对消息记录进行签收
		var dataContentSign = new app.DataContent(app.SIGNED, null, chatMsg.msgId);
		CHAT.chat(JSON.stringify(dataContentSign));
		
		// 保存聊天历史记录到本地缓存
		app.saveUserChatHistory(myId, friendUserId, msg, 2);
		// 保存聊天快照到本地缓存
		app.saveUserChatSnapshot(myId, friendUserId, msg, isRead);
		// 渲染快照列表进行展示
		CHAT.loadingChatSnapshot();
	},
	wsclose: function() {
		console.log("连接关闭...");
	},
	wserror: function() {
		console.log("发生错误...");
	},
	keepalive: function() {
		// 构建对象
		var dataContent = new app.DataContent(app.KEEPALIVE, null, null);
		// 发送心跳
		CHAT.chat(JSON.stringify(dataContent));
		
		// 定时执行函数
		CHAT.fetchUnReadMsg();
		CHAT.fetchContactList();
	},
	// 获取后端所有好友列表
	fetchContactList: function() {
		var user = app.getUserGlobalInfo();
		mui.ajax(app.serverUrl + "/u/myFriends?userId=" + user.id,{
			data:{},
			dataType:'json',//服务器返回json格式数据
			type:'post',//HTTP请求类型
			timeout:10000,//超时时间设置为10秒；
			headers:{'Content-Type':'application/json'},	              
			success:function(data){
				
				if (data.status == 200) {
					var contactList = data.data;
					app.setContactList(contactList);
				}
			}
		});
	},
	
	// 展示聊天快照，渲染列表
	loadingChatSnapshot: function() {
		var user = app.getUserGlobalInfo();
		var chatSnapshotList = app.getUserChatSnapshot(user.id);
		
		var chatItemHtml = "";
		var ul_chatSnapshot = document.getElementById("ul_chatSnapshot");
		ul_chatSnapshot.innerHTML = "";
		for (var i = 0 ; i < chatSnapshotList.length ; i ++) {
			var chatItem = chatSnapshotList[i];
			
			var friendId = chatItem.friendId;
			// 根据friendId从本地联系人列表的缓存中拿到相关信息
			var friend = app.getFriendFromContactList(friendId);
			
			// 判断消息的已读或未读状态
			var isRead = chatItem.isRead;
			var readHtmlBefore = '';
			var readHtmlAfter = '';
			if (!isRead) {
				readHtmlBefore = '<span class="red-point">';
				readHtmlAfter = '</span>';
			}
			
			chatItemHtml =  '<li friendUserId="' + friendId + '" friendNickname="' + friend.friendNickname + '" friendFaceImage="' + friend.friendFaceImage + '" class="chat-with-friend mui-table-view-cell mui-media">' +
								'<div class="mui-slider-right mui-disabled">' +
									'<a id="link_delChatRecord" friendUserId="' + friendId + '" class="mui-btn mui-btn-red">删除</a>' +
								'</div>' +
								'<div class="mui-slider-handle mui-media-body ">' +
						            '<img class="mui-media-object mui-pull-left" src="' + app.imgServerUrl + friend.friendFaceImage + '"/>' +
						            	readHtmlBefore + friend.friendNickname + readHtmlAfter + 
						            '<p class="mui-ellipsis">' + chatItem.msg + '</p>' +
					            '</div>' +
						    '</li>';
			ul_chatSnapshot.insertAdjacentHTML('beforeend', chatItemHtml);
		}
		
	},
	
	// 每次重连后获取服务器的未签收消息
	fetchUnReadMsg: function(){
		var user = app.getUserGlobalInfo();
		var msgIds = ",";	// 格式：  ,1001,1002,1003,
		mui.ajax(app.serverUrl + "/u/getUnReadMsgList?acceptUserId=" + user.id,{
			data:{},
			dataType:'json',//服务器返回json格式数据
			type:'post',//HTTP请求类型
			timeout:10000,//超时时间设置为10秒；
			headers:{'Content-Type':'application/json'},	              
			success:function(data){
				
				if (data.status == 200) {
					var unReadMsgList = data.data;
					console.log(JSON.stringify(unReadMsgList));
					
					// 1. 保存聊天记录到本地
					// 2. 保存聊天快照到本地
					// 3. 对这些未签收的消息，批量签收
					for (var i = 0 ; i < unReadMsgList.length ; i ++) {
						var msgObj = unReadMsgList[i];
						// 逐条存入聊天记录
						app.saveUserChatHistory(msgObj.acceptUserId, 
												msgObj.sendUserId, 
												msgObj.msg, 2);
						// 存入聊天快照
						app.saveUserChatSnapshot(msgObj.acceptUserId, 
												 msgObj.sendUserId, 
												 msgObj.msg, false);
						// 拼接批量接受的消息id字符串，逗号间隔
						msgIds += msgObj.id;
						msgIds += ",";
					}
					
					// 调用批量签收的方法
					CHAT.signMsgList(msgIds);
					// 刷新快照
					CHAT.loadingChatSnapshot();
				}
			}
		});
	},
	
	signMsgList: function(unSignedMsgIds) {
		// 构建批量签收对象的模型
		var dataContentSign = new app.DataContent(app.SIGNED,
												  null,
												  unSignedMsgIds);
		// 发送批量签收的请求
		CHAT.chat(JSON.stringify(dataContentSign));
	}
};
