<?php
namespace app\common\model;

use think\Db;
use think\Model;
use org\JsonService;
//直播消息聊天
class ChatList extends Model
{
    public static function MQTTSaveMess($chat_type=1,$room_id,$fromid,$toid,$message){
        $map['ctype'] = $chat_type; //1聊天；2打赏
        $map['fromid'] = $fromid;
        $map['toid'] = $toid;
        $map['room_id'] = $room_id;
        $map['content'] = $message;
        $map['addtime'] = time();
        $self = new self;
        
        if($self->allowField(true)->save($map)){
            JsonService::success('发送成功');
        }else{
            JsonService::fail('系统繁忙','',500);
        }
        
    }

    public function MQTTgetUserMes($uid,$message,$ctype=1){
        $uinfo = db('im_user')->where('id',$uid)->field('id,nick_name,headpic,user_name')->find();
        $uinfo['show_name'] = empty($uinfo['user_name'])?$uinfo['nick_name']:$uinfo['user_name'];
        $uinfo['message'] = $message;
        $uinfo['mine'] = session('uid')==$uid?1:0;
        $uinfo['ctype'] = $ctype; //返回类型，用于判断显示那种dom
        $list['0'] = $uinfo;
        JsonService::success('发送成功',$list);
    }

    //查看消息信息
    public function MQTTChatListByCourseId($fromid,$toid){
        $list = self::alias('c')
            ->field('c.*,u.nick_name,u.user_name,u.headpic')
            ->join('im_user u','u.id=c.fromid','LEFT')
            ->where('(c.fromid='.$fromid.' and c.toid='.$toid.') or (c.fromid='.$toid.' and c.toid='.$fromid.')')->order('c.id asc')->select();

        $today_start = strtotime(date('Y-m-d'));
        $today_end = $today_start+86400;

        $d0 = strtotime(date("Y",time())."-1"."-1"); //本年开始
            
        foreach ($list as $k => $v) {
            if($v['addtime']>$today_start && $v['addtime']<$today_end){
                //今天内
                $addtime = date('H:i',$v['addtime']);
            }elseif($v['addtime']<$d0){
                //不是今年
                $addtime = date('Y-m-d H:i',$v['addtime']);
            }else{
                //今年不是今天
                $addtime = date('m-d H:i',$v['addtime']);
            }
            $list[$k]['addtime'] = $addtime;

            $show_time = 1;
            if($k>0 && bcsub($v['addtime'],$list[$k-1]['addtime'],0)<30){
                //小于60秒,发送消息频繁的
                $show_time = 0;
            }
            $list[$k]['show_time'] = $show_time;
            $list[$k]['mine'] = $fromid==$v['fromid']?1:0;
            $list[$k]['show_name'] = empty($v['user_name'])?$v['nick_name']:$v['user_name'];

            $list[$k]['content'] = htmlspecialchars_decode($v['content']);
        }
        return $list;
    }
}