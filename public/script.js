const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j'];

const keys = document.querySelectorAll('.key');
const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');

keys.forEach(elem => elem.addEventListener('click', () => playNote(elem)));

document.addEventListener('keydown', elem => {
    if (elem.repeat) return;

    const key = elem.key;
    const whiteKeyIndex = WHITE_KEYS.indexOf(key);
    const blackKeyIndex = BLACK_KEYS.indexOf(key);

    if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex]);
    if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex]);
})

function playNote(elem) {
    const audioFile = document.getElementById(elem.dataset.note);
    audioFile.currentTime = 0;
    audioFile.play();
    elem.classList.add('active');
    audioFile.addEventListener('ended', () => {
        elem.classList.remove('active');
    });
}