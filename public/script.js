const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j'];

let recordingStartTime;
let songNotes;

const recordButton = document.querySelector('.record-button');
const playButton = document.querySelector('.play-button');
const saveButton = document.querySelector('.save-button');
const keys = document.querySelectorAll('.key');
const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');

const keyMap = [...keys].reduce((map, key) => {
    map[key.dataset.note] = key;
    return map;
}, {});

keys.forEach(elem => elem.addEventListener('click', () => playNote(elem)));

recordButton.addEventListener('click', toggleRecording);
saveButton.addEventListener('click', saveSong);
playButton.addEventListener('click', playSong);

document.addEventListener('keydown', elem => {
    if (elem.repeat) return;

    const key = elem.key;
    const whiteKeyIndex = WHITE_KEYS.indexOf(key);
    const blackKeyIndex = BLACK_KEYS.indexOf(key);

    if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex]);
    if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex]);
});

function toggleRecording() {
    recordButton.classList.toggle('active');

    if (isRecording()) {
        startRecording();
    } else {
        stopRecording();
    }
}

function isRecording() {
    return recordButton != null && recordButton.classList.contains('active');
}

function startRecording() {
    recordingStartTime = Date.now();
    songNotes = [];
    playButton.classList.remove('show');
    saveButton.classList.remove('show');
}

function stopRecording() {
    playSong();
    playButton.classList.add('show');
    saveButton.classList.add('show');
}

function playSong() {
    console.log(songNotes);
    if (songNotes.length === 0) return;
    songNotes.forEach(note => {
        setTimeout(() => {
            playNote(keyMap[note.key])
        }, note.startTime)
    })
}

function playNote(elem) {
    if (isRecording()) recordNote(elem.dataset.note);
    const audioFile = document.getElementById(elem.dataset.note);
    audioFile.currentTime = 0;
    audioFile.play();
    elem.classList.add('active');
    audioFile.addEventListener('ended', () => {
        elem.classList.remove('active');
    });
}

function recordNote(note) {
    songNotes.push({
        key: note,
        startTime: Date.now() - recordingStartTime
    })
}

function saveSong() {

}