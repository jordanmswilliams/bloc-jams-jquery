{
  $('#album-title').text(album.title);
  $('img#album-cover-art').attr('src', album.albumArtUrl);
  // Use '.' in front of class and '#' in front of id //
  $('.artist').text(album.artist);
  $('#release-info').text(album.releaseInfo);
}
