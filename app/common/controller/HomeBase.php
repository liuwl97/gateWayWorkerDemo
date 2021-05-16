<?php
namespace app\common\controller;

use think\Cache;
use think\Controller;
use think\Cookie;
use think\Db;
use think\Session;
use org\Location;

class HomeBase extends Controller
{

    protected function _initialize()
    {
        parent::_initialize();

        $request =  request();
        $postinfo = $request->post();
        $code = $request->param("code","");
        $curl = $request->domain().$request->url(); //登录后的回调地址
        $this->curl = base64_encode($curl);
        
        $nowurl = $request->domain().$request->url();
        $this->nowurl = base64_encode($nowurl);
      

        $pid = $request->param('pid'); //上级id
        $pid = intval($pid); //11-7
        
        //检查用户是否登录
        $sess_user = session('user');
        session('uid',1);

        $request =  request();
        
        $this->assign('keyword', '');
        if (!Cookie::has('uid')) {
            $uinfo = ['id' => 0 , 'username' => ''];
        }else{
            $uinfo = db('user')->where('id',intval(cookie('uid')))->find();
        }


        $this->assign(['uinfo' => $uinfo]);
    }

   
    


  

   
}