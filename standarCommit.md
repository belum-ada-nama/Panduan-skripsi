### 1. **Format Pesan Commit**
Pesan commit umumnya terdiri dari dua bagian utama: **judul** dan **deskripsi** (opsional). Format yang disarankan adalah:

```
<tipe> (<area>): <ringkasan singkat>

<deskripsi yang lebih panjang dan penjelasan (jika diperlukan)>
```

### 2. **Tipe Commit**
Tipe commit adalah kata kunci yang menggambarkan tujuan perubahan. Berikut adalah beberapa tipe commit yang umum digunakan:

- **feat**: Menambahkan fitur baru.
- **fix**: Memperbaiki bug atau kesalahan.
- **docs**: Memperbarui dokumentasi.
- **style**: Perubahan terkait dengan format kode (misalnya indentasi, pemformatan, dll), tanpa mempengaruhi fungsionalitas.
- **refactor**: Refaktor kode yang tidak mengubah perilaku aplikasi tetapi meningkatkan kualitas kode.
- **perf**: Meningkatkan performa aplikasi.
- **test**: Menambah atau memperbarui tes.
- **chore**: Perubahan terkait tugas pengelolaan atau pemeliharaan (misalnya memperbarui dependensi).
- **build**: Mengubah konfigurasi build atau sistem pengelolaan dependensi.
- **ci**: Perubahan terkait dengan pengaturan continuous integration.

### 3. **Contoh Format Commit yang Baik**
- **Commit untuk menambahkan fitur baru**:
  ```
  feat(auth): add user login functionality
  ```
  *Deskripsi*: Menambahkan fitur login untuk pengguna menggunakan JWT.

- **Commit untuk memperbaiki bug**:
  ```
  fix(auth): resolve issue with login failure
  ```
  *Deskripsi*: Memperbaiki bug yang menyebabkan kegagalan login saat menggunakan kredensial yang benar.

- **Commit untuk memperbarui dokumentasi**:
  ```
  docs(readme): update setup instructions
  ```
  *Deskripsi*: Memperbarui petunjuk pengaturan di README untuk mencocokkan dengan konfigurasi baru.

### 4. **Menjaga Pesan Commit Ringkas dan Jelas**
- Gunakan **judul yang singkat dan deskriptif**, maksimal 50 karakter.
- **Deskripsi tambahan** bersifat opsional, tetapi bisa bermanfaat jika perubahan yang dilakukan kompleks. Pisahkan judul dan deskripsi dengan satu baris kosong.
- Jangan gunakan pesan commit yang ambigu seperti "Update" atau "Fix".

### 5. **Kapan Menggunakan Deskripsi Tambahan**
Deskripsi lebih panjang bisa berguna jika perubahan membutuhkan penjelasan lebih lanjut. Beberapa contoh alasan untuk menulis deskripsi tambahan:
- Memberikan konteks untuk keputusan desain.
- Menjelaskan mengapa perubahan dilakukan, terutama jika tidak langsung terlihat jelas.
- Memberikan detail lebih lanjut jika perubahan mempengaruhi banyak bagian kode atau berpotensi menambah kerumitan.

### 6. **Prinsip Lain yang Perlu Diperhatikan**
- **Gunakan bahasa yang konsisten**: Pilih antara menggunakan kalimat aktif atau pasif dan pertahankan konsistensi.
- **Gunakan imperatif untuk judul commit**: Misalnya, gunakan "Add feature" daripada "Added feature".
- **Pisahkan commit berdasarkan tujuannya**: Setiap commit harus berfokus pada satu tujuan atau perbaikan.

### 7. **Contoh Pesan Commit yang Tidak Baik**
- "Fix"
- "Update"
- "Refactor"
- "Bugs fixed"
  
Pesan-pesan ini terlalu umum dan tidak memberikan informasi yang berguna tentang perubahan yang dilakukan.

### 8. **Penulisan Pesan Commit Berdasarkan Konvensi**
Banyak tim pengembangan menggunakan konvensi commit yang lebih formal untuk menjaga konsistensi. Salah satu yang paling populer adalah **Conventional Commits**. Dengan menggunakan konvensi ini, commit akan terlihat seperti ini:

```
feat(core): add authentication middleware

Introduced a new middleware for user authentication that verifies JWT tokens for secure access to the API.
```

### 9. **Penggunaan Emoji (Opsional)**
Beberapa tim menggunakan emoji di awal pesan commit untuk membuatnya lebih mudah dipahami dan visual. Misalnya:
- 🐛 `fix` : Menandakan perbaikan bug.
- ✨ `feat` : Fitur baru.
- 🚀 `perf` : Performa.

Namun, penggunaan emoji bersifat opsional dan tidak semua tim mengadopsinya.

---
