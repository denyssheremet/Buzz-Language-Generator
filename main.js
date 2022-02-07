

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
        case "_adverb":
            return randFromList(adverbs, 1)[0];
        case "_adjective":
            return randFromList(adjectives, 1)[0];
        case "_nominalization":
            return randFromList(nominalizations, 1)[0];
        case "_noun":
            return randFromList(nouns, 1)[0];
        case "_location":
            return randFromList(locations, 1)[0];
        default:
            return "___"
            break;
    }
}

function fillSentenceFrame(frame) {
    console.log(frame);
    let pieces = frame.split(" ");
    console.log(pieces);
    for (let i = 0; i < pieces.length; i++) {
        if (pieces[i].includes("_")) {
            pieces[i] = fillGap(pieces[i]);
        }
    }
    pieces[pieces.length - 1] += ".";
    pieces = pieces.join(' ');
    console.log(pieces);
    return pieces;
}



window.addEventListener("load", function () {

    document.getElementById("output").innerHTML = fillSentenceFrame(randFromList(sentenceFrames, 1)[0]);


});