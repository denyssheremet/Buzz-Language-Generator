

class Parser {
    constructor(pb) {
        this.pb = pb;
    }

    fillGap(gap) {
        return this.pb.get(gap);
    }

    fillSentenceFrame(frame) {
        let pieces = frame.split(" ");
        // pieces.unshift("_pre");

        let word;
        let used = [];
        for (let i = 0; i < pieces.length; i++) {
            if (pieces[i].includes("_")) {
                do {
                    word = this.fillGap(pieces[i]);
                } while (used.includes(word.root));
                pieces[i] = word.word;
                used.push(word.root);
            }
        }
        pieces = pieces.join(' ');
        return pieces;
    }

    fillIn(sentence) {
        do {
            sentence = this.fillSentenceFrame(sentence);
        } while (sentence.includes("_"))

        sentence += ".";

        return sentence;
    }

}