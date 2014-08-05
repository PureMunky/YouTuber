(function () {
  var links = document.getElementsByTagName('a'),
    frames = document.getElementsByTagName('iframe'),
    frameYouTubeURL = 'www.youtube.com/embed/',
    linkYouTubeURL = 'www.youtube.com/watch?v=',
    newYouTubeURL = 'www.youtube-nocookie.com/embed/',
    color = '#0F0',
    i = 0;

  for(i = 0; i < links.length; i++) {
    if(links[i].href.indexOf(linkYouTubeURL) > -1) {
      links[i].href = links[i].href.replace(linkYouTubeURL, newYouTubeURL);
      links[i].target = '_blank';
      links[i].style.border = '2px solid ' + color;
      links[i].style.backgroundColor = color;
    }
  }

  for(i = 0; i < frames.length; i++) {
    if(frames[i].src.indexOf(frameYouTubeURL) > -1) {
      frames[i].src = frames[i].src.replace(frameYouTubeURL, newYouTubeURL);
      frames[i].style.border = '2px solid ' + color;
    }
  }
})();
