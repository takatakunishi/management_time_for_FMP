-- SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
-- SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
-- SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

CREATE SCHEMA IF NOT EXISTS `time_management_app` DEFAULT CHARACTER SET utf8;
USE `time_management_app`;

# --
# -- table
# --
CREATE TABLE IF NOT EXISTS `time_management_app`.`timeManagement` (
#   `time_id` VARCHAR(128) NOT NULL COMMENT '時間ID',
  `user_id` VARCHAR(128) NOT NULL COMMENT 'ユーザID',
  `Status` INT NOT NULL COMMENT'時間ステータス 1:出勤 2:退勤 3:休憩(入) 4:休憩(戻)',
  `yearDate` VARCHAR(64) NOT NULL COMMENT '年日付',
  `hourMinute` VARCHAR(64) NOT NULL COMMENT '時分',
  PRIMARY KEY (`user_id`)
)
COMMENT = '時間管理';

# CREATE TABLE IF NOT EXISTS `time_management_app`.`timeDetails` (
#     `time_id` VARCHAR(128) NOT NULL COMMENT '時間ID',
#     `yearDate` VARCHAR(64) NOT NULL COMMENT '年日付',
#     `hourMinute` VARCHAR(64) NOT NULL COMMENT '時分',
#     PRIMARY KEY (`time_id`)
# )
