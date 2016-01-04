bioMp(document.getElementById('preview'),{
  url: 'http://briandennis.io/smartGymApp/#/tab/dash',
  view: 'front',
  image: 'images/iphone6_front_white.png',
  height: (window.innerHeight*.62)
});

$(document).ready(function() {
  setTimeout(function(){
    $('#main-content').fadeIn();
  }, 500);
});
