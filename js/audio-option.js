const recordingAudio = new Audio('/assets/audio/battle-of-macatan-audio-recording.mp3');

function initAudio() {
    // console.log("Audio initialized");

    const playPauseButton = document.getElementById('play-pause-btn');
    const muteUnmuteButton = document.getElementById('mute-unmute-btn');

    recordingAudio.pause();
    recordingAudio.volume = 1;

    playPauseButton.onclick = () => {
        // console.log('play-pause was clicked');

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
        // console.log('mute-unmute was clicked');

        if (muteUnmuteButton.classList.contains('fa-volume-high')) {
            muteUnmuteButton.classList.remove('fa-volume-high');
            muteUnmuteButton.classList.add('fa-volume-xmark');
            
            recordingAudio.volume = 0;
            return;
        }

        muteUnmuteButton.classList.remove('fa-volume-xmark');
        muteUnmuteButton.classList.add('fa-volume-high');
        recordingAudio.volume = 1;
    }

    // Play paragraph
    document.getElementById('para-1').onclick = () => { playParagraph(0, playPauseButton) }     // 00:00
    document.getElementById('para-2').onclick = () => { playParagraph(41, playPauseButton) }    // 00:41
    document.getElementById('para-3').onclick = () => { playParagraph(92, playPauseButton) }    // 01:32
    document.getElementById('para-4').onclick = () => { playParagraph(167, playPauseButton) }   // 02:47
    document.getElementById('para-5').onclick = () => { playParagraph(202, playPauseButton) }   // 03:22
    document.getElementById('para-6').onclick = () => { playParagraph(233, playPauseButton) }   // 03:50
    document.getElementById('para-7').onclick = () => { playParagraph(243, playPauseButton) }   // 04:03
    document.getElementById('para-8').onclick = () => { playParagraph(265, playPauseButton) }   // 04:25

    // Change button display when audio completed playing
    recordingAudio.addEventListener('ended', () => {
        playPauseButton.classList.remove('fa-pause');
        playPauseButton.classList.add('fa-play');
    });
}

function playParagraph(timeStamp, playPauseButton) {
        playPauseButton.classList.remove('fa-play');
        playPauseButton.classList.add('fa-pause');

        recordingAudio.currentTime = timeStamp; 
        recordingAudio.play(); 
}

function stopAndResetAudio() {
    recordingAudio.pause();
    recordingAudio.currentTime = 0;
}

export { initAudio, stopAndResetAudio };