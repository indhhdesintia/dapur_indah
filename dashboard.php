<?php
// Konfigurasi Database
$servername = "localhost"; // Ganti jika berbeda
$username = "asyifah"; // Ganti dengan username DB Anda
$password = "!RwQ.bwGuc?BaOT("; // Ganti dengan password DB Anda
$dbname = "asyifah_dbindah"; // Nama database yang sudah dibuat


// Buat Koneksi
$conn = new mysqli($servername, $username, $password, $dbname);

// Cek Koneksi
if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}

// Ambil semua pesan
$sql = "SELECT id, nama, email, pesan, tanggal_kirim FROM pesan_kontak ORDER BY tanggal_kirim DESC";
$result = $conn->query($sql);

?>
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard Admin DapurUmmiIn</title>
    <link rel="stylesheet" href="style.css"> <style>
        /* CSS Sederhana untuk Dashboard */
        body { font-family: sans-serif; background-color: #f4f4f4; padding: 20px; }
        .dashboard-container { max-width: 1000px; margin: auto; background-color: white; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1); }
        h1 { color: #FF5555; }
        table { width: 100%; border-collapse: collapse; margin-top: 20px; }
        th, td { border: 1px solid #ddd; padding: 10px; text-align: left; }
        th { background-color: #FF937E; color: white; }
        tr:nth-child(even) { background-color: #f2f2f2; }
    </style>
</head>
<body>
    <div class="dashboard-container">
        <h1>Dashboard Pesan Kontak</h1>
        <p>Total Pesan Masuk: <?php echo $result->num_rows; ?></p>
        
        <?php if ($result->num_rows > 0): ?>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nama</th>
                        <th>Email</th>
                        <th>Pesan</th>
                        <th>Tanggal Kirim</th>
                    </tr>
                </thead>
                <tbody>
                    <?php while($row = $result->fetch_assoc()): ?>
                    <tr>
                        <td><?php echo $row['id']; ?></td>
                        <td><?php echo htmlspecialchars($row['nama']); ?></td>
                        <td><?php echo htmlspecialchars($row['email']); ?></td>
                        <td><?php echo htmlspecialchars(substr($row['pesan'], 0, 100)) . '...'; ?></td>
                        <td><?php echo $row['tanggal_kirim']; ?></td>
                    </tr>
                    <?php endwhile; ?>
                </tbody>
            </table>
        <?php else: ?>
            <p>Belum ada pesan kontak yang masuk.</p>
        <?php endif; ?>

        <p style="margin-top: 30px;"><a href="index.html">← Kembali ke Beranda</a></p>
    </div>
</body>
</html>
<?php
$conn->close();

?>
