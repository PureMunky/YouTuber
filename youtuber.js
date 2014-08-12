/* -- YouTuber -- */
// Enables YouTube links and frames through some corporate firewalls.
// Created By: Phil Corbett (@PureMunky)
// Contribute: https://github.com/PureMunky/YouTuber

(function () {
  var links = document.getElementsByTagName('a'),       // All links on the page.
    frames = document.getElementsByTagName('iframe'),   // All frames on the page.
    frameYouTubeURL = 'www.youtube.com/embed/',         // Root url for frames.
    linkYouTubeURL = 'www.youtube.com/watch?v=',        // Root url for links.
    newYouTubeURL = 'www.youtube-nocookie.com/embed/',  // Working root url for YouTube.
    color = '#0F0',
    i = 0;

  // Iterate through the links and replace their href with the working root url.
  for(i = 0; i < links.length; i++) {
    if(links[i].href.indexOf(linkYouTubeURL) > -1) {
      links[i].href = links[i].href.replace(linkYouTubeURL, newYouTubeURL);
      links[i].target = '_blank';
      links[i].style.border = '2px solid ' + color;
      links[i].style.backgroundColor = color;
    }
  }

  // Iterate through the frames and replace their src with the working root url.
  for(i = 0; i < frames.length; i++) {
    if(frames[i].src.indexOf(frameYouTubeURL) > -1) {
      frames[i].src = frames[i].src.replace(frameYouTubeURL, newYouTubeURL);
      frames[i].style.border = '2px solid ' + color;
    }
  }
})();
