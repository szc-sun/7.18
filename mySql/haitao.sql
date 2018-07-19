/*
Navicat MySQL Data Transfer

Source Server         : szc
Source Server Version : 50553
Source Host           : localhost:3306
Source Database       : haitao

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2018-07-19 20:59:42
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for cart
-- ----------------------------
DROP TABLE IF EXISTS `cart`;
CREATE TABLE `cart` (
  `gid` varchar(10) NOT NULL,
  `img` varchar(64) NOT NULL,
  `remark` varchar(255) NOT NULL,
  `price1` varchar(255) NOT NULL,
  `nums` int(10) NOT NULL,
  PRIMARY KEY (`gid`)
) ENGINE=MyISAM AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cart
-- ----------------------------
INSERT INTO `cart` VALUES ('sp10', '三鹿', '三鹿 金丹期 结丹神器 值得拥有 采用xxxX大草原优质三聚氰胺,结丹率100%!', '$999999', '2');
INSERT INTO `cart` VALUES ('sp5', '/images/listpage/1.jpg', '2段奶粉 6罐整箱 包邮包税 澳洲 BELLAMY S 贝拉米有机奶粉2段 6个月以上 900g*6罐 整箱', '1250', '5');
INSERT INTO `cart` VALUES ('sp6', '/images/listpage/1.jpg', '2段奶粉 6罐整箱 包邮包税 澳洲 BELLAMY S 贝拉米有机奶粉2段 6个月以上 900g*6罐 整箱', '1250', '6');
INSERT INTO `cart` VALUES ('sp1', '/images/listpage/1.jpg', '2段奶粉 6罐整箱 包邮包税 澳洲 BELLAMY S 贝拉米有机奶粉2段 6个月以上 900g*6罐 整箱', '1250', '1');
INSERT INTO `cart` VALUES ('sp2', '/images/listpage/1.jpg', '2段奶粉 6罐整箱 包邮包税 澳洲 BELLAMY S 贝拉米有机奶粉2段 6个月以上 900g*6罐 整箱', '1250', '5');
INSERT INTO `cart` VALUES ('sp4', '/images/listpage/1.jpg', '2段奶粉 6罐整箱 包邮包税 澳洲 BELLAMY S 贝拉米有机奶粉2段 6个月以上 900g*6罐 整箱', '1250', '4');
INSERT INTO `cart` VALUES ('sp3', '/images/listpage/1.jpg', '2段奶粉 6罐整箱 包邮包税 澳洲 BELLAMY S 贝拉米有机奶粉2段 6个月以上 900g*6罐 整箱', '1250', '3');

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `gid` varchar(10) NOT NULL,
  `gname` varchar(20) NOT NULL,
  `price` varchar(10) NOT NULL,
  `remark` varchar(9999) NOT NULL,
  `tab1` varchar(255) NOT NULL,
  `tab2` varchar(255) NOT NULL,
  `tab3` varchar(255) NOT NULL,
  `tab4` varchar(255) NOT NULL,
  `tab5` varchar(255) NOT NULL,
  `tab6` varchar(255) NOT NULL,
  `pic1` varchar(255) NOT NULL,
  `pic2` varchar(255) NOT NULL,
  `pic3` varchar(255) NOT NULL,
  `pic4` varchar(255) NOT NULL,
  `pic5` varchar(255) NOT NULL,
  `pic6` varchar(255) NOT NULL,
  PRIMARY KEY (`gid`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES ('sp1', '贝拉米', '1250', 'BELLAMY S有机农场位于澳大利亚的一个美丽的小岛——塔斯马尼亚岛上，占地30000亩。整个农场由澳大利亚有机认证机构NASAA监控，所有奶牛均不可人工喂养饲料，整个农场的牧草均不可用杀虫剂，也不可以用化肥，奶牛也不可以使用任何药物包括抗生素，而制造奶粉的机械有特殊要求，由于NASAA有机认证的要求如此之高，包括澳大利亚及新西兰只有BELLAMY S奶粉拿到有机奶粉证书。', '1段 900g', '1段 900g*6', '2段 900g', '2段 900g*6', '3段 900g', '贝拉米3段*6罐', '/images/detailpage/1.jpg', '/images/detailpage/2.jpg', '/images/detailpage/3.jpg', '/images/detailpage/4.jpg', '/images/detailpage/5.jpg', '/images/detailpage/6.jpg');

-- ----------------------------
-- Table structure for list_table
-- ----------------------------
DROP TABLE IF EXISTS `list_table`;
CREATE TABLE `list_table` (
  `gid` varchar(10) NOT NULL,
  `gname` varchar(32) NOT NULL,
  `img` varchar(64) NOT NULL,
  `remark` varchar(128) NOT NULL,
  `price` int(10) NOT NULL,
  `addr` varchar(32) NOT NULL,
  PRIMARY KEY (`gid`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of list_table
-- ----------------------------
INSERT INTO `list_table` VALUES ('sp1', '贝拉米', '/images/listpage/1.jpg', '澳洲 BELLAMY S 贝拉米有机奶粉2段 6个月以上 900g*6罐 整箱', '1250', '澳洲');
INSERT INTO `list_table` VALUES ('sp2', '贝拉米', '/images/listpage/1.jpg', '澳洲 BELLAMY S 贝拉米有机奶粉2段 6个月以上 900g*6罐 整箱', '1250', '澳洲');
INSERT INTO `list_table` VALUES ('sp3', '贝拉米', '/images/listpage/1.jpg', '澳洲 BELLAMY S 贝拉米有机奶粉2段 6个月以上 900g*6罐 整箱', '1250', '澳洲');
INSERT INTO `list_table` VALUES ('sp4', '贝拉米', '/images/listpage/1.jpg', '澳洲 BELLAMY S 贝拉米有机奶粉2段 6个月以上 900g*6罐 整箱', '1250', '澳洲');
INSERT INTO `list_table` VALUES ('sp5', '贝拉米', '/images/listpage/1.jpg', '澳洲 BELLAMY S 贝拉米有机奶粉2段 6个月以上 900g*6罐 整箱', '1250', '澳洲');
INSERT INTO `list_table` VALUES ('sp6', '贝拉米', '/images/listpage/1.jpg', '澳洲 BELLAMY S 贝拉米有机奶粉2段 6个月以上 900g*6罐 整箱', '1250', '澳洲');

-- ----------------------------
-- Table structure for user_table
-- ----------------------------
DROP TABLE IF EXISTS `user_table`;
CREATE TABLE `user_table` (
  `uid` int(255) NOT NULL AUTO_INCREMENT,
  `uname` varchar(255) NOT NULL,
  `upwd` varchar(255) NOT NULL,
  PRIMARY KEY (`uid`),
  KEY `uid` (`uid`),
  KEY `uid_2` (`uid`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_table
-- ----------------------------
INSERT INTO `user_table` VALUES ('1', 'qd1802', '123456');
INSERT INTO `user_table` VALUES ('2', 'xiaoming', '123456');
INSERT INTO `user_table` VALUES ('3', '小红12345', '123456');
INSERT INTO `user_table` VALUES ('4', 'root', '123');
