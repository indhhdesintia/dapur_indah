<?php
header('Content-Type: application/json');

$response = ['success' => false, 'message' => 'Terjadi kesalahan.'];

// Konfigurasi Database
$servername = "localhost"; // Ganti jika berbeda
$username = "asyifah"; // Ganti dengan username DB Anda
$password = "!RwQ.bwGuc?BaOT("; // Ganti dengan password DB Anda
$dbname = "asyifah_dbindah"; // Nama database yang sudah dibuat


// Mengambil data JSON dari request
$data = json_decode(file_get_contents("php://input"), true);

if ($_SERVER["REQUEST_METHOD"] == "POST" && $data) {
    $nama = $data['nama'] ?? '';
    $email = $data['email'] ?? '';
    $pesan = $data['pesan'] ?? '';

    // Validasi Sederhana
    if (empty($nama) || empty($email) || empty($pesan)) {
        $response['message'] = 'Semua field wajib diisi.';
        echo json_encode($response);
        exit;
    }

    // Buat Koneksi
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Cek Koneksi
    if ($conn->connect_error) {
        $response['message'] = 'Koneksi database gagal: ' . $conn->connect_error;
        echo json_encode($response);
        exit;
    }

    // Persiapan SQL dengan Prepared Statements (untuk keamanan)
    $stmt = $conn->prepare("INSERT INTO pesan_kontak (nama, email, pesan) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $nama, $email, $pesan);

    if ($stmt->execute()) {
        $response['success'] = true;
        $response['message'] = 'Pesan Anda berhasil dikirim dan tersimpan!';
    } else {
        $response['message'] = 'Gagal menyimpan data: ' . $stmt->error;
    }

    $stmt->close();
    $conn->close();
} else {
    $response['message'] = 'Metode request tidak valid atau data tidak diterima.';
}

echo json_encode($response);

?>
