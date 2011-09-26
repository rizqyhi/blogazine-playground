google.load("jquery", "1.6.4");
google.load("feeds", "1");
google.setOnLoadCallback(feedSamping);
google.setOnLoadCallback(feedSmashing);
 
// Feed berita samping
function feedSamping() {       
  var feed = new google.feeds.Feed("http://techno.okezone.com/rss"); 
  feed.setNumEntries(4);
  feed.load(function(result) {
    if (!result.error) {
      var container = document.getElementById("berita-samping");
      for (var i = 0; i < result.feed.entries.length; i++) { 
        var entry = result.feed.entries[i];
        var article = document.createElement("article");
        article.innerHTML = '<h2>' + entry.title + '</h2>';           
        article.innerHTML += '<p>' + entry.contentSnippet + '</p>';
        article.innerHTML += '<a href="' + entry.link + '" class="link-berita">' + entry.title + '</a>';
        container.appendChild(article);
      } 
    } else {   
      var container = document.getElementById("berita-samping");         
      container.innerHTML = '<h2><a href="http://techno.okezone.com">Ada error. Dapatkan perbaikan di situs okezone.com</a></h2>';
    }  
   });     
}

// Feed Samashing Magazine
function feedSmashing(){
var feed = new google.feeds.Feed("http://rss1.smashingmagazine.com/feed/"); 
  feed.setNumEntries(1);
  feed.load(function(result) {
    if (!result.error) {
      var container = document.getElementById("berita-full");
      for (var i = 0; i < result.feed.entries.length; i++) { 
        var entry = result.feed.entries[i];
        var article = document.createElement("article");
        article.innerHTML = '<h2>' + entry.title + '</h2>';           
        article.innerHTML += '<p>'+ entry.contentSnippet + '</p>';
        article.innerHTML += '<a href="' + entry.link + '" class="link-berita">' + entry.title + '</a>';
        container.appendChild(article);
      } 
    }else{
	   var container = document.getElementById("berita-full");
	   container.innerHTML = '<h2><a href="http://smashingmagazine.com">Dapatkan perbaikan berita di Smashing Magazine</a></h2>';
	}
    });
}

// Fungsi recent tweets
function RecentTweet(twitters) {
  var statusHTML = [];
  for (var i=0; i<twitters.length; i++){
    var username = twitters[i].user.screen_name;
    var status = twitters[i].text.replace(/((https?|s?ftp|ssh)\:\/\/[^"\s\<\>]*[^.,;'">\:\s\<\>\)\]\!])/g, function(url) {
      return '<a href="'+url+'">'+url+'</a>';
    }).replace(/\B@([_a-z0-9]+)/ig, function(reply) {
      return  reply.charAt(0)+'<a href="http://twitter.com/'+reply.substring(1)+'">'+reply.substring(1)+'</a>';
    });
    statusHTML.push('<p>'+status+'</p><em><a style="font-size:85%" href="http://twitter.com/'+username+'/statuses/'+twitters[i].id_str+'">'+relative_time(twitters[i].created_at)+'</a></em>');
  }
  document.getElementById('recent-tweet').innerHTML = statusHTML.join('');
}

function relative_time(time_value) {
  var values = time_value.split(" ");
  time_value = values[1] + " " + values[2] + ", " + values[5] + " " + values[3];
  var parsed_date = Date.parse(time_value);
  var relative_to = (arguments.length > 1) ? arguments[1] : new Date();
  var delta = parseInt((relative_to.getTime() - parsed_date) / 1000);
  delta = delta + (relative_to.getTimezoneOffset() * 60);

  if (delta < 60) {
    return 'less than a minute ago';
  } else if(delta < 120) {
    return 'about a minute ago';
  } else if(delta < (60*60)) {
    return (parseInt(delta / 60)).toString() + ' minutes ago';
  } else if(delta < (120*60)) {
    return 'about an hour ago';
  } else if(delta < (24*60*60)) {
    return 'about ' + (parseInt(delta / 3600)).toString() + ' hours ago';
  } else if(delta < (48*60*60)) {
    return '1 day ago';
  } else {
    return (parseInt(delta / 86400)).toString() + ' days ago';
  }
}

$(document).ready(function(){
    $('#comment-slide').click(function(){
        $('#disqus_thread').slideToggle('slow');
        $(this).toggleClass('active');
        return false;
    });
});
