---
layout: post
title: Sekilas Tentang Heello
---

Beberapa hari yang lalu, saya mendapat notif di fb dari group sekolah. Ada yang ngewall: 
> "Siapa yang punya account heello? Follow aku ya.." 
Kurang lebih seperti itu. Sejenak saya berpikir, apa itu heello? Lalu saya googling dengan keyword "heello" dan mendapatkan satu domain, [http://heello.com](http://heello.com). Saya buka dan kesan pertama saya: **mengecewakan**!

Apa yang membuat saya kecewa? Adalah _image replacement_ yang menggantikan tulisan, tanpa `@font-face`. Pikir saya, "ah, mungkin karena masih baru." Kemudian saya buka source code-nya. _Jenggjengg_. Wow, sudah HTML5. Tapi... Kok belum ada tags khas HTML? Kok masih _table-based_?

Karena ingin "menjajalnya", saya coba signup. Halaman signup terbilang standar, biasa. Lalu saya login. "Kayaknya familiar deh tampilan kayak gini" _yup_, design dan konsepnya mirip atau bahkan hampir sama dengan twitter. Yang membedakan, jika twitter akrab dengan istilah tweet, follower, following, dan DM, maka di heello berganti nama menjadi ping, listener, listening, dan message.

### Kekurangan
* Masih memakai table untuk desain halaman
* Penggunaan image untuk pengganti font
* Terlalu banyak penggunaan `div` dan `wrap`
* Penggunaan 3 service untuk pemantau trafik

### Kelebihan
* Penggunaan HTML5, walau masih kurang maksimal
* Penggunaan AJAX untuk submit form login
* Box shadow pada login form
* CSS3 gradient pada button signup
* CSS3 gradient untuk IE (full CSS)

### Kesimpulan
Heello adalah layanan jejaring sosial baru yang masih terus dikembangkan. Adanya kekurangan di atas mungkin akan diperbaiki pada versi yang akan datang. Penggunaan CSS3 menjadi nilai tambah tersendiri, yaitu dengan munculnya box-shadow dan gradient. Sayangnya, metode `@font-face` belum diterapkan dan masih menggunakan cara lama, image. Juga table-based design yang sudah ketinggalan kereta.

Follow, eh, salah... Listen saya di heello [@hirizh](http://heello.com/hirizh "hirizh @heello") :D
