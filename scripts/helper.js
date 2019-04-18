class Helper {

  playPauseAndUpdate (song) {
    player.playPause(song);
    // Update total time here
    $('#time-control .total-time').text( player.prettyTime( song.duration ));
  }

}
var helper = new Helper();
