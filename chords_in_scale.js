const scaleNames = [
    "CHROMATIC",
    "IONIAN (MAJOR)",
    "DORIAN",
    "PHRYGIAN",
    "LYDIAN",
    "MIXOLYDIAN",
    "AEOLIAN (MINOR)",
    "LOCRIAN",
    "PENTATONIC MINOR",
    "PENTATONIC MAJOR",
    "MELODIC MINOR",
    "HARMONIC MINOR",
    "WHOLE TONE",
    "BLUES",
    "COMBO MINOR",
    "PERSIAN",
    "IWATO",
    "IN-SEN",
    "HIRAJOSHI",
    "PELOG",
    "PHRYGIAN DOMINANT",
    "WHOLE-HALF DIMINISHED",
    "HALF-WHOLE DIMINISHED",
    "SPANISH",
    "MAJOR LOCRIAN",
    "SUPER LOCRIAN",
    "DORIAN b2",
    "LYDIAN AUGMENTED",
    "LYDIAN DOMINANT",
    "DOUBLE HARMONIC",
    "MAJOR LYDIAN #2 #6",
    "ULTRAPHRYGIAN",
    "HUNGARIAN MINOR",
    "ORIENTAL",
    "IONIAN #2 #5",
    "LOCRIAN bb3 bb7"
];

const scales = [
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    [0, 2, 4, 5, 7, 9, 11],
    [0, 2, 3, 5, 7, 9, 10],
    [0, 1, 3, 5, 7, 8, 10],
    [0, 2, 4, 6, 7, 9, 11],
    [0, 2, 4, 5, 7, 9, 10],
    [0, 2, 3, 5, 7, 8, 10],
    [0, 1, 3, 5, 6, 8, 10],
    [0, 3, 5, 7, 10],
    [0, 2, 4, 7, 9],
    [0, 2, 3, 5, 7, 9, 11],
    [0, 2, 3, 5, 7, 8, 11],
    [0, 2, 4, 6, 8, 10],
    [0, 3, 5, 6, 7, 10],
    [0, 2, 3, 5, 7, 8, 10, 11],
    [0, 1, 4, 5, 6, 8, 11],
    [0, 1, 5, 6, 10],
    [0, 1, 5, 7, 10],
    [0, 2, 3, 7, 8],
    [0, 1, 3, 7, 8],
    [0, 1, 4, 5, 7, 8, 10],
    [0, 2, 3, 5, 6, 8, 9, 11],
    [0, 1, 3, 4, 6, 7, 9, 10],
    [0, 1, 3, 4, 5, 6, 8, 10],
    [0, 2, 4, 5, 6, 8, 10],
    [0, 1, 3, 4, 6, 8, 10],
    [0, 1, 3, 5, 7, 9, 10],
    [0, 2, 4, 6, 8, 9, 11],
    [0, 2, 4, 6, 7, 9, 10],
    [0, 1, 4, 5, 7, 8, 11],
    [0, 3, 4, 6, 7, 10, 11],
    [0, 1, 3, 4, 7, 8, 9],
    [0, 2, 3, 6, 7, 8, 11],
    [0, 1, 4, 5, 6, 9, 10],
    [0, 3, 4, 5, 8, 9, 11],
    [0, 1, 2, 5, 6, 8, 9]
];

const chordNames = [
    "Unison × 2",
    "Unison × 3",
    "Unison × 4",
    "minor",
    "Major",
    "sus2",
    "sus4",
    "m7",
    "M7",
    "mMaj7",
    "Maj7",
    "7sus4",
    "dim7",
    "madd9",
    "Madd9",
    "m6",
    "M6",
    "mb5",
    "Mb5",
    "m7b5",
    "M7b5",
    "M#5",
    "m7#5",
    "M7#5",
    "mb6",
    "m9no5",
    "M9no5",
    "Madd9b5",
    "Maj7b5",
    "M7b9no5",
    "sus4#5b9",
    "sus4add#5",
    "Maddb5",
    "M6add4no5",
    "Maj7/6no5",
    "Maj9no5",
    "Fourth",
    "Fifth"
];

const chords = [
    [0, 0],
    [0, 0, 0],
    [0, 0, 0, 0],
    [0, 3, 7],
    [0, 4, 7],
    [0, 2, 7],
    [0, 5, 7],
    [0, 3, 7, 10],
    [0, 4, 7, 10],
    [0, 3, 7, 11],
    [0, 4, 7, 11],
    [0, 5, 7, 10],
    [0, 3, 6, 9],
    [0, 3, 7, 14],
    [0, 4, 7, 14],
    [0, 3, 7, 9],
    [0, 4, 7, 9],
    [0, 3, 6],
    [0, 4, 6],
    [0, 3, 6, 10],
    [0, 4, 6, 10],
    [0, 4, 8],
    [0, 3, 8, 10],
    [0, 4, 8, 10],
    [0, 3, 7, 8],
    [0, 3, 10, 14],
    [0, 4, 10, 14],
    [0, 4, 6, 14],
    [0, 4, 6, 11],
    [0, 4, 10, 13],
    [0, 1, 5, 8],
    [0, 5, 7, 8],
    [0, 4, 6, 7],
    [0, 4, 5, 9],
    [0, 4, 9, 11],
    [0, 4, 11, 14],
    [0, 5, 12],
    [0, 7, 12]
];

function rotate(arr, k) {
    for (let i = 0; i < k; i++) {
        arr.unshift(arr.pop());
    }
    return arr;
}

function getTwoOctaveValidNotes(scale, scaleRootNote) {
    let validNotes = new Array(12);
    validNotes.fill(false, 0, 12);
    for (let note of scale) {
        validNotes[note] = true;
    }
    validNotes = rotate(validNotes, scaleRootNote % 12);
    validNotes = validNotes.concat(validNotes);
    return validNotes;
}

function getMinifiedChord(chord) {
    let c = chord.map(v => v % 12).sort((a, b) => a - b);
    c = [...new Set(c)];
    return c;
}

function isChordValid(chord, validNotes, chordRootNote) {
    for (let note of chord) {
        if (!validNotes[(chordRootNote % 12) + note]) {
            return false;
        }
    }
    return true;
}

const minifiedChords = chords.slice(3).map(getMinifiedChord);

function getValidChords(scale, scaleRootNote, chordRootNote) {
    if (scale.indexOf(chordRootNote % 12) < 0) {
        let validChords = new Array(chords.length);
        validChords.fill(false);
        return validChords;
    }

    const validNotes = getTwoOctaveValidNotes(scale, scaleRootNote);
    let validChords = [true, true, true];
    for (let chord of minifiedChords) {
        validChords.push(isChordValid(chord, validNotes, chordRootNote));
    }
    return validChords;
}

let chordPerScale = [];
let chordPerScaleNames = {};
for (let i = 0; i < scales.length; i++) {
    chordPerScale[i] = [];
    chordPerScaleNames[scaleNames[i]] = [];
    for (let n of scales[i]) {
        let validChords = getValidChords(scales[i], 0, n);
        chordPerScale[i].push(validChords);
        chordPerScaleNames[scaleNames[i]].push(chordNames.filter((elm, idx) => validChords[idx]));
    }
}

console.log(chordPerScale);
