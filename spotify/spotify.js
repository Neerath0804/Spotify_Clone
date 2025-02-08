const audioFiles = [
    { title: "D.S.P", file: "fire.mp3" },
    { title: "Ilayaraja", file: "ilayaraja.mp3" },
    { title: "Keeravani", file: "bb.mp3" },
    { title: "A.R.Rehaman", file: "robo7.mp3" },
    { title: "Shreya", file: "shreya.mp3" },
    { title: "Thaman", file: "thaman.mp3" },
];

let currentAudio = null;
let currentIndex = -1;

function playAudioSong(index) {
    // Pause the movie audio if it's playing
    if (currentMovieAudio) {
        currentMovieAudio.pause();
        currentMovieAudio.currentTime = 0;
    }

    // Pause and reset the current audio
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    // Play the selected audio
    currentAudio = new Audio(audioFiles[index].file);
    currentAudio.play();
    currentIndex = index;

    // Add the event listener for when the audio ends
    currentAudio.addEventListener("ended", playAudioNext);
}

function playAudioNext() {
    if (currentIndex < audioFiles.length - 1) {
        playAudioSong(currentIndex + 1);
    } else {
        playAudioSong(0);
    }
}

document.querySelectorAll(".play").forEach((playButton, index) => {
    playButton.addEventListener("click", function () {
        playAudioSong(index);
    });
});

document.querySelectorAll(".play").forEach((playButton, index) => {
    playButton.addEventListener("dblclick", function () {
        if (currentAudio) currentAudio.pause();
    });
});

const movieaudios = [
    { title: "Pushpa2", file: "pushpa.mp3" },
    { title: "Devara", file: "devara.mp3" },
    { title: "Kalki", file: "kalki.mp3" },
    { title: "Maharshi", file: "maharshi.mp3" },
    { title: "Khaidi no 150", file: "150.mp3" },
    { title: "Akhanda", file: "akhanda.mp3" },
    { title: "radio1", file: "rad1.mp3" },
    { title: "radio2", file: "rad2.mp3" },
    { title: "radio3", file: "rad3.mp3" },
    { title: "radio4", file: "rad4.mp3" },
    { title: "radio5", file: "rad5.mp3" },
    { title: "radio6", file: "rad6.mp3" },
    { title: "chart1", file: "chart1.mp3" },
    { title: "chart2", file: "chart2.mp3" },
    { title: "chart3", file: "chart3.mp3" },
    { title: "chart4", file: "chart4.mp3" },
    { title: "chart5", file: "chart5.mp3" },
    { title: "chart6", file: "chart6.mp3" },
    { title: "Hit1", file: "hit1.mp3" },
    { title: "Hit2", file: "hit2.mp3" },
    { title: "Hit3", file: "hit3.mp3" },
    { title: "Hit4", file: "hit4.mp3" },
    { title: "Hit5", file: "hit5.mp3" },
    { title: "Hit6", file: "hit6.mp3" },

];
let currentMovieAudio = null;
let currentMovieIndex = -1;

function playMovieSong(index) {
    // Pause the audio song if it's playing
    if (currentMovieAudio) {
        currentMovieAudio.pause();
        currentMovieAudio.currentTime = 0;
    }

    // Pause and reset the current movie audio
    if (currentMovieAudio) {
        currentMovieAudio.pause();
        currentMovieAudio.currentTime = 0;
    }

    // Play the selected movie audio
    currentMovieAudio = new Audio(movieaudios[index].file);
    currentMovieAudio.play();
    currentMovieIndex = index;

    // Add the event listener for when the audio ends
    currentMovieAudio.addEventListener("ended", playMovieNext);
}

function playMovieNext() {
    if (currentMovieIndex < movieaudios.length - 1) {
        playMovieSong(currentMovieIndex + 1);
    } else {
        playMovieSong(0);
    }
}

document.querySelectorAll(".play2").forEach((playButton, index) => {
    playButton.addEventListener("click", function () {
        playMovieSong(index);
    });
});

document.querySelectorAll(".play2").forEach((playButton, index) => {
    playButton.addEventListener("dblclick", function () {
        if (currentMovieAudio) currentMovieAudio.pause();
    });
});
const seperateaudios = [
        { title: "DSP1", file: "dsp1.mp3" },
        { title: "DSP2", file: "dsp2.mp3" },
        { title: "DSP3", file: "dsp3.mp3" },
        { title: "DSP4", file: "dsp4.mp3" },
        { title: "DSP5", file: "dsp5.mp3" },
    ];
let currentseperateAudio = null;
let currentseperateIndex = -1;

function playseperateSong(index) {
    // Pause and reset the current separate audio
    if (currentseperateAudio) {
        currentseperateAudio.pause();
        currentseperateAudio.currentTime = 0;
    }

    // Play the selected separate audio
    currentseperateAudio = new Audio(seperateaudios[index].file);
    currentseperateAudio.play();
    currentseperateIndex = index;

    // Add the event listener for when the audio ends
    currentseperateAudio.addEventListener("ended", playseperateNext);
}
function playseperateNext() {
    if (currentseperateIndex < seperateaudios.length - 1) {
        playseperateSong(currentseperateIndex + 1);
    } else {
        playseperateSong(0);
    }
}

document.querySelectorAll(".play3").forEach((playButton, index) => {
    playButton.addEventListener("click", function () {
        playseperateSong(index);
    });
});

document.querySelectorAll(".play3").forEach((playButton, index) => {
    playButton.addEventListener("dblclick", function () {
        if (currentseperateAudio) currentseperateAudio.pause();
    });
});
const seperateaudios1 = [
    { title: "Ilaya1", file: "ilaya1.mp3" },
    { title: "Ilaya2", file: "ilaya2.mp3" },
    { title: "Ilaya3", file: "ilaya3.mp3" },
    { title: "Ilaya4", file: "ilaya4.mp3" },
    { title: "Ilaya5", file: "ilaya5.mp3" },
];
let currentseperateAudio1 = null;
let currentseperateIndex1 = -1;

function playseperateSong1(index) {
// Pause and reset the current separate audio
if (currentseperateAudio1) {
    currentseperateAudio1.pause();
    currentseperateAudio1.currentTime = 0;
}

// Play the selected separate audio
currentseperateAudio1 = new Audio(seperateaudios1[index].file);
currentseperateAudio1.play();
currentseperateIndex1 = index;

// Add the event listener for when the audio ends
currentseperateAudio1.addEventListener("ended", playseperateNext);
}
function playseperateNext1() {
if (currentseperateIndex1 < seperateaudios1.length - 1) {
    playseperateSong1(currentseperateIndex1 + 1);
} else {
    playseperateSong1(0);
}
}

document.querySelectorAll(".play4").forEach((playButton, index) => {
playButton.addEventListener("click", function () {
    playseperateSong1(index);
});
});

document.querySelectorAll(".play4").forEach((playButton, index) => {
playButton.addEventListener("dblclick", function () {
    if (currentseperateAudio1) currentseperateAudio1.pause();
});
});
const seperateaudios2 = [
    { title: "Keera1", file: "keera1.mp3" },
    { title: "Keera2", file: "keera2.mp3" },
    { title: "Keera3", file: "keera3.mp3" },
    { title: "Keera4", file: "keera4.mp3" },
    { title: "Keera5", file: "keera5.mp3" },
];
let currentseperateAudio2 = null;
let currentseperateIndex2 = -1;

function playseperateSong2(index) {
// Pause and reset the current separate audio
if (currentseperateAudio2) {
    currentseperateAudio2.pause();
    currentseperateAudio2.currentTime = 0;
}

// Play the selected separate audio
currentseperateAudio2 = new Audio(seperateaudios2[index].file);
currentseperateAudio2.play();
currentseperateIndex2 = index;

// Add the event listener for when the audio ends
currentseperateAudio2.addEventListener("ended", playseperateNext2);
}
function playseperateNext2() {
if (currentseperateIndex2 < seperateaudios2.length - 1) {
    playseperateSong2(currentseperateIndex2 + 1);
} else {
    playseperateSong2(0);
}
}

document.querySelectorAll(".play5").forEach((playButton, index) => {
playButton.addEventListener("click", function () {
    playseperateSong2(index);
});
});

document.querySelectorAll(".play5").forEach((playButton, index) => {
playButton.addEventListener("dblclick", function () {
    if (currentseperateAudio2) currentseperateAudio2.pause();
});
});
const seperateaudios3 = [
    { title: "rahaman1", file: "raha1.mp3" },
    { title: "rahman2", file: "raha2.mp3" },
    { title: "rahman3", file: "raha3.mp3" },
    { title: "rahman4", file: "raha4.mp3" },
    { title: "rahman5", file: "raha5.mp3" },
];
let currentseperateAudio3 = null;
let currentseperateIndex3 = -1;

function playseperateSong3(index) {
// Pause and reset the current separate audio
if (currentseperateAudio3) {
    currentseperateAudio3.pause();
    currentseperateAudio3.currentTime = 0;
}

// Play the selected separate audio
currentseperateAudio3 = new Audio(seperateaudios3[index].file);
currentseperateAudio3.play();
currentseperateIndex3 = index;

// Add the event listener for when the audio ends
currentseperateAudio3.addEventListener("ended", playseperateNext3);
}
function playseperateNext3() {
if (currentseperateIndex3 < seperateaudios3.length - 1) {
    playseperateSong3(currentseperateIndex3 + 1);
} else {
    playseperateSong3(0);
}
}

document.querySelectorAll(".play6").forEach((playButton, index) => {
playButton.addEventListener("click", function () {
    playseperateSong3(index);
});
});

document.querySelectorAll(".play6").forEach((playButton, index) => {
playButton.addEventListener("dblclick", function () {
    if (currentseperateAudio3) currentseperateAudio3.pause();
});
});
const seperateaudios4 = [
    { title: "Shreya1", file: "shreya1.mp3" },
    { title: "Shreya2", file: "hit1.mp3" },
    { title: "Shreya3", file: "shreya3.mp3" },
    { title: "Shreya4", file: "shreya4.mp3" },
    { title: "Shreya5", file: "shreya5.mp3" },
];
let currentseperateAudio4 = null;
let currentseperateIndex4 = -1;

function playseperateSong4(index) {
// Pause and reset the current separate audio
if (currentseperateAudio4) {
    currentseperateAudio4.pause();
    currentseperateAudio4.currentTime = 0;
}

// Play the selected separate audio
currentseperateAudio4 = new Audio(seperateaudios4[index].file);
currentseperateAudio4.play();
currentseperateIndex4 = index;

// Add the event listener for when the audio ends
currentseperateAudio4.addEventListener("ended", playseperateNext4);
}
function playseperateNext4() {
if (currentseperateIndex4 < seperateaudios4.length - 1) {
    playseperateSong4(currentseperateIndex4 + 1);
} else {
    playseperateSong4(0);
}
}

document.querySelectorAll(".play7").forEach((playButton, index) => {
playButton.addEventListener("click", function () {
    playseperateSong4(index);
});
});

document.querySelectorAll(".play7").forEach((playButton, index) => {
playButton.addEventListener("dblclick", function () {
    if (currentseperateAudio4) currentseperateAudio4.pause();
});
});
const seperateaudios5 = [
    { title: "Theman1", file: "thaman1.mp3" },
    { title: "Theman2", file: "thaman2.mp3" },
    { title: "Theman3", file: "thaman3.mp3" },
    { title: "Theman4", file: "thaman4.mp3" },
    { title: "Theman5", file: "thaman5.mp3" },
];
let currentseperateAudio5 = null;
let currentseperateIndex5 = -1;

function playseperateSong5(index) {
// Pause and reset the current separate audio
if (currentseperateAudio5) {
    currentseperateAudio5.pause();
    currentseperateAudio5.currentTime = 0;
}

// Play the selected separate audio
currentseperateAudio5 = new Audio(seperateaudios5[index].file);
currentseperateAudio5.play();
currentseperateIndex5 = index;

// Add the event listener for when the audio ends
currentseperateAudio5.addEventListener("ended", playseperateNext5);
}
function playseperateNext5() {
if (currentseperateIndex5 < seperateaudios5.length - 1) {
    playseperateSong5(currentseperateIndex5 + 1);
} else {
    playseperateSong5(0);
}
}

document.querySelectorAll(".play8").forEach((playButton, index) => {
playButton.addEventListener("click", function () {
    playseperateSong5(index);
});
});

document.querySelectorAll(".play8").forEach((playButton, index) => {
playButton.addEventListener("dblclick", function () {
    if (currentseperateAudio5) currentseperateAudio5.pause();
});
});
