<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $nama = htmlspecialchars($_POST['nama']);
    $email = htmlspecialchars($_POST['email']);
    $saran = htmlspecialchars($_POST['saran']);

    // Simpan data ke file
    $file = 'saran.txt';
    $data = "Nama: $nama\nEmail: $email\nSaran: $saran\n---\n";
    file_put_contents($file, $data, FILE_APPEND);

    echo "<script>alert('Terima kasih atas saran Anda!'); window.location.href = 'index.html';</script>";
} else {
    echo "Formulir tidak valid.";
}
?>