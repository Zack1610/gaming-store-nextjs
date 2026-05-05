import mysql from 'mysql2/promise';

// Configuramos la conexión a tu MySQL de XAMPP
export const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '', // Por defecto en XAMPP está vacío
  database: 'zaming-store', // El nombre que elegiste
});