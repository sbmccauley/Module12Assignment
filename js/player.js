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
    {'album': 'Energy', 'artist': 'Operation Ivy'},
    {'album': 'Dude Ranch', 'artist': 'Blink 182'},
    {'album': 'Sticks and Stones', 'artist': 'New Found Glory'}
]

let option = ''
for (let i = 0; i < albumsArtists.length; i++) {
    option += `<option value ="${albumsArtists[i].album}"> ${albumsArtists[i].album} by ${albumsArtists[i].artist}</option> `
    let album = new Album(albumsArtists[i].artist, albumsArtists[i].album)
    jbox.addAlbum(album)
}
document.getElementById("albumChoice").innerHTML = option


const selectAlbum = document.getElementById("albumChoice")

const playBtn = document.getElementById("playBtn")

let selectedAlbum = albumsArtists[0].album
selectAlbum.addEventListener('click', (e) => {
    console.log(`${e.target.value} has been chosen`)
    selectedAlbum = e.target.value
})
    
        
playBtn.addEventListener('click', (e) => {
    jbox.playAlbum(selectedAlbum)
})

 
    



const favAlbum = document.getElementById("result")

favAlbum.addEventListener('click', (e) => {
    console.log(`Your favorite album is: ${jbox.favoriteAlbum()}`)
    document.getElementById("favoriteAlbum").innerHTML = `Your favorite album is ${jbox.favoriteAlbum()}`
    
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



