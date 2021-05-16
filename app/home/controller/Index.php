<?php
namespace app\home\controller;

use think\Controller;
use think\Db;
use think\Lang;
use think\Loader;
use org\JsonService;
use app\common\model\Slide;
use app\common\model\ShopGoods;
use app\common\model\ShopCoupon;
use app\common\controller\HomeBase;
use app\common\model\ImUser as ImUserModel;
use Workerman\Worker;

/**
 * workerman demo
 * Class Index
 * @package app\home\controller
 */
class Index extends HomeBase
{   
    
    private $d_wh = 'isdel=0 and status=1';
    public function list(){
        $uinfo = db('im_user')->field('id,headpic,nick_name')->select();
        
        return $this->fetch('/list',get_defined_vars());
    }
    public function index(){
        $fromid = input('param.fromid/d',0);
        $toid = input('param.toid/d',0);
        if($fromid<=0){
            $this->redirect('index/list');
        }
        if($toid==0){
            $toid = $fromid==1?2:1;
        }
        //聊天记录
        $chat_list = model('chat_list')->MQTTChatListByCourseId($fromid,$toid);
        // dump($chat_list);
        return $this->fetch('/index',get_defined_vars());
    }
   
    public function MQTTSaveMess(){
        $fromid = input('param.fromid/d',0);
        $toid = input('param.toid/d',0);
        $room_id = input('param.room_id/d',0);
        $send_mess = input('param.send_mess','');
        $chat_type = input('param.chat_type/d',1); 
        $res = model('chat_list')->MQTTSaveMess($chat_type,$room_id,$fromid,$toid,$send_mess);
        return json($res);
    }
    public function MQTTgetUserMes(){
        $uid = input('param.uid/d',0);
        $message = input('param.message','');
        $ctype = input('param.ctype/d',1); //1聊天；2打赏
        $list = model('chat_list')->MQTTgetUserMes($uid,$message,$ctype);
    }





}
