

class Parser {
    constructor(dict) {
        this.dict = dict;
    }

    fillGap(gap) {
        let res = "";
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
                res = this.fillSentenceFrame(randFromList(simplePhrases, 1)[0].word, false);
                res = new Word(res, res);
                break;
            case "_phrC":
                res = this.fillSentenceFrame(randFromList(complexPhrases, 1)[0].word, false);
                res = new Word(res, res);
                break;
            case "_sentP":
                res = this.fillSentenceFrame(randFromList(simplePassiveSentences, 1)[0].word, false);
                res = new Word(res, res);
                break;
            case "_sent":
                res = this.fillSentenceFrame(randFromList(simpleSentences, 1)[0].word, false);
                res = new Word(res, res);
                break;
            case "_pre":
                res = randFromList(prefixFrames, 1)[0];
                break;
            default:
                res = "___"
                break;
        }
        if (hasComma) {
            res.word += ",";
        }
        return res;
    
    }
    
    fillSentenceFrame(frame, addDot = true) {
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
        if (addDot) { pieces[pieces.length - 1] += "."; }
        pieces = pieces.join(' ');
        return pieces;
    }

    fillIn(sentence) {
        return this.fillSentenceFrame(sentence);
    }
    
}