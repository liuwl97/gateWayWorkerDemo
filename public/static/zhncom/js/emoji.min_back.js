!
function(e) {
	var t = {};
	function n(o) {
		if (t[o]) return t[o].exports;
		var i = t[o] = {
			i: o,
			l: !1,
			exports: {}
		};
		return e[o].call(i.exports, i, i.exports, n),
		i.l = !0,
		i.exports
	}
	n.m = e,
	n.c = t,
	n.d = function(e, t, o) {
		n.o(e, t) || Object.defineProperty(e, t, {
			enumerable: !0,
			get: o
		})
	},
	n.r = function(e) {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
			value: "Module"
		}),
		Object.defineProperty(e, "__esModule", {
			value: !0
		})
	},
	n.t = function(e, t) {
		if (1 & t && (e = n(e)), 8 & t) return e;
		if (4 & t && "object" == typeof e && e && e.__esModule) return e;
		var o = Object.create(null);
		if (n.r(o), Object.defineProperty(o, "default", {
			enumerable: !0,
			value: e
		}), 2 & t && "string" != typeof e) for (var i in e) n.d(o, i,
		function(t) {
			return e[t]
		}.bind(null, i));
		return o
	},
	n.n = function(e) {
		var t = e && e.__esModule ?
		function() {
			return e.
		default
		}:
		function() {
			return e
		};
		return n.d(t, "a", t),
		t
	},
	n.o = function(e, t) {
		return Object.prototype.hasOwnProperty.call(e, t)
	},
	n.p = "",
	n(n.s = 0)
} ([function(e, t, n) { !
	function(e, t, o) {
		n(1);
		const i = n(6),
		r = n(7),
		a = n(8),
		s = n(9);
		e.extend({
			Lemoji: function(n) {
				if (n && (!n || "object" != typeof n)) return this;
				var c = e.extend({},
				{
					before: function() {},
					after: function() {},
					emojiInput: "input",
					emojiBtn: ".emojiBtn",
					position: "LEFTBOTTOM",
					length: 7,
					emojis: {
						qq: {
							path: "static/images/qq/",
							code: ":",
							name: "QQ表情"
						},
						tieba: {
							path: "static/images/tieba",
							code: ";",
							name: "贴吧表情"
						},
						emoji: {
							path: "static/images/emoji",
							code: ",",
							name: "Emoji表情"
						}
					},
					showBabar: !0
				},
				n),
				l = r(c.emojis, i, c.length),
				f = e("<div class='emoji_container'>"),
				u = e("<div class='emoji_content'>"),
				p = e("<div class='emoji_tabar' style='display: " + (c.showBabar ? "": "none") + ";'>"),
				d = "",
				h = 0;
				e.map(c.emojis,
				function(e, t) {
					d += '<li data-index="' + h + '">' + e.name + "</li>",
					h++
				}),
				p.append("<ul>" + d + "</ul>"),
				f.append(u.append(l)).append(p).appendTo("body"),
				u.on("click", "li",
				function() {
					var t = e(this).attr("data-code"),
					n = e(this).attr("title"),
					o = "";
					switch (t) {
					case ":":
					case ";":
					case ",":
						o = "[" + t + n + "]",
						a(e(c.emojiInput), o)
					}
				}),
				p.on("click", "li",
				function() {
					var n = 467;
					e(t).width() < n && (n = e(t).width());
					var o = e(this).attr("data-index"),
					i = -n * parseInt(o);
					i += "px",
					u.css({
						marginLeft: '0px'
					})
				});
				var m = !0;
				e(c.emojiBtn).on("click",
				function(t) {
					m ? (f.show("1",
					function() {
						s(f, e(c.emojiBtn), c.position)
					}), s(f, e(c.emojiBtn), c.position), t.stopPropagation(), m = !1) : (f.hide("1"), m = !0)
				}),
				e(o).on("click",
				function(t) {
					if (!m) {
						if ("emoji_tabar" == e(t.target).parent().parent().attr("class")) return void t.stopPropagation();
						m = !0,
						f.hide("1")
					}
				})
			},
			emojiParse: function(t) {
				if (t && (!t || "object" != typeof t)) return this;
				var n = e.extend({},
				{
					content: "",
					emojis: [{
						path: "static/images/qq",
						code: ":",
						type: "qq"
					},
					{
						path: "static/images/tieba",
						code: ";",
						type: "tieba"
					},
					{
						path: "static/images/emoji",
						code: ",",
						type: "emoji"
					}]
				},
				t),
				o = e.trim(n.content) ? n.content: "";
				if (!o) return o;
				for (let e = 0; e < n.emojis.length; e++) o = a(o, n.emojis[e].code, n.emojis[e].path, n.emojis[e].type);
				function r(t, n) {
					var o;
					return e.map(i[n],
					function(e, n) {
						e === t && (o = n)
					}),
					o
				}
				function a(e, t, n, o) {
					var i = new RegExp("\\[\\" + t + "[\\u4e00-\\u9fa5]+\\]", "g"),
					a = e.match(i);
					if (a) for (var s = new RegExp("^\\[\\" + t), c = /\]$/, l = 0; l < a.length; l++) {
						var f, u = a[l].replace(s, "");
						if (void 0 != (f = r(u = u.replace(c, ""), o))) {
							var p = n + f + ".png";
							e = e.replace(a[l], '<img src="' + p + '" border="0"  width="25" height="25">')
						}
					}
					return e
				}
				return o
			}
		})
	} (window.jQuery, window, document)
},
function(e, t, n) {
	var o = n(2);
	"string" == typeof o && (o = [[e.i, o, ""]]);
	n(4)(o, {
		hmr: !0,
		transform: void 0,
		insertInto: void 0
	}),
	o.locals && (e.exports = o.locals)
},
function(e, t, n) { (e.exports = n(3)(!1)).push([e.i, ".emoji_container {\n  width: 465px;\n  overflow: hidden;\n  position: absolute;\n  display: none;\n  border: 1px solid #bfbfbf;\n  background-color: #efefef;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.176);\n}\n.emoji_container .emoji_content {\n  width: 4000px;\n  margin-top: 7px;\n  padding-left: 2px;\n  padding-right: 2px;\n}\n.emoji_container .emoji_content .emoji_item {\n  padding: 1px;\n  margin: 0;\n  width: 465px;\n  float: left;\n  height: 195px;\n  overflow: hidden;\n  overflow-y: scroll;\n  background-color: #fefefe;\n  border-collapse: collapse;\n}\n.emoji_container .emoji_content .emoji_item ul {\n  list-style: none;\n  margin: 0 auto;\n  padding: 0;\n  width: 100%;\n  display: flex;\n  flex-wrap: nowrap;\n  padding-top: 1px;\n}\n.emoji_container .emoji_content .emoji_item ul li {\n  padding: 5px;\n  flex-grow: 1;\n  flex-shrink: 1;\n  margin-left: -1px;\n  margin-top: -1px;\n  border: 1px solid rgba(177, 177, 177, 0.4);\n}\n.emoji_container .emoji_content .emoji_item ul li img {\n  vertical-align: middle;\n  max-width: 28px;\n  max-height: 28px;\n  margin: 0 auto;\n  display: block;\n}\n.emoji_container .emoji_tabar {\n  border-top: 1px solid rgba(177, 177, 177, 0.4);\n  width: 100%;\n  height: 38px;\n  clear: both;\n  margin: 0;\n  background-color: #efefef;\n}\n.emoji_container .emoji_tabar ul {\n  height: 100%;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  /*border: 1px solid red;*/\n}\n.emoji_container .emoji_tabar ul li {\n  display: inline-block;\n  padding: 5px;\n  height: 100%;\n  background-color: rgba(177, 177, 177, 0.1);\n  border-right: 1px solid rgba(177, 177, 177, 0.4);\n  border-radius: 3px;\n  margin-left: 0;\n}\n", ""])
},
function(e, t) {
	e.exports = function(e) {
		var t = [];
		return t.toString = function() {
			return this.map(function(t) {
				var n = function(e, t) {
					var n, o = e[1] || "",
					i = e[3];
					if (!i) return o;
					if (t && "function" == typeof btoa) {
						var r = (n = i, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(n)))) + " */"),
						a = i.sources.map(function(e) {
							return "/*# sourceURL=" + i.sourceRoot + e + " */"
						});
						return [o].concat(a).concat([r]).join("\n")
					}
					return [o].join("\n")
				} (t, e);
				return t[2] ? "@media " + t[2] + "{" + n + "}": n
			}).join("")
		},
		t.i = function(e, n) {
			"string" == typeof e && (e = [[null, e, ""]]);
			for (var o = {},
			i = 0; i < this.length; i++) {
				var r = this[i][0];
				"number" == typeof r && (o[r] = !0)
			}
			for (i = 0; i < e.length; i++) {
				var a = e[i];
				"number" == typeof a[0] && o[a[0]] || (n && !a[2] ? a[2] = n: n && (a[2] = "(" + a[2] + ") and (" + n + ")"), t.push(a))
			}
		},
		t
	}
},
function(e, t, n) {
	var o, i, r = {},
	a = (o = function() {
		return window && document && document.all && !window.atob
	},
	function() {
		return void 0 === i && (i = o.apply(this, arguments)),
		i
	}),
	s = function(e) {
		var t = {};
		return function(e, n) {
			if ("function" == typeof e) return e();
			if (void 0 === t[e]) {
				var o = function(e, t) {
					return t ? t.querySelector(e) : document.querySelector(e)
				}.call(this, e, n);
				if (window.HTMLIFrameElement && o instanceof window.HTMLIFrameElement) try {
					o = o.contentDocument.head
				} catch(e) {
					o = null
				}
				t[e] = o
			}
			return t[e]
		}
	} (),
	c = null,
	l = 0,
	f = [],
	u = n(5);
	function p(e, t) {
		for (var n = 0; n < e.length; n++) {
			var o = e[n],
			i = r[o.id];
			if (i) {
				i.refs++;
				for (var a = 0; a < i.parts.length; a++) i.parts[a](o.parts[a]);
				for (; a < o.parts.length; a++) i.parts.push(v(o.parts[a], t))
			} else {
				var s = [];
				for (a = 0; a < o.parts.length; a++) s.push(v(o.parts[a], t));
				r[o.id] = {
					id: o.id,
					refs: 1,
					parts: s
				}
			}
		}
	}
	function d(e, t) {
		for (var n = [], o = {},
		i = 0; i < e.length; i++) {
			var r = e[i],
			a = t.base ? r[0] + t.base: r[0],
			s = {
				css: r[1],
				media: r[2],
				sourceMap: r[3]
			};
			o[a] ? o[a].parts.push(s) : n.push(o[a] = {
				id: a,
				parts: [s]
			})
		}
		return n
	}
	function h(e, t) {
		var n = s(e.insertInto);
		if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
		var o = f[f.length - 1];
		if ("top" === e.insertAt) o ? o.nextSibling ? n.insertBefore(t, o.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild),
		f.push(t);
		else if ("bottom" === e.insertAt) n.appendChild(t);
		else {
			if ("object" != typeof e.insertAt || !e.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
			var i = s(e.insertAt.before, n);
			n.insertBefore(t, i)
		}
	}
	function m(e) {
		if (null === e.parentNode) return ! 1;
		e.parentNode.removeChild(e);
		var t = f.indexOf(e);
		t >= 0 && f.splice(t, 1)
	}
	function b(e) {
		var t = document.createElement("style");
		if (void 0 === e.attrs.type && (e.attrs.type = "text/css"), void 0 === e.attrs.nonce) {
			var o = n.nc;
			o && (e.attrs.nonce = o)
		}
		return g(t, e.attrs),
		h(e, t),
		t
	}
	function g(e, t) {
		Object.keys(t).forEach(function(n) {
			e.setAttribute(n, t[n])
		})
	}
	function v(e, t) {
		var n, o, i, r;
		if (t.transform && e.css) {
			if (! (r = t.transform(e.css))) return function() {};
			e.css = r
		}
		if (t.singleton) {
			var a = l++;
			n = c || (c = b(t)),
			o = x.bind(null, n, a, !1),
			i = x.bind(null, n, a, !0)
		} else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function(e) {
			var t = document.createElement("link");
			return void 0 === e.attrs.type && (e.attrs.type = "text/css"),
			e.attrs.rel = "stylesheet",
			g(t, e.attrs),
			h(e, t),
			t
		} (t), o = function(e, t, n) {
			var o = n.css,
			i = n.sourceMap,
			r = void 0 === t.convertToAbsoluteUrls && i; (t.convertToAbsoluteUrls || r) && (o = u(o)),
			i && (o += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */");
			var a = new Blob([o], {
				type: "text/css"
			}),
			s = e.href;
			e.href = URL.createObjectURL(a),
			s && URL.revokeObjectURL(s)
		}.bind(null, n, t), i = function() {
			m(n),
			n.href && URL.revokeObjectURL(n.href)
		}) : (n = b(t), o = function(e, t) {
			var n = t.css,
			o = t.media;
			if (o && e.setAttribute("media", o), e.styleSheet) e.styleSheet.cssText = n;
			else {
				for (; e.firstChild;) e.removeChild(e.firstChild);
				e.appendChild(document.createTextNode(n))
			}
		}.bind(null, n), i = function() {
			m(n)
		});
		return o(e),
		function(t) {
			if (t) {
				if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
				o(e = t)
			} else i()
		}
	}
	e.exports = function(e, t) {
		if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment"); (t = t || {}).attrs = "object" == typeof t.attrs ? t.attrs: {},
		t.singleton || "boolean" == typeof t.singleton || (t.singleton = a()),
		t.insertInto || (t.insertInto = "head"),
		t.insertAt || (t.insertAt = "bottom");
		var n = d(e, t);
		return p(n, t),
		function(e) {
			for (var o = [], i = 0; i < n.length; i++) {
				var a = n[i]; (s = r[a.id]).refs--,
				o.push(s)
			}
			for (e && p(d(e, t), t), i = 0; i < o.length; i++) {
				var s;
				if (0 === (s = o[i]).refs) {
					for (var c = 0; c < s.parts.length; c++) s.parts[c]();
					delete r[s.id]
				}
			}
		}
	};
	var j, y = (j = [],
	function(e, t) {
		return j[e] = t,
		j.filter(Boolean).join("\n")
	});
	function x(e, t, n, o) {
		var i = n ? "": o.css;
		if (e.styleSheet) e.styleSheet.cssText = y(t, i);
		else {
			var r = document.createTextNode(i),
			a = e.childNodes;
			a[t] && e.removeChild(a[t]),
			a.length ? e.insertBefore(r, a[t]) : e.appendChild(r)
		}
	}
},
function(e, t) {
	e.exports = function(e) {
		var t = "undefined" != typeof window && window.location;
		if (!t) throw new Error("fixUrls requires window.location");
		if (!e || "string" != typeof e) return e;
		var n = t.protocol + "//" + t.host,
		o = n + t.pathname.replace(/\/[^\/]*$/, "/");
		return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,
		function(e, t) {
			var i, r = t.trim().replace(/^"(.*)"$/,
			function(e, t) {
				return t
			}).replace(/^'(.*)'$/,
			function(e, t) {
				return t
			});
			return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r) ? e: (i = 0 === r.indexOf("//") ? r: 0 === r.indexOf("/") ? n + r: o + r.replace(/^\.\//, ""), "url(" + JSON.stringify(i) + ")")
		})
	}
},
function(e, t) {
	e.exports = {
		qq: {
			0 : "微笑",
			1 : "撇嘴",
			2 : "色",
			3 : "发呆",
			4 : "得意",
			5 : "流泪",
			6 : "害羞",
			7 : "闭嘴",
			8 : "睡",
			9 : "大哭",
			10 : "尴尬",
			11 : "发怒",
			12 : "调皮",
			13 : "呲牙",
			14 : "惊讶",
			15 : "难过",
			16 : "酷",
			17 : "冷汗",
			18 : "抓狂",
			19 : "吐",
			20 : "偷笑",
			21 : "可爱",
			22 : "白眼",
			23 : "傲慢",
			24 : "饥饿",
			25 : "困",
			26 : "惊恐",
			27 : "流汗",
			28 : "憨笑",
			29 : "大兵",
			30 : "奋斗",
			31 : "咒骂",
			32 : "疑问",
			33 : "嘘",
			34 : "晕",
			35 : "折磨",
			36 : "衰",
			37 : "骷髅",
			38 : "敲打",
			39 : "再见",
			40 : "擦汗",
			41 : "抠鼻",
			42 : "鼓掌",
			43 : "糗大了",
			44 : "坏笑",
			45 : "左哼哼",
			46 : "右哼哼",
			47 : "哈欠",
			48 : "鄙视",
			49 : "委屈",
			50 : "快哭了",
			51 : "阴险",
			52 : "亲亲",
			53 : "吓",
			54 : "可怜",
			55 : "菜刀",
			56 : "西瓜",
			57 : "啤酒",
			58 : "篮球",
			59 : "乒乓",
			60 : "咖啡",
			61 : "饭",
			62 : "猪头",
			63 : "玫瑰",
			64 : "凋谢",
			65 : "示爱",
			66 : "爱心",
			67 : "心碎",
			68 : "蛋糕",
			69 : "闪电",
			70 : "炸弹",
			71 : "刀",
			72 : "足球",
			73 : "瓢虫",
			74 : "便便",
			75 : "月亮",
			76 : "太阳",
			77 : "礼物",
			78 : "拥抱",
			79 : "强",
			80 : "弱",
			81 : "握手",
			82 : "胜利",
			83 : "抱拳",
			84 : "OK",
			85 : "勾引",
			86 : "拳头",
			87 : "差劲",
			88 : "爱你",
			89 : "NO",
			90 : "OK"
		},
		tieba: {
			1 : "呵呵",
			2 : "哈哈",
			3 : "吐舌",
			4 : "啊",
			5 : "酷",
			6 : "怒",
			7 : "开心",
			8 : "汗",
			9 : "泪",
			10 : "黑线",
			11 : "鄙视",
			12 : "不高兴",
			13 : "真棒",
			14 : "钱",
			15 : "疑问",
			16 : "阴脸",
			17 : "吐",
			18 : "咦",
			19 : "委屈",
			20 : "花心",
			21 : "呼~",
			22 : "笑脸",
			23 : "冷",
			24 : "太开心",
			25 : "滑稽",
			26 : "勉强",
			27 : "狂汗",
			28 : "乖",
			29 : "睡觉",
			30 : "惊哭",
			31 : "生气",
			32 : "惊讶",
			33 : "喷",
			34 : "爱心",
			35 : "心碎",
			36 : "玫瑰",
			37 : "礼物",
			38 : "彩虹",
			39 : "星星月亮",
			40 : "太阳",
			41 : "钱币",
			42 : "灯泡",
			43 : "茶杯",
			44 : "蛋糕",
			45 : "音乐",
			46 : "haha",
			47 : "胜利",
			48 : "大拇指",
			49 : "弱",
			50 : "OK"
		},
		emoji: {
			1 : "开心",
			2 : "色",
			3 : "忧郁",
			4 : "呆",
			5 : "呲牙",
			6 : "飞吻",
			7 : "媚眼",
			8 : "气愤",
			9 : "囧",
			10 : "尴尬",
			11 : "大哭",
			12 : "调皮",
			13 : "愤怒",
			14 : "累",
			15 : "鄙视",
			16 : "高兴",
			17 : "口罩",
			18 : "亲亲",
			19 : "擦汗",
			20 : "哭笑",
			21 : "可爱",
			22 : "难过",
			23 : "鬼脸",
			24 : "我晕",
			25 : "紧张",
			26 : "抓狂",
			27 : "奸笑",
			28 : "害怕",
			29 : "冷汗",
			30 : "困惑",
			31 : "笑",
			32 : "恶魔",
			33 : "鬼",
			34 : "圣诞老人",
			35 : "小狗",
			36 : "猪",
			37 : "猫",
			38 : "厉害",
			39 : "你不行",
			40 : "拳头",
			41 : "握拳",
			42 : "手势",
			43 : "强壮",
			44 : "鼓掌",
			45 : "左边",
			46 : "上边",
			47 : "右边",
			48 : "下边",
			49 : "OK",
			50 : "爱心",
			51 : "心碎",
			52 : "太阳",
			53 : "月亮",
			54 : "星星",
			55 : "闪电",
			56 : "云",
			57 : "亲一下",
			58 : "玫瑰花",
			59 : "咖啡",
			60 : "蛋糕",
			61 : "钟",
			62 : "啤酒",
			63 : "放大镜",
			64 : "手机",
			65 : "楼房",
			66 : "车",
			67 : "礼物",
			68 : "足球",
			69 : "炸弹",
			70 : "钻石",
			71 : "外星人",
			72 : "满分",
			73 : "美元",
			74 : "游戏柄",
			75 : "便便",
			76 : "求救",
			77 : "zzz",
			78 : "麦霸",
			79 : "雨伞",
			80 : "看书",
			81 : "阿弥陀佛",
			82 : "火箭",
			83 : "绿豆汤",
			84 : "西瓜"
		}
	}
},
function(e, t) {
	e.exports = function(e, t, n) {
		var o = "";
		function i(e, t, n, o, i) {
			"/" !== o.charAt(o.length - 1) && (o += "/");
			var r = 0,
			a = "",
			s = "";
			return $.map(e,
			function(c, l) {
				var f = o + l + t;
				if (r < i ? a += '<li data-code="' + n + '" data-emojiImg="' + f + '" title="' + c + '"><img src="' + f + '" width="25" height="25" /></li>': (s += "<ul>" + a + "</ul>", r = 0, a = "", a += '<li data-code="' + n + '" data-emojiImg="' + f + '" title="' + c + '"><img src="' + f + '" width="25" height="25" /></li>'), Object.keys(e).length === parseInt(l)) {
					for (var u = i - r,
					p = 0; p < u - 1; p++) a += '<li data-code="' + n + '"><img src="#" width="25" height="25" style="visibility: hidden;"></li>';
					s += "<ul>" + a + "</ul>"
				}
				r++
			}),
			'<div  class="emoji_item">' + s + "</div>"
		}
		return $.map(e,
		function(r, a) {
			var s;
			switch (a = a.toLowerCase()) {
			case "qq":
				s = i(t[a], ".png", ":", e[a].path, n),
				o += s;
				break;
			case "tieba":
				s = i(t[a], ".png", ";", e[a].path, n),
				o += s;
				break;
			case "emoji":
				s = i(t[a], ".png", ",", e[a].path, n),
				o += s
			}
		}),
		o
	}
},
function(e, t) {
	e.exports = function(e, t) {
		if ((e = e[0]).focus(), document.selection) document.selection.createRange().text = t;
		else if ("number" == typeof e.selectionStart && "number" == typeof e.selectionEnd) {
			var n = e.selectionStart,
			o = e.selectionEnd,
			i = n,
			r = e.value;
			e.value = r.substring(0, n) + t + r.substring(o, r.length),
			i += t.length,
			e.selectionStart = e.selectionEnd = i
		} else e.value += t
	}
},
function(e, t) {
	e.exports = function(e, t, n) {
		n = n.toUpperCase();
		var o, i, r = t.offset().top,
		a = t.offset().left,
		s = t.outerHeight(),
		c = t.outerWidth(),
		l = e.outerWidth(),
		f = e.outerHeight(),
		u = $(window);
		function p() {
			if (l + a > $(window).width()) {
				switch (l = $(window).width(), e.css({
					left: "0px"
				}), n) {
				case "LEFTTOP":
				case "RIGTHTOP":
					o = r - f;
					break;
				case "LEFTBOTTOM":
				case "RIGTHBOTTOM":
				default:
					o = r + s + 3
				}
				e.css({
					width: l + "px",
					top: o + "px",
					left: "0px"
				}),
				$(".emoji_item").css({
					width: l - 2 + "px"
				})
			} else {
				switch (n) {
				case "LEFTTOP":
					o = r - f - 3,
					i = a - l + c;
					break;
				case "RIGTHTOP":
					o = r - f - 3,
					i = a;
					break;
				case "RIGTHBOTTOM":
					o = r + s + 3,
					i = a;
					break;
				case "LEFTBOTTOM":
					o = r + s + 3,
					i = a - l + c;
					break;
				default:
					o = r - s - 3,
					i = a
				}
				e.css({
					top: o + "px",
					left: 0 + "px"
				})
			}
		}
		p(),
		u.resize(p())
	}
}]);