

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



window.addEventListener("load", function () {

    // document.getElementById("output").innerHTML = fillSentenceFrame(randFromList(sentenceFrames, 1)[0]);
    let parser = new Parser("");
    document.getElementById("output").innerHTML = parser.fillIn(sentenceFrames[sentenceFrames.length - 1]);
    // document.getElementById("output").innerHTML = fillSentenceFrame(sentenceFrames[1]);

    let pars = 4;
    let parLen = 3;

    for (let p = 0; p < pars; p++) {
        let sentence = [];
        let paragraph = this.document.createElement("p");

        for (let s = 0; s < parLen; s++) {
            sentence.push(parser.fillIn(randFromList(sentenceFrames, 1)[0]))
        }

        sentence = sentence.join(' ');
        paragraph.innerHTML = sentence;
        document.getElementById("textZone").appendChild(paragraph);

    }

});