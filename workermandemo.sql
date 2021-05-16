/*
Navicat MySQL Data Transfer

Source Server         : 本地
Source Server Version : 50553
Source Host           : localhost:3306
Source Database       : workermandemo

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2021-05-16 21:24:55
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for chat_list
-- ----------------------------
DROP TABLE IF EXISTS `chat_list`;
CREATE TABLE `chat_list` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `room_id` int(11) NOT NULL DEFAULT '0' COMMENT '房间名称（个人聊天为0）',
  `fromid` int(11) NOT NULL DEFAULT '0' COMMENT '发送者',
  `toid` int(11) NOT NULL DEFAULT '0' COMMENT '发送给',
  `ctype` tinyint(1) NOT NULL DEFAULT '1' COMMENT '1文本；2表情；3视频',
  `content` text CHARACTER SET utf8mb4 COMMENT '内容',
  `addtime` int(11) NOT NULL DEFAULT '0' COMMENT '时间',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=138 DEFAULT CHARSET=utf8 COMMENT='聊天消息表';

-- ----------------------------
-- Records of chat_list
-- ----------------------------
INSERT INTO `chat_list` VALUES ('1', '0', '1', '2', '1', null, '1620491344');
INSERT INTO `chat_list` VALUES ('2', '0', '1', '2', '1', null, '1620491362');
INSERT INTO `chat_list` VALUES ('3', '0', '1', '2', '1', '333333333333', '1620491426');
INSERT INTO `chat_list` VALUES ('4', '0', '2', '1', '1', '211212', '1620492199');
INSERT INTO `chat_list` VALUES ('5', '0', '2', '1', '1', '12', '1620492297');
INSERT INTO `chat_list` VALUES ('6', '0', '2', '1', '1', '11', '1620492413');
INSERT INTO `chat_list` VALUES ('7', '0', '2', '1', '1', '', '1620492451');
INSERT INTO `chat_list` VALUES ('8', '0', '2', '1', '1', '11', '1620492452');
INSERT INTO `chat_list` VALUES ('9', '0', '2', '1', '1', '11', '1620492459');
INSERT INTO `chat_list` VALUES ('10', '0', '1', '2', '1', '123', '1620492564');
INSERT INTO `chat_list` VALUES ('11', '0', '2', '1', '1', '312', '1620492569');
INSERT INTO `chat_list` VALUES ('12', '0', '2', '1', '1', '我和捧花说话', '1620492586');
INSERT INTO `chat_list` VALUES ('13', '0', '2', '1', '1', '3123123', '1620492596');
INSERT INTO `chat_list` VALUES ('14', '0', '2', '1', '1', '', '1620492603');
INSERT INTO `chat_list` VALUES ('15', '0', '2', '1', '1', '', '1620492604');
INSERT INTO `chat_list` VALUES ('16', '0', '2', '1', '1', '', '1620492605');
INSERT INTO `chat_list` VALUES ('17', '0', '2', '1', '1', '', '1620492605');
INSERT INTO `chat_list` VALUES ('18', '0', '2', '1', '1', '', '1620492605');
INSERT INTO `chat_list` VALUES ('19', '0', '2', '1', '1', '', '1620492606');
INSERT INTO `chat_list` VALUES ('20', '0', '1', '2', '1', '3123123', '1620492639');
INSERT INTO `chat_list` VALUES ('21', '0', '0', '0', '1', '', '1621152066');
INSERT INTO `chat_list` VALUES ('22', '0', '0', '0', '1', '', '1621152068');
INSERT INTO `chat_list` VALUES ('23', '0', '0', '0', '1', '', '1621152069');
INSERT INTO `chat_list` VALUES ('24', '0', '0', '0', '1', '111', '1621152070');
INSERT INTO `chat_list` VALUES ('25', '0', '1', '0', '1', '1', '1621152661');
INSERT INTO `chat_list` VALUES ('26', '0', '1', '0', '1', '211212', '1621152666');
INSERT INTO `chat_list` VALUES ('27', '0', '1', '0', '1', '[:衰]', '1621152940');
INSERT INTO `chat_list` VALUES ('28', '0', '1', '0', '1', '&lt;img src=&quot;/public/static/zhncom/emoji/qq/26.png&quot; border=&quot;0&quot;  width=&quot;25&quot; height=&quot;25&quot;&gt;&lt;img src=&quot;/public/static/zhncom/emoji/qq/38.png&quot; border=&quot;0&quot;  width=&quot;25&quot; height=&quot;25&quot;&gt;', '1621153994');
INSERT INTO `chat_list` VALUES ('29', '0', '1', '0', '1', '&lt;img src=&quot;/public/static/zhncom/emoji/qq/33.png&quot; border=&quot;0&quot;  width=&quot;25&quot; height=&quot;25&quot;&gt;', '1621154014');
INSERT INTO `chat_list` VALUES ('30', '0', '1', '0', '1', '23&lt;img src=&quot;/public/static/zhncom/emoji/qq/20.png&quot; border=&quot;0&quot;  width=&quot;25&quot; height=&quot;25&quot;&gt;', '1621154035');
INSERT INTO `chat_list` VALUES ('31', '0', '1', '0', '1', '&lt;img src=&quot;/public/static/zhncom/emoji/qq/18.png&quot; border=&quot;0&quot;  width=&quot;25&quot; height=&quot;25&quot;&gt;', '1621154161');
INSERT INTO `chat_list` VALUES ('32', '0', '1', '0', '1', '&lt;img src=&quot;/public/static/zhncom/emoji/emoji/20.png&quot; border=&quot;0&quot;  width=&quot;25&quot; height=&quot;25&quot;&gt;', '1621154257');
INSERT INTO `chat_list` VALUES ('33', '0', '1', '0', '1', '我要发一个表情&lt;img src=&quot;/public/static/zhncom/emoji/emoji/1.png&quot; border=&quot;0&quot;  width=&quot;25&quot; height=&quot;25&quot;&gt;&lt;img src=&quot;/public/static/zhncom/emoji/emoji/40.png&quot; border=&quot;0&quot;  width=&quot;25&quot; height=&quot;25&quot;&gt;', '1621154366');
INSERT INTO `chat_list` VALUES ('34', '0', '1', '0', '1', '&lt;img src=&quot;/public/static/zhncom/emoji/tieba/18.png&quot; border=&quot;0&quot;  width=&quot;25&quot; height=&quot;25&quot;&gt;', '1621154610');
INSERT INTO `chat_list` VALUES ('35', '0', '1', '0', '1', '&lt;img src=&quot;/public/static/zhncom/emoji/qq/27.png&quot; border=&quot;0&quot;  width=&quot;25&quot; height=&quot;25&quot;&gt;', '1621155224');
INSERT INTO `chat_list` VALUES ('36', '0', '1', '0', '1', '', '1621155267');
INSERT INTO `chat_list` VALUES ('37', '0', '1', '0', '1', '&lt;img src=&quot;/public/static/zhncom/emoji/qq/25.png&quot; border=&quot;0&quot;  width=&quot;25&quot; height=&quot;25&quot;&gt;', '1621155274');
INSERT INTO `chat_list` VALUES ('38', '0', '1', '0', '1', '&lt;img src=&quot;/public/static/zhncom/emoji/qq/19.png&quot; border=&quot;0&quot;  width=&quot;25&quot; height=&quot;25&quot;&gt;', '1621156034');
INSERT INTO `chat_list` VALUES ('39', '0', '1', '0', '1', '&lt;img src=&quot;/public/static/zhncom/emoji/qq/28.png&quot; border=&quot;0&quot;  width=&quot;25&quot; height=&quot;25&quot;&gt;', '1621156039');
INSERT INTO `chat_list` VALUES ('40', '0', '1', '0', '1', '', '1621156636');
INSERT INTO `chat_list` VALUES ('41', '0', '1', '0', '1', '', '1621156637');
INSERT INTO `chat_list` VALUES ('42', '0', '1', '0', '1', '', '1621156637');
INSERT INTO `chat_list` VALUES ('43', '0', '1', '0', '1', '', '1621156639');
INSERT INTO `chat_list` VALUES ('44', '0', '1', '0', '1', '111', '1621157289');
INSERT INTO `chat_list` VALUES ('45', '0', '1', '0', '1', '11', '1621157300');
INSERT INTO `chat_list` VALUES ('46', '0', '1', '0', '1', '111&lt;img src=&quot;/public/static/zhncom/emoji/qq/37.png&quot; border=&quot;0&quot;  width=&quot;25&quot; height=&quot;25&quot;&gt;', '1621157328');
INSERT INTO `chat_list` VALUES ('47', '0', '1', '0', '1', '11111&lt;img src=&quot;/public/static/zhncom/emoji/qq/38.png&quot; border=&quot;0&quot;  width=&quot;25&quot; height=&quot;25&quot;&gt;', '1621157351');
INSERT INTO `chat_list` VALUES ('48', '0', '1', '0', '1', '&lt;img src=&quot;/public/static/zhncom/emoji/qq/12.png&quot; border=&quot;0&quot;  width=&quot;25&quot; height=&quot;25&quot;&gt;', '1621157626');
INSERT INTO `chat_list` VALUES ('49', '0', '1', '0', '1', '123', '1621157664');
INSERT INTO `chat_list` VALUES ('50', '0', '1', '0', '1', '1111', '1621157679');
INSERT INTO `chat_list` VALUES ('51', '0', '1', '0', '1', '1111', '1621157726');
INSERT INTO `chat_list` VALUES ('52', '0', '1', '0', '1', '123', '1621157756');
INSERT INTO `chat_list` VALUES ('53', '0', '1', '0', '1', '123123', '1621157769');
INSERT INTO `chat_list` VALUES ('54', '0', '1', '0', '1', '234', '1621157863');
INSERT INTO `chat_list` VALUES ('55', '0', '1', '0', '1', '&lt;img src=&quot;/public/static/zhncom/emoji/qq/0.png&quot; border=&quot;0&quot;  width=&quot;25&quot; height=&quot;25&quot;&gt;&lt;img src=&quot;/public/static/zhncom/emoji/qq/36.png&quot; border=&quot;0&quot;  width=&quot;25&quot; height=&quot;25&quot;&gt;', '1621158415');
INSERT INTO `chat_list` VALUES ('56', '0', '1', '0', '1', '1', '1621159429');
INSERT INTO `chat_list` VALUES ('57', '0', '1', '0', '1', '222', '1621159433');
INSERT INTO `chat_list` VALUES ('58', '0', '1', '0', '1', '21&lt;img src=&quot;/public/static/zhncom/emoji/qq/37.png&quot; border=&quot;0&quot;  width=&quot;25&quot; height=&quot;25&quot;&gt;', '1621159449');
INSERT INTO `chat_list` VALUES ('59', '0', '1', '0', '1', '234&lt;img src=&quot;/public/static/zhncom/emoji/qq/29.png&quot; border=&quot;0&quot;  width=&quot;25&quot; height=&quot;25&quot;&gt;', '1621159463');
INSERT INTO `chat_list` VALUES ('60', '0', '1', '0', '1', '123&lt;img src=&quot;/public/static/zhncom/emoji/qq/36.png&quot; border=&quot;0&quot;  width=&quot;25&quot; height=&quot;25&quot;&gt;', '1621160306');
INSERT INTO `chat_list` VALUES ('61', '0', '1', '0', '1', '&lt;img src=&quot;/public/static/zhncom/emoji/qq/0.png&quot; border=&quot;0&quot;  width=&quot;25&quot; height=&quot;25&quot;&gt;', '1621160702');
INSERT INTO `chat_list` VALUES ('62', '0', '1', '0', '1', '&lt;img src=&quot;/public/static/zhncom/emoji/tieba/35.png&quot; border=&quot;0&quot;  width=&quot;25&quot; height=&quot;25&quot;&gt;', '1621161041');
INSERT INTO `chat_list` VALUES ('63', '0', '1', '0', '1', '', '1621161043');
INSERT INTO `chat_list` VALUES ('64', '0', '1', '0', '1', '', '1621161044');
INSERT INTO `chat_list` VALUES ('65', '0', '1', '0', '1', '24', '1621161363');
INSERT INTO `chat_list` VALUES ('66', '0', '1', '0', '1', '&lt;img src=&quot;/public/static/zhncom/emoji/qq/36.png&quot; border=&quot;0&quot;  width=&quot;25&quot; height=&quot;25&quot;&gt;', '1621161381');
INSERT INTO `chat_list` VALUES ('67', '0', '1', '0', '1', '1231', '1621161434');
INSERT INTO `chat_list` VALUES ('68', '0', '1', '0', '1', '123', '1621161454');
INSERT INTO `chat_list` VALUES ('69', '0', '1', '0', '1', '', '1621161455');
INSERT INTO `chat_list` VALUES ('70', '0', '1', '0', '1', '12', '1621161457');
INSERT INTO `chat_list` VALUES ('71', '0', '1', '0', '1', '213', '1621161486');
INSERT INTO `chat_list` VALUES ('72', '0', '2', '0', '1', '111', '1621162612');
INSERT INTO `chat_list` VALUES ('73', '0', '1', '2', '1', '12121', '1621162617');
INSERT INTO `chat_list` VALUES ('74', '0', '1', '2', '1', '121', '1621162661');
INSERT INTO `chat_list` VALUES ('75', '0', '1', '2', '1', '1212', '1621162708');
INSERT INTO `chat_list` VALUES ('76', '0', '2', '1', '1', '111', '1621162722');
INSERT INTO `chat_list` VALUES ('77', '0', '2', '1', '1', '123131', '1621162725');
INSERT INTO `chat_list` VALUES ('78', '0', '2', '1', '1', '&lt;img src=&quot;/public/static/zhncom/emoji/qq/19.png&quot; border=&quot;0&quot;  width=&quot;25&quot; height=&quot;25&quot;&gt;', '1621162732');
INSERT INTO `chat_list` VALUES ('79', '0', '2', '1', '1', '&lt;img src=&quot;/public/static/zhncom/emoji/qq/29.png&quot; border=&quot;0&quot;  width=&quot;25&quot; height=&quot;25&quot;&gt;', '1621162753');
INSERT INTO `chat_list` VALUES ('80', '0', '2', '1', '1', '111', '1621162766');
INSERT INTO `chat_list` VALUES ('81', '0', '2', '1', '1', '&lt;img src=&quot;/public/static/zhncom/emoji/qq/34.png&quot; border=&quot;0&quot;  width=&quot;25&quot; height=&quot;25&quot;&gt;', '1621162772');
INSERT INTO `chat_list` VALUES ('82', '0', '2', '1', '1', '&lt;img src=&quot;/public/static/zhncom/emoji/qq/36.png&quot; border=&quot;0&quot;  width=&quot;25&quot; height=&quot;25&quot;&gt;', '1621162915');
INSERT INTO `chat_list` VALUES ('83', '0', '2', '1', '1', '', '1621162934');
INSERT INTO `chat_list` VALUES ('84', '0', '2', '1', '1', '', '1621162935');
INSERT INTO `chat_list` VALUES ('85', '0', '2', '1', '1', '&lt;img src=&quot;/public/static/zhncom/emoji/qq/36.png&quot; border=&quot;0&quot;  width=&quot;25&quot; height=&quot;25&quot;&gt;', '1621162940');
INSERT INTO `chat_list` VALUES ('86', '0', '2', '1', '1', '&lt;img src=&quot;/public/static/zhncom/emoji/qq/27.png&quot; border=&quot;0&quot;  width=&quot;25&quot; height=&quot;25&quot;&gt;', '1621162995');
INSERT INTO `chat_list` VALUES ('87', '0', '2', '1', '1', '', '1621163038');
INSERT INTO `chat_list` VALUES ('88', '0', '2', '1', '1', '&lt;img src=&quot;/public/static/zhncom/emoji/qq/36.png&quot; border=&quot;0&quot;  width=&quot;25&quot; height=&quot;25&quot;&gt;', '1621163041');
INSERT INTO `chat_list` VALUES ('89', '0', '2', '1', '1', '&lt;img src=&quot;/public/static/zhncom/emoji/qq/27.png&quot; border=&quot;0&quot;  width=&quot;25&quot; height=&quot;25&quot;&gt;', '1621163120');
INSERT INTO `chat_list` VALUES ('90', '0', '2', '1', '1', '', '1621163190');
INSERT INTO `chat_list` VALUES ('91', '0', '2', '1', '1', '&lt;img src=&quot;/public/static/zhncom/emoji/qq/28.png&quot; border=&quot;0&quot;  width=&quot;25&quot; height=&quot;25&quot;&gt;', '1621163193');
INSERT INTO `chat_list` VALUES ('92', '0', '2', '1', '1', '&lt;img src=&quot;/public/static/zhncom/emoji/qq/38.png&quot; border=&quot;0&quot;  width=&quot;25&quot; height=&quot;25&quot;&gt;', '1621163217');
INSERT INTO `chat_list` VALUES ('93', '0', '2', '1', '1', '', '1621163219');
INSERT INTO `chat_list` VALUES ('94', '0', '2', '1', '1', '', '1621163224');
INSERT INTO `chat_list` VALUES ('95', '0', '2', '1', '1', '', '1621163227');
INSERT INTO `chat_list` VALUES ('96', '0', '2', '1', '1', '1111', '1621163229');
INSERT INTO `chat_list` VALUES ('97', '0', '2', '1', '1', '', '1621163249');
INSERT INTO `chat_list` VALUES ('98', '0', '2', '1', '1', '312312313', '1621163258');
INSERT INTO `chat_list` VALUES ('99', '0', '2', '1', '1', '3123123', '1621163262');
INSERT INTO `chat_list` VALUES ('100', '0', '2', '1', '1', '11111', '1621163266');
INSERT INTO `chat_list` VALUES ('101', '0', '2', '1', '1', '&lt;img src=&quot;/public/static/zhncom/emoji/qq/20.png&quot; border=&quot;0&quot;  width=&quot;25&quot; height=&quot;25&quot;&gt;', '1621163271');
INSERT INTO `chat_list` VALUES ('102', '0', '2', '1', '1', '', '1621163294');
INSERT INTO `chat_list` VALUES ('103', '0', '2', '1', '1', '&lt;img src=&quot;/public/static/zhncom/emoji/qq/27.png&quot; border=&quot;0&quot;  width=&quot;25&quot; height=&quot;25&quot;&gt;', '1621163298');
INSERT INTO `chat_list` VALUES ('104', '0', '2', '1', '1', '11', '1621167658');
INSERT INTO `chat_list` VALUES ('105', '0', '2', '1', '1', '&lt;img src=&quot;/public/static/zhncom/emoji/qq/35.png&quot; border=&quot;0&quot;  width=&quot;25&quot; height=&quot;25&quot;&gt;', '1621167663');
INSERT INTO `chat_list` VALUES ('106', '0', '2', '1', '1', '&lt;img src=&quot;/public/static/zhncom/emoji/qq/28.png&quot; border=&quot;0&quot;  width=&quot;25&quot; height=&quot;25&quot;&gt;', '1621168281');
INSERT INTO `chat_list` VALUES ('107', '0', '2', '1', '1', '', '1621168300');
INSERT INTO `chat_list` VALUES ('108', '0', '2', '1', '1', '123', '1621168304');
INSERT INTO `chat_list` VALUES ('109', '0', '2', '1', '1', '&lt;img src=&quot;/public/static/zhncom/emoji/qq/38.png&quot; border=&quot;0&quot;  width=&quot;25&quot; height=&quot;25&quot;&gt;', '1621168309');
INSERT INTO `chat_list` VALUES ('110', '0', '2', '1', '1', '&quot;&lt;img src=\\&quot;/public/static/zhncom/emoji/qq/36.png\\&quot; border=\\&quot;0\\&quot;  width=\\&quot;25\\&quot; height=\\&quot;25\\&quot;&gt;&quot;', '1621168675');
INSERT INTO `chat_list` VALUES ('111', '0', '2', '1', '1', '234234&lt;img src=&quot;/public/static/zhncom/emoji/qq/20.png&quot; border=&quot;0&quot;  width=&quot;25&quot; height=&quot;25&quot;&gt;', '1621168720');
INSERT INTO `chat_list` VALUES ('112', '0', '1', '2', '1', '&lt;img src=&quot;/public/static/zhncom/emoji/qq/30.png&quot; border=&quot;0&quot;  width=&quot;25&quot; height=&quot;25&quot;&gt;', '1621170360');
INSERT INTO `chat_list` VALUES ('113', '0', '2', '1', '1', '&lt;img src=&quot;/public/static/zhncom/emoji/qq/37.png&quot; border=&quot;0&quot;  width=&quot;25&quot; height=&quot;25&quot;&gt;', '1621170624');
INSERT INTO `chat_list` VALUES ('114', '0', '1', '2', '1', '1111', '1621170657');
INSERT INTO `chat_list` VALUES ('115', '0', '1', '2', '1', '&lt;img src=&quot;/public/static/zhncom/emoji/qq/2.png&quot; border=&quot;0&quot;  width=&quot;25&quot; height=&quot;25&quot;&gt;', '1621170661');
INSERT INTO `chat_list` VALUES ('116', '0', '1', '2', '1', '&lt;img src=&quot;/public/static/zhncom/emoji/qq/34.png&quot; border=&quot;0&quot;  width=&quot;25&quot; height=&quot;25&quot;&gt;', '1621170674');
INSERT INTO `chat_list` VALUES ('117', '0', '1', '2', '1', '11&lt;img src=&quot;/public/static/zhncom/emoji/qq/34.png&quot; border=&quot;0&quot;  width=&quot;25&quot; height=&quot;25&quot;&gt;', '1621170703');
INSERT INTO `chat_list` VALUES ('118', '0', '2', '1', '1', '&lt;img src=&quot;/public/static/zhncom/emoji/qq/34.png&quot; border=&quot;0&quot;  width=&quot;25&quot; height=&quot;25&quot;&gt;', '1621170710');
INSERT INTO `chat_list` VALUES ('119', '0', '1', '2', '1', '&lt;img src=&quot;/public/static/zhncom/emoji/qq/36.png&quot; border=&quot;0&quot;  width=&quot;25&quot; height=&quot;25&quot;&gt;', '1621170778');
INSERT INTO `chat_list` VALUES ('120', '0', '1', '2', '1', '&lt;img src=&quot;/public/static/zhncom/emoji/qq/37.png&quot; border=&quot;0&quot;  width=&quot;25&quot; height=&quot;25&quot;&gt;', '1621170797');
INSERT INTO `chat_list` VALUES ('121', '0', '1', '2', '1', '&lt;img src=&quot;/public/static/zhncom/emoji/qq/10.png&quot; border=&quot;0&quot;  width=&quot;25&quot; height=&quot;25&quot;&gt;&lt;img src=&quot;/public/static/zhncom/emoji/qq/10.png&quot; border=&quot;0&quot;  width=&quot;25&quot; height=&quot;25&quot;&gt;', '1621170806');
INSERT INTO `chat_list` VALUES ('122', '0', '1', '2', '1', '&lt;img src=&quot;/public/static/zhncom/emoji/qq/35.png&quot; border=&quot;0&quot;  width=&quot;25&quot; height=&quot;25&quot;&gt;11', '1621170816');
INSERT INTO `chat_list` VALUES ('123', '0', '1', '2', '1', '', '1621170845');
INSERT INTO `chat_list` VALUES ('124', '0', '1', '2', '1', '&lt;img src=&quot;/public/static/zhncom/emoji/qq/11.png&quot; border=&quot;0&quot;  width=&quot;25&quot; height=&quot;25&quot;&gt;', '1621170888');
INSERT INTO `chat_list` VALUES ('125', '0', '1', '2', '1', '&lt;img src=&quot;/public/static/zhncom/emoji/qq/35.png&quot; border=&quot;0&quot;  width=&quot;25&quot; height=&quot;25&quot;&gt;', '1621170902');
INSERT INTO `chat_list` VALUES ('126', '0', '1', '2', '1', '&lt;img src=&quot;/public/static/zhncom/emoji/qq/35.png&quot; border=&quot;0&quot;  width=&quot;25&quot; height=&quot;25&quot;&gt;', '1621170986');
INSERT INTO `chat_list` VALUES ('127', '0', '1', '2', '1', '&lt;img src=&quot;/public/static/zhncom/emoji/qq/0.png&quot; border=&quot;0&quot;  width=&quot;25&quot; height=&quot;25&quot;&gt;', '1621170992');
INSERT INTO `chat_list` VALUES ('128', '0', '1', '2', '1', '&lt;img src=&quot;/public/static/zhncom/emoji/qq/19.png&quot; border=&quot;0&quot;  width=&quot;25&quot; height=&quot;25&quot;&gt;&lt;img src=&quot;/public/static/zhncom/emoji/qq/19.png&quot; border=&quot;0&quot;  width=&quot;25&quot; height=&quot;25&quot;&gt;', '1621170998');
INSERT INTO `chat_list` VALUES ('129', '0', '1', '2', '1', '&lt;img src=&quot;/public/static/zhncom/emoji/qq/31.png&quot; border=&quot;0&quot;  width=&quot;25&quot; height=&quot;25&quot;&gt;', '1621171030');
INSERT INTO `chat_list` VALUES ('130', '0', '1', '2', '1', '&lt;img src=&quot;/public/static/zhncom/emoji/qq/34.png&quot; border=&quot;0&quot;  width=&quot;25&quot; height=&quot;25&quot;&gt;', '1621171060');
INSERT INTO `chat_list` VALUES ('131', '0', '2', '1', '1', '1', '1621171107');
INSERT INTO `chat_list` VALUES ('132', '0', '2', '1', '1', '222', '1621171111');
INSERT INTO `chat_list` VALUES ('133', '0', '2', '1', '1', '&lt;img src=&quot;/public/static/zhncom/emoji/qq/35.png&quot; border=&quot;0&quot;  width=&quot;25&quot; height=&quot;25&quot;&gt;', '1621171115');
INSERT INTO `chat_list` VALUES ('134', '0', '2', '1', '1', '&lt;img src=&quot;/public/static/zhncom/emoji/qq/0.png&quot; border=&quot;0&quot;  width=&quot;25&quot; height=&quot;25&quot;&gt;', '1621171121');
INSERT INTO `chat_list` VALUES ('135', '0', '2', '1', '1', '&lt;img src=&quot;/public/static/zhncom/emoji/qq/36.png&quot; border=&quot;0&quot;  width=&quot;25&quot; height=&quot;25&quot;&gt;', '1621171155');
INSERT INTO `chat_list` VALUES ('136', '0', '2', '1', '1', '&lt;img src=&quot;/public/static/zhncom/emoji/qq/3.png&quot; border=&quot;0&quot;  width=&quot;25&quot; height=&quot;25&quot;&gt;', '1621171159');
INSERT INTO `chat_list` VALUES ('137', '0', '2', '1', '1', '&lt;img src=&quot;/public/static/zhncom/emoji/qq/32.png&quot; border=&quot;0&quot;  width=&quot;25&quot; height=&quot;25&quot;&gt;', '1621171162');

-- ----------------------------
-- Table structure for im_user
-- ----------------------------
DROP TABLE IF EXISTS `im_user`;
CREATE TABLE `im_user` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `pid` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '上级id  ',
  `pid2` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '上上级id',
  `parent_arr` longtext COMMENT '上级id数组',
  `child_arr` longtext COMMENT '下级id数组',
  `is_vip` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否是vip，定时任务取消',
  `wx_openid` varchar(255) DEFAULT '' COMMENT '微信OPENid',
  `wx_token` varchar(255) DEFAULT '' COMMENT '微信TOKEN',
  `wx_headpic` varchar(255) DEFAULT '' COMMENT '微信头像',
  `wx_name` varchar(60) DEFAULT NULL COMMENT '微信号',
  `phone` varchar(30) DEFAULT '' COMMENT '手机号码',
  `user_name` varchar(50) CHARACTER SET utf8mb4 DEFAULT NULL COMMENT '用户名',
  `nick_name` varchar(55) CHARACTER SET utf8mb4 DEFAULT NULL COMMENT '用户昵称',
  `login_pass` varchar(100) DEFAULT '' COMMENT '登录密码',
  `headpic` varchar(255) DEFAULT '' COMMENT '头像',
  `sex` tinyint(1) NOT NULL DEFAULT '0' COMMENT '性别-男1-女2',
  `area` int(11) NOT NULL DEFAULT '0' COMMENT '区域',
  `province` int(11) NOT NULL DEFAULT '0' COMMENT '省份',
  `city` int(11) DEFAULT '0' COMMENT '城市',
  `address` varchar(200) DEFAULT NULL COMMENT '详细地址',
  `wx_lat` varchar(55) DEFAULT '' COMMENT '位置-纬度',
  `wx_lng` varchar(55) DEFAULT '' COMMENT '位置-精度',
  `lastatime` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '地理位置最后授权时间',
  `last_login` int(11) NOT NULL DEFAULT '0' COMMENT '最后登录时间',
  `last_ip` varchar(15) DEFAULT '' COMMENT '最后登录ip',
  `isdel` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否删除',
  `status` tinyint(4) NOT NULL DEFAULT '1' COMMENT '状态',
  `login_status` tinyint(1) NOT NULL DEFAULT '0' COMMENT '登录状态',
  `retmoney` decimal(10,2) NOT NULL DEFAULT '0.00' COMMENT '我的佣金',
  `addtime` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '添加时间',
  `modtime` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '修改时间',
  `lang` tinyint(1) NOT NULL DEFAULT '1' COMMENT '语言1中文；2英文；3日语',
  `basic_coupon` tinyint(1) NOT NULL DEFAULT '0' COMMENT '完善基本信息的券',
  `company_name` varchar(150) DEFAULT NULL COMMENT '公司名称',
  `job` varchar(60) DEFAULT NULL COMMENT '职位',
  `get_sendfeed_num` int(11) NOT NULL DEFAULT '0' COMMENT '获取赠送的咨询数',
  PRIMARY KEY (`id`) USING BTREE,
  KEY `parent_id` (`pid`) USING BTREE
) ENGINE=MyISAM AUTO_INCREMENT=52 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC COMMENT='平台会员';

-- ----------------------------
-- Records of im_user
-- ----------------------------
INSERT INTO `im_user` VALUES ('1', '1', '0', '0,1', '', '0', '', '', '', 'liuwl', '18813860416', '111', 'liuwenli', 'd3dd43d51e9998bb60284444914bf87f', '/public/uploads/headpic/2.jpg', '0', '0', '0', '0', '', '', '', '0', '0', '', '0', '1', '1', '1.00', '1577240612', '1577240834', '1', '1', '豪大大集团', '董事长', '0');
INSERT INTO `im_user` VALUES ('2', '0', '0', null, null, '0', '', '', '', null, '', null, 'zyx', '', '/public/uploads/headpic/1.jpg', '0', '0', '0', '0', null, '', '', '0', '0', '', '0', '1', '0', '0.00', '0', '0', '1', '0', null, null, '0');
