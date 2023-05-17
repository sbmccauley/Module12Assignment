class Jukebox {
    constructor(albums) {
        this.albums = []
    }
    addAlbum = function(album) {
        this.albums.push(album)
    }
    playAlbum = function(title) {
        this.albums.forEach((entry) => {
            if (entry.title === title) {
                entry.play()
            }
        })
    } 
    
    favoriteAlbum = function() {
        let max = -1, fav
        for (let i = 0; i < this.albums.length; i++) {
            if (this.albums[i].played > max) {
                max = this.albums[i].played
                fav = this.albums[i]
            }
        }
        return fav.display()
    }
}

class Album {
    constructor(artist, title) {
        this.artist = artist
        this.title = title
        this.played = 0
    }
    play = function() {
        this.played += 1
    }
    display = function() {
        return `${this.artist} : ${this.title}. The album has been played ${this.played} times.`
    }
}

var jbox = new Jukebox()
// const album1 = new Album('Operation Ivy', 'Energy')
// const album2 = new Album('Blink 182', 'Dude Ranch')
// const album3 = new Album('New Found Glory', 'Sticks and Stones')


const albumsArtists = [
    {album: 'Operation Ivy', artist: 'Energy'},
    {album: 'Blink 182', artist: 'Dude Ranch'},
    {album: 'New Found', artist: 'Sticks and Stones'}
]

albumsArtists.forEach((albumArtist) => {
    let optionAlbum = document.createElement('option')
    optionAlbum.text = albumArtist.album
    let album = new Album(albumArtist.artist, albumArtist.album)
    jbox.addAlbum(album)
    
    document.getElementById("albumChoice").appendChild(optionAlbum)
    console.log()
})
const selectAlbum = document.getElementById("albumChoice")

selectAlbum.addEventListener('change', (e) => {
    console.log(`${e.target.value} is playing`)
   jbox.playAlbum(e.target.value)
    // call jbox.playAlbum(album tille tat eas clicked on)
    
})

const favAlbum = document.getElementById("result")

favAlbum.addEventListener('click', (e) => {
    console.log(`Your favorite album is: ${jbox.favoriteAlbum()}`)
    document.getElementById("favoriteAlbum").innerHTML = `Your favorite album is: ${jbox.favoriteAlbum()}`
    
})

// jbox.addAlbum(album1)
// jbox.addAlbum(album2)
// jbox.addAlbum(album3)

// album1.play()
// album2.play()
// album2.play()
// album2.play()
// album2.play()
// album2.play()
// album3.play()



