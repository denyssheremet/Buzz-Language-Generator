

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
    switch (gap) {
        case "_vPres":
            return randFromList(verbsPresent, 1)[0];
        case "_vEd":
            return randFromList(verbsPast, 1)[0];
        case "_vIng":
            return randFromList(verbsIng, 1)[0];
        case "_adv":
            return randFromList(adverbs, 1)[0];
        case "_adj":
            return randFromList(adjectives, 1)[0];
        case "_nom":
            return randFromList(nominalizations, 1)[0];
        case "_noms":
            return randFromList(nominalizationsM, 1)[0];
        case "_noun":
            return randFromList(nouns, 1)[0];
        case "_loc":
            return randFromList(locations, 1)[0];
        default:
            return "___"
    }
}

function fillSentenceFrame(frame) {
    let pieces = frame.split(" ");

    let word;
    let used = [];
    for (let i = 0; i < pieces.length; i++) {
        if (pieces[i].includes("_")) {
            do {
                word = fillGap(pieces[i], used);
            } while (used.includes(word.root));
            pieces[i] = word.word;
            used.push(word.root);
        }
    }
    pieces[pieces.length - 1] += ".";
    pieces = pieces.join(' ');
    return pieces;
}



window.addEventListener("load", function () {

    document.getElementById("output").innerHTML = fillSentenceFrame(randFromList(sentenceFrames, 1)[0]);


});