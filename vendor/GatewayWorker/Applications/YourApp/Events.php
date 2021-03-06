<?php
/**
 * This file is part of workerman.
 *
 * Licensed under The MIT License
 * For full copyright and license information, please see the MIT-LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @author walkor<walkor@workerman.net>
 * @copyright walkor<walkor@workerman.net>
 * @link http://www.workerman.net/
 * @license http://www.opensource.org/licenses/mit-license.php MIT License
 */

/**
 * 用于检测业务代码死循环或者长时间阻塞等问题
 * 如果发现业务卡死，可以将下面declare打开（去掉//注释），并执行php start.php reload
 * 然后观察一段时间workerman.log看是否有process_timeout异常
 */
//declare(ticks=1);

use \GatewayWorker\Lib\Gateway;

/**
 * 主逻辑
 * 主要是处理 onConnect onMessage onClose 三个方法
 * onConnect 和 onClose 如果不需要可以不用实现并删除
 */
class Events
{
    /**
     * 当客户端连接时触发
     * 如果业务不需此回调可以删除onConnect
     * 
     * @param int $client_id 连接id
     */
    public static function onConnect($client_id)
    { 
      // global $num;
      //   // 向当前client_id发送数据 
      //   Gateway::sendToClient($client_id, "Hello $client_id\r\n");
      //   // 向所有人发送
      //   Gateway::sendToAll("$client_id login\r\n");

      //   echo 'connect'.++$num.':'.$client_id."\n";

      // Gateway::unbindUid( $client_id, );
      Gateway::sendToClient($client_id,json_encode(
          [
            'type'=>'init',
            'client_id'=>$client_id,
          ]
        ));
    }
    
   /**
    * 当客户端发来消息时触发
    * @param int $client_id 连接id
    * @param mixed $message 具体消息
    */
   public static function onMessage($client_id, $message)
   {  

        $message_data = json_decode($message,true);
        if(!$message_data) return;

        switch ($message_data['type']) {
          case 'ping':
            // $text = nl2br(htmlspecialchars_decode($message_data['data']));
            // $fromid = $message_data['fromid'];
            // $toid = $message_data['toid'];
            // $date =[
            //   'type'=>'ping',
            //   'data'=>$text,
            //   'fromid'=>$fromid,
            //   'toid'=>$toid,
            //   'time'=>time(),
            // ];
            //心跳检测，不做操作
            // Gateway::sendToUid($toid,json_encode($date));
            break;
          case 'bind':
            //绑定链接id
            Gateway::bindUid($client_id, $message_data['fromid']);

            break;
          case 'say':
            $text = htmlspecialchars_decode($message_data['data']);
            $fromid = $message_data['fromid'];
            $toid = $message_data['toid'];
            $date =[
              'type'=>'text',
              // 'id'  =>$client_id,
              'data'=>$text,
              'fromid'=>$fromid,
              'toid'=>$toid,
              'time'=>time(),
            ];
            Gateway::sendToUid($toid, json_encode($date));
            // 向所有人发送 
            // Gateway::sendToAll(json_encode($date));
            break;
          
          default:
            # code...
            break;
        }
        
   }
   
   /**
    * 当用户断开连接时触发
    * @param int $client_id 连接id
    */
   public static function onClose($client_id)
   {
       // 向所有人发送 
       // GateWay::sendToAll("$client_id logout\r\n");
   }
}
