(function () {
  var links = document.getElementsByTagName('a'),
    youTubeURL = 'www.youtube.com/watch?v=',
    newYouTubeURL = 'www.youtube-nocookie.com/embed/',
    color = '#0F0',
    i = 0;

  for(i = 0; i < links.length; i++) {
    if(links[i].href.indexOf(youTubeURL) > -1) {
      links[i].href = links[i].href.replace(youTubeURL, newYouTubeURL);
      links[i].target = '_blank';
      links[i].style.border = '2px solid ' + color;
      links[i].style.backgroundColor = color;
    }
  }
})();
