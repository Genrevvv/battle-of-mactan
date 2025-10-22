const recordingAudio = new Audio('/assets/audio/sample-audio.wav');

function initAudio() {
    console.log("Audio initialized");


    const audioOptions = document.getElementById('audio-options');
    const playPauseButton = document.getElementById('play-pause-btn');
    const muteUnmuteButton = document.getElementById('mute-unmute-btn');

    recordingAudio.pause();
    recordingAudio.volume = 1;

    playPauseButton.onclick = () => {
        console.log('play-pause was clicked');

        if (playPauseButton.classList.contains('fa-play')) {
            playPauseButton.classList.remove('fa-play');
            playPauseButton.classList.toggle('fa-pause');

            recordingAudio.play();
            return;
        }

        playPauseButton.classList.remove('fa-pause');
        playPauseButton.classList.toggle('fa-play');
        recordingAudio.pause();
    }

    muteUnmuteButton.onclick = () => {
        console.log('mute-unmute was clicked');

        if (muteUnmuteButton.classList.contains('fa-volume-high')) {
            muteUnmuteButton.classList.remove('fa-volume-high');
            muteUnmuteButton.classList.toggle('fa-volume-xmark');
            
            recordingAudio.volume = 0;
            return;
        }

        muteUnmuteButton.classList.remove('fa-volume-xmark');
        muteUnmuteButton.classList.toggle('fa-volume-high');
        recordingAudio.volume = 1;
    }

    recordingAudio.addEventListener('ended', () => {
        playPauseButton.classList.remove('fa-pause');
        playPauseButton.classList.toggle('fa-play');
    });
}

function stopAndResetAudio() {
    recordingAudio.pause();
    recordingAudio.currentTime = 0;
}

export { initAudio, stopAndResetAudio };