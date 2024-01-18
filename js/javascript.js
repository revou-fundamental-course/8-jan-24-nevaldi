// Fungsi untuk menghitung luas
function hitungLuas() {
    // Mengambil nilai panjang dan lebar dari input
    var sisi = document.getElementById('nilaiSisi').value;
  

    // Memeriksa apakah panjang atau lebar kosong
    if (sisi === '') {
        // Jika salah satu atau keduanya kosong, tampilkan pesan dan hentikan fungsi
        alert('Masukkan Nilai Sisi Terlebih Dahulu');
        return;
    }

    // Menghitung luas berdasarkan panjang dan lebar
    var luas = sisi * sisi;

    // Menampilkan hasil luas di elemen dengan id 'result'
    document.getElementById('rumus').innerHTML = `Rumus Luas : SISI X SISI`;
    document.getElementById('rumus2').innerHTML = `Rumus Luas : ${sisi} cm X ${sisi} cm`;
    document.getElementById('hasil').innerHTML = `Hasil Luas: ${luas} cm2`;
}

function hitungKel() {
    // Mengambil nilai panjang dan lebar dari input
    var sisi = document.getElementById('nilaiSisi').value;
  

    // Memeriksa apakah panjang atau lebar kosong
    if (sisi === '') {
        // Jika salah satu atau keduanya kosong, tampilkan pesan dan hentikan fungsi
        alert('Masukkan Nilai Sisi Terlebih Dahulu');
        return;
    }

    // Menghitung luas berdasarkan panjang dan lebar
    var keliling = 4 * sisi;

    // Menampilkan hasil luas di elemen dengan id 'result'
    document.getElementById('rumus').innerHTML = `Rumus Keliling : 4 X Sisi`;
    document.getElementById('rumus2').innerHTML = `Rumus Keliling : 4 X ${sisi} cm`;
    document.getElementById('hasil').innerHTML = `Hasil Keliling : ${keliling} cm`;
   
   
}

// Variabel untuk menyimpan mode saat ini (default: luas)
var mode = 'luas';

// Fungsi untuk mengubah mode antara luas dan keliling
function switchMode() {
    var switchButton = document.getElementById('tombolSwitch');
    var titleElement = document.getElementById('namaKalkulator');

    // Mengubah mode dan teks tombol
    if (mode === 'luas') {
        mode = 'keliling';
        switchButton.innerHTML = 'Tekan Untuk Hitung Luas';
        titleElement.innerHTML = 'Hitung Keliling';
    } else {
        mode = 'luas';
        switchButton.innerHTML = 'Tekan Untuk Hitung Keliling';
        titleElement.innerHTML = 'Hitung Luas';
    }
}

// Fungsi untuk melakukan perhitungan sesuai dengan mode
function hitung() {
    if (mode === 'luas') {
        hitungLuas();
    } else {
        hitungKel();
    }
}

// Fungsi untuk mereset nilai panjang dan lebar
function reset() {
    document.getElementById('nilaiSisi').value = '';
    hideResult();
}

// Fungsi untuk menyembunyikan hasil
function hideResult() {
    document.getElementById('hasil').innerHTML = 'Hasil Hitung ';
    document.getElementById('rumus2').innerHTML = '';
    document.getElementById('rumus').innerHTML = '';
}
