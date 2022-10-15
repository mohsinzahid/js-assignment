function make_album(artist_name, album_title, number_of_tracks) {
  let music_album = {
    name: artist_name,
    title: album_title,
  };
  if (number_of_tracks) music_album.tracks = number_of_tracks;
  return music_album;
}

let album = make_album("ASP", "Placebo");
console.log(album);
album = make_album("Infected Rain", "Ecdysis");
console.log(album);
album = make_album("Spector", "Now or Whenever", 8);
console.log(album);
