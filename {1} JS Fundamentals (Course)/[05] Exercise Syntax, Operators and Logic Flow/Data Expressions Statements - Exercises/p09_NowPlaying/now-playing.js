function currentPlayingTrack(musicTrack) {
    let trackName = musicTrack[0];
    let artistName = musicTrack[1];
    let duration = musicTrack[2];

    return `Now Playing: ${artistName} - ${trackName} [${duration}]`;
}