const music = document.getElementById('bg-music');
let isPlaying = false;

function toggleMusic() {
    if (!isPlaying) {
        music.play();
        isPlaying = true;
        document.querySelector('.music-button').innerHTML = "Pause Music 🔇";
    } else {
        music.pause();
        isPlaying = false;
        document.querySelector('.music-button').innerHTML = "Play Music 🎵";
    }
}
