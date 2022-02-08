var parser = new Parser(pb);
var par = new Paragraph(this.document, parser);


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


    document.getElementById("output").innerHTML = parser.fillIn(sentenceFrames[sentenceFrames.length - 1]);


    par.add();
    par.add(1, "h4");
    par.add(7);

});