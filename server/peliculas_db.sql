-- MySQL Script generated by MySQL Workbench
-- Thu Mar 17 15:27:41 2022
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema peliculas_bd
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `peliculas_bd` ;

-- -----------------------------------------------------
-- Schema peliculas_bd
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `peliculas_bd` DEFAULT CHARACTER SET utf8 ;
USE `peliculas_bd` ;

-- -----------------------------------------------------
-- Table `peliculas_bd`.`category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `peliculas_bd`.`category` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8mb3;

CREATE UNIQUE INDEX `name_UNIQUE` ON `peliculas_bd`.`category` (`name` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `peliculas_bd`.`movies`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `peliculas_bd`.`movies` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(50) NULL DEFAULT NULL,
  `descripcion` VARCHAR(300) NULL DEFAULT NULL,
  `duracion` FLOAT NULL DEFAULT NULL,
  `trailer` VARCHAR(100) NULL DEFAULT NULL,
  `fecha_estreno` DATE NULL DEFAULT NULL,
  `category_id` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `category_id`
    FOREIGN KEY (`category_id`)
    REFERENCES `peliculas_bd`.`category` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8mb3;

CREATE INDEX `category_id_idx` ON `peliculas_bd`.`movies` (`category_id` ASC) VISIBLE;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
