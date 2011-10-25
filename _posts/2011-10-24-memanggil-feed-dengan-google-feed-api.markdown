---
layout: post
title: Memanggil Feed dengan Google Feed API
categories: javascript
---

Sudah satu bulan lebih tidak menulis post baru. Selain tugas sekolah yang menumpuk, juga sibuk untuk _redesign_ website sekolah dengan tanpa kepastian. Jika design saya diterima, silakan dipakai. Jika tidak, ya saya tawarkan ke sekolah lain, hehe.

Baiklah, cukup sudah basa-basinya, masuk ke inti. Kali ini saya hanya ingin menulis tentang bagaimana memanfaatkan salah satu layanan dari Google, yakni Google Feed API. API ini memungkinkan kita untuk mengambil dan menampilkan feed, baik dari blog/web kita sendiri atau dari blog/web lain. Kode javascript berikut adalah yang saya pakai di [Warta Kertas](/2011/09/koran), koran saya.

Sebelum menggunakan layanan API dari Google, disyaratkan untuk memiliki sebuah API key. Untuk mendapatkannya, masuk ke halaman [http://code.google.com/apis/loader/signup.html](http://code.google.com/apis/loader/signup.html).

{% highlight javascript %}
google.load("feeds", "1"); //Memanggil Feed API
google.setOnLoadCallback(feeds); //memanggil feed dalam fungsi feeds saat halaman di-load
 
function feeds() {       
  var feed = new google.feeds.Feed("http://hirizh.github.com/atom.xml");
  feed.setNumEntries(5); //jumlah feed
  feed.load(function(result) {
    if (!result.error) {
      var container = document.getElementById("feed"); //id container
      for (var i = 0; i < result.feed.entries.length; i++) { 
        var entry = result.feed.entries[i];
        var article = document.createElement("article");
        article.innerHTML = '<h2>' + entry.title + '</h2>';           
        article.innerHTML += '<p>' + entry.contentSnippet + '</p>';
        article.innerHTML += '<a href="' + entry.link + '" class="link-feed">' + entry.title + '</a>';
        container.appendChild(article);
      } 
    } else {
      //callback jika terdapat error   
      var container = document.getElementById("feed");         
      container.innerHTML = '<h2><a href="http://hirizh.github.com">Ada error. Dapatkan perbaikan di blog saya</a></h2>';
    }  
   });     
}
{% endhighlight %}

Kode di atas murni Javascript, tanpa framework. Ganti `http://hirizh.github.com/atom.xml` dengan alamat feed yang akan ditampilkan. Untuk membatasi jumlah feed, ganti jumlah pada `feed.setNumEntries(5);`. Untuk opsi yang lebih lengkap, kunjungi [Referensi Google Feed API](http://code.google.com/apis/feed/v1/reference.html#JSON).
