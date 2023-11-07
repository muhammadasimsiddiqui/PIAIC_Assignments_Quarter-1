/*
Album: Write a function called make_album() that builds a Object describing a music album. 
The function should take in an artist name and an album title,
and it should return a Object containing these two pieces of information.
Use the function to make three dictionaries representing different albums.
Print each return value to show that Objects are storing the album information correctly.
Add an optional parameter to make_album() that allows you to store the number of tracks
on an album. If the calling line includes a value for the number of tracks,
add that value to the album’s Object. Make at least one new function call 
that includes the number of tracks on an album.*/

interface MusicAlbum {
    artist_name: string;
    album_title: string;
    tracks_number?: number;
}

async function make_album(artist_name: string, album_title: string, tracks_number?: number): Promise<MusicAlbum> {
    const music_album: MusicAlbum = {
        artist_name,
        album_title,
    };
     if (tracks_number !== undefined) {
         music_album.tracks_number = tracks_number;
    }
    return music_album;
}

// Example usage:
const album1 = await make_album("Owais Qadri", "Sada Bahar",30);
console.log(album1);
const album2 = await make_album("Tahir Qadri", "Labaik Ya Rasool Allah",15);
console.log(album2);
const album3 = await make_album("Mushqat Qadri", "Sadlo madine Aqaa",3);
console.log(album3);