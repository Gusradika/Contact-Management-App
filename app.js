// Impor modul Express
const express = require('express');

// Buat aplikasi Express baru
const app = express();
const port = 3000; // Port server yang digunakan, bisa diganti sesuai kebutuhan

// Definisikan rute pertama
app.get('/', (req, res) => {
  res.send('Halo, ini adalah halaman beranda!');
});

// Definisikan rute lainnya (jika diperlukan)
// Misalnya, rute untuk halaman lain atau API

// Mulai server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
