-- --------------------------------------------------------
-- Värd:                         127.0.0.1
-- Serverversion:                5.7.19-log - MySQL Community Server (GPL)
-- Server OS:                    Win64
-- HeidiSQL Version:             9.5.0.5223
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for eia
CREATE DATABASE IF NOT EXISTS `eia` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `eia`;

-- Dumping structure for tabell eia.excel import
CREATE TABLE IF NOT EXISTS `excel import` (
  `Kolumn 1` int(11) DEFAULT NULL,
  `Kolumn 2` int(11) DEFAULT NULL,
  `Kolumn 3` int(11) DEFAULT NULL,
  `Kolumn 4` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumpar data för tabell eia.excel import: ~0 rows (ungefär)
/*!40000 ALTER TABLE `excel import` DISABLE KEYS */;
/*!40000 ALTER TABLE `excel import` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
