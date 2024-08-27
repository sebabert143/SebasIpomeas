CREATE DATABASE tienda_online;

USE tienda_online;

CREATE TABLE productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    descripcion TEXT,
    precio DECIMAL(10, 2) NOT NULL,
    imagen_url VARCHAR(255),
    stock INT DEFAULT 0,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO productos (nombre, descripcion, precio, imagen_url, stock)
VALUES 
('Kikyo Rose', 'Esta enredadera está decorada con hojas verdes variegadas que sirven de delicado telón de fondo para estas impresionantes flores.', 15.00, 'https://jmgvines.com/wp-content/uploads/2018/11/dscn1437.jpg?w=2500&h=', 10),
('Ipomea Ochracea', 'Estas hermosas pequeñas flores amarillas brillantes dejan atónito al observador cada mañana.', 12.00, 'https://i0.wp.com/jmgvines.com/wp-content/uploads/2015/01/dscn0305.jpg?w=2500&h=&ssl=1', 20),
('Fuji no Murasaki', 'Su profundo violeta despierta la imaginación y enriquece cada mañana, desde el verano hasta el otoño.', 18.00, 'https://jmgvines.com/wp-content/uploads/2016/02/1-17-dscn7224.jpg?w=2500&h=', 15),
('Andromeda', 'Esta variedad de ipomea presenta flores moradas impresionantes que son muy atractivas para los polinizadores y producen semillas con facilidad.', 20.00, 'https://jmgvines.com/wp-content/uploads/2021/02/1dscn6607.jpg?w=2500&h=', 8);

