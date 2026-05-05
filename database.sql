-- 1. Crear la base de datos (si no existe)
CREATE DATABASE IF NOT EXISTS `zaming-store`;
USE `zaming-store`;

-- 2. Crear la tabla de juegos
CREATE TABLE IF NOT EXISTS `juegos` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `titulo` VARCHAR(255) NOT NULL,
  `precio` DECIMAL(10, 2) NOT NULL,
  `plataforma` VARCHAR(50) NOT NULL,
  `imagen_url` VARCHAR(255) DEFAULT NULL
);

-- 3. Insertar tus primeros juegos para probar
INSERT INTO `juegos` (`titulo`, `precio`, `plataforma`, `imagen_url`) VALUES 
('Elden Ring', 59.99, 'PS5', 'public/juegos/elden-ring.jpg'),
('Zelda: Tears of the Kingdom', 69.99, 'Switch', 'public/juegos/kingdom.jpg'),
('Mouse P.I. for hire', 0.00, 'XBOX', 'public/juegos/mouse-xbox.jpg');