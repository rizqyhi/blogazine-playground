/** 
 * This is Bioskop 
 * Rizqy Hidayat
 */
 
function JasonMrazNight(data) {
  var feed = data.feed;  
  var entries = feed.entry || [];
  var html = ['<ul id="video-list">'];
  for (var i = 0; i < entries.length; i++) {    
    var entry = entries[i];
    var title = entry.title.$t;   
    var thumbnailUrl = entry.media$group.media$thumbnail[0].url; 
    var playerUrl = entry.link[0].href;   
    html.push('<li class="video"><a href="',playerUrl,'" rel="prettyPhoto" title="',title,'"><img src="',thumbnailUrl,'" /><span>',title,'</span></a></li>');   
  }  
  html.push('</ul>');  
  document.getElementById('content').innerHTML = html.join(''); 
  }
  
$(document).ready(function(){
	var biggestHeight = 0;
	$('.video a').each(function(){
		if($(this).height() > biggestHeight){
			biggestHeight = $(this).height();
		}
	});
	$('.video a').height(biggestHeight);
	
	var winheight = $(window).height();
	var winwidth = $(window).width();
	var scrollbottom = $(window).scrollTop() + winheight;
	
	$("div.pp_overlay").width(winwidth);
	$("div.pp_overlay").height(winheight);
	$("#welcome").height(winheight);
	$("#masuk").click(function(){
		var namaanda = $("#nama").val();
		$("#welcome").animate({opacity:'hide'}, 'slow');
		$.cookie('kunjung','pernah', {expires:7});
		$.cookie('nama',namaanda, {expires:7});
		return false;
	});
	
	var kunjung = $.cookie('kunjung');
	var nama = $.cookie('nama');
	if (kunjung == 'pernah' && nama){
		$("#welcome").hide();
	} 
	
	$("#itsyou").append('<strong>'+nama+'</strong>');
	$(".nama").append(nama);
	
	$("#deskripsi").click(function(){
		$("#komentar").hide();
		$("#about").slideToggle("slow");
		$("html,body").animate({scrollTop:scrollbottom},"slow");
		return false;
	});
	$("#comment").click(function(){
		$("#about").hide();
		$("#disqus_thread").slideToggle("slow");
		$("html,body").animate({scrollTop:scrollbottom},"slow");
		return false;
	});
	
	$("a[rel^='prettyPhoto']").prettyPhoto({
		theme: 'dark_rounded',
		default_width:480,
		default_height:300,
		modal:true,
		opacity:1,
		social_tools: false,
	});
});

/**
 * Cookie plugin
 *
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */
jQuery.cookie = function(name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString();
        }
        var path = options.path ? '; path=' + (options.path) : '';
        var domain = options.domain ? '; domain=' + (options.domain) : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else {
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};
