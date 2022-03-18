-- MySQL Script generated by MySQL Workbench
-- Thu Mar 17 19:20:58 2022
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
-- -----------------------------------------------------
-- Schema luanaCake
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `luanaCake` ;

-- -----------------------------------------------------
-- Schema luanaCake
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `luanaCake` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
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

USE `luanaCake` ;

-- -----------------------------------------------------
-- Table `luanaCake`.`categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `luanaCake`.`categories` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `luanaCake`.`company`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `luanaCake`.`company` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NULL DEFAULT NULL,
  `phone` VARCHAR(255) NULL DEFAULT NULL,
  `cuit` VARCHAR(255) NULL DEFAULT NULL,
  `email` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `luanaCake`.`flavors`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `luanaCake`.`flavors` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `luanaCake`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `luanaCake`.`products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `category_id` INT NOT NULL,
  `flavor_id` INT NOT NULL,
  `name` VARCHAR(255) NULL DEFAULT NULL,
  `description` TEXT NULL DEFAULT NULL,
  `stock` INT NULL DEFAULT '0',
  `price` FLOAT NULL DEFAULT NULL,
  `status` TINYINT NULL DEFAULT '0',
  `img` VARCHAR(255) NULL DEFAULT 'product-default.png',
  PRIMARY KEY (`id`),
  CONSTRAINT `FK_4cedfc01-311c-4e74-b8a0-fd0748f688bf`
    FOREIGN KEY (`flavor_id`)
    REFERENCES `luanaCake`.`flavors` (`id`),
  CONSTRAINT `FK_6d7113d9-fe0e-4948-8290-0c2f270e7b3b`
    FOREIGN KEY (`category_id`)
    REFERENCES `luanaCake`.`categories` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 132
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

CREATE INDEX `FK_6d7113d9-fe0e-4948-8290-0c2f270e7b3b` ON `luanaCake`.`products` (`category_id` ASC) VISIBLE;

CREATE INDEX `FK_4cedfc01-311c-4e74-b8a0-fd0748f688bf` ON `luanaCake`.`products` (`flavor_id` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `luanaCake`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `luanaCake`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(255) NULL DEFAULT NULL,
  `password` VARCHAR(255) NULL DEFAULT NULL,
  `admin` TINYINT NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 37
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;