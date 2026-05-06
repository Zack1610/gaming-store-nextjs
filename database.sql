DROP DATABASE IF EXISTS `zaming-store`;

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

CREATE TABLE pedidos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre_cliente VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    metodo_pago VARCHAR(50) NOT NULL,
    fecha_pedido TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 3. Insertar tus primeros juegos para probar
INSERT INTO `juegos` (`titulo`, `precio`, `plataforma`, `imagen_url`) VALUES 
('Elden Ring', 59.99, 'PS5', '/juegos/elden-ring.jpg'),
('Zelda: Tears of the Kingdom', 69.99, 'Switch', '/juegos/kingdom.jpg'),
('Mouse P.I. for hire', 29.99, 'XBOX', '/juegos/mouse-xbox.jpg'),
('Cuphead', 19.99, 'Switch', '/juegos/cuphead.jpg'),
('Zelda: Breath of the Wild', 59.99, 'Switch', '/juegos/wild.jpg'),
('Black Myth: Wukong', 59.99, 'PS5', '/juegos/wukong.jpg'),
('Ill', 59.99, 'XBOX', '/juegos/ill.jpg'),
('Mortal Kombat 11', 39.99, 'PS5', '/juegos/mortal.jpg'),
('The witcher 3', 59.99, 'PS5', '/juegos/witcher.jpg'),
('Super Mario Galaxy 1 + 2', 59.99, 'Switch', '/juegos/galaxy.jpg'),
('Hollow Knight', 19.99, 'Switch', '/juegos/hollow.jpg'),
('Forza Horizon 5', 59.99, 'XBOX', '/juegos/elden.jpg'),
('Spider-Man 2', 59.99, 'PS5', '/juegos/spiderman.jpg'),
('Minecraft', 29.99, 'PS5', '/juegos/minecraft.jpg'),
('Pokemon Purpura', 59.99, 'Switch', '/juegos/violeta.jpg'),
('Rayman Legends', 39.99, 'XBOX', '/juegos/rayman.jpg'),
('resident Evil 4', 49.99, 'PS5', '/juegos/resident.jpg'),
('Mario Odyssey', 59.99, 'Switch', '/juegos/mario.jpg'),
('GTA V', 49.99, 'XBOX', '/juegos/gta.jpg'),
('Sonic Frontiers', 49.99, 'XBOX', '/juegos/sonic.jpg'),
('Halo Infinite', 29.99, 'XBOX', '/juegos/halo.jpg');