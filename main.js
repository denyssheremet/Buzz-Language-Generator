

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

function randFromList(listFrom, amount) {
    const shuffled = shuffle(listFrom);

    while (shuffled.length < amount) {
        shuffled.push("");
    }

    return shuffled.slice(0, amount);
};


function fillGap(gap) {
    res = "";
    let hasComma = gap.includes(",");
    gap = gap.replace(",", "")

    switch (gap) {
        case "_vPres":
            res = randFromList(verbsPresent, 1)[0];
            break;
        case "_vEd":
            res = randFromList(verbsPast, 1)[0];
            break;
        case "_vIng":
            res = randFromList(verbsIng, 1)[0];
            break;
        case "_adv":
            res = randFromList(adverbs, 1)[0];
            break;
        case "_adj":
            res = randFromList(adjectives, 1)[0];
            break;
        case "_nom":
            res = randFromList(nominalizations, 1)[0];
            break;
        case "_noms":
            res = randFromList(nominalizationsM, 1)[0];
            break;
        case "_noun":
            res = randFromList(nouns, 1)[0];
            break;
        case "_loc":
            res = randFromList(locations, 1)[0];
            break;
        case "_phrS":
            res = fillSentenceFrame(randFromList(simplePhrases, 1)[0].word, false);
            res = new Word(res, res);
            break;
        case "_phrC":
            res = fillSentenceFrame(randFromList(complexPhrases, 1)[0].word, false);
            res = new Word(res, res);
            break;
        default:
            res = "___"
            break;
    }
    // if (hasComma) {
    //     res.word += ",";
    // }
    return res;

}

function fillSentenceFrame(frame, addDot = true) {
    console.log(frame);
    let pieces = frame.split(" ");

    let word;
    let used = [];
    for (let i = 0; i < pieces.length; i++) {
        if (pieces[i].includes("_")) {
            do {
                word = fillGap(pieces[i]);
            } while (used.includes(word.root));
            pieces[i] = word.word;
            used.push(word.root);
        }
    }
    if (addDot) { pieces[pieces.length - 1] += "."; }
    pieces = pieces.join(' ');
    return pieces;
}



window.addEventListener("load", function () {

    // document.getElementById("output").innerHTML = fillSentenceFrame(randFromList(sentenceFrames, 1)[0]);
    document.getElementById("output").innerHTML = fillSentenceFrame(sentenceFrames[sentenceFrames.length - 1]);
    // document.getElementById("output").innerHTML = fillSentenceFrame(sentenceFrames[1]);

    let pars = 4;
    let parLen = 3;

    for (let p = 0; p < pars; p++) {
        let sentence = [];
        let paragraph = this.document.createElement("p");

        for (let s = 0; s < parLen; s++) {
            sentence.push(fillSentenceFrame(randFromList(sentenceFrames, 1)[0]))
        }

        sentence = sentence.join(' ');
        paragraph.innerHTML = sentence;
        document.getElementById("textZone").appendChild(paragraph);

    }

});