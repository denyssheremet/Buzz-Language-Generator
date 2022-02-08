class Word {
    constructor(root, word) {
        this.root = root;
        this.word = word;
    }
}

class PhraseBank {
    constructor(name) {
        this.name = name;
        this.dict = {};
    }

    add(words, name) {
        if (!(name in this.dict)) {
            this.dict[name] = [];
        }
        if (typeof words === 'string' ) {
            words = this.stringToWordList(words)
        }
        this.dict[name] = this.dict[name].concat(words);
    }


    stringToList(st) {
        let result = st.split("\n").slice(1, -1);
        for (let i = 0; i < result.length; i++) {
            result[i] = result[i].replace('•', '').trim();
        }
        return result;
    }
    
    listToWords(li) {
        for (let i = 0; i < li.length; i++) {
            li[i] = new Word(li[i], li[i]);
        }
        return li;
    }

    stringToWordList(st) {
        return this.listToWords(this.stringToList(st));
    }

}

// -verb -nom -adj -adv
var buzzwords =
    [
        {
            root: "efficien",
            verb: "",
            nom: "cy cies",
            adj: "t",
            adv: "tly",
        },
        {
            root: "disrupt",
            verb: ". ed ing",
            nom: "ion ions",
            adj: "ive",
            adv: "ively",
        }, {
            root: "grow",
            verb: ". n ing",
            nom: "th",
            adj: "ing",
            adv: "",
        }, {
            root: "engineer",
            verb: ". ed ing",
            nom: "ing",
            adj: "ed",
            adv: "",
        }, {
            root: "redefin",
            verb: "e ed ing",
            nom: "ition itions",
            adj: "ed",
            adv: "",
        }, {
            root: "consider",
            verb: ". ed ing",
            nom: "",
            adj: "",
            adv: "",
        }, {
            root: "envision",
            verb: ". ed ing",
            nom: "",
            adj: "ed",
            adv: "",
        }, {
            root: "creat",
            verb: "e ed ing",
            nom: "ion ions",
            adj: "ed",
            adv: "",
        }, {
            root: "critical",
            verb: "",
            nom: "",
            adj: ".",
            adv: "",
        }, {
            root: "data-point",
            verb: "",
            nom: ". s",
            adj: "",
            adv: "",
        }, {
            root: "need",
            verb: "",
            nom: ". s",
            adj: "ed",
            adv: "",
        }, {
            root: "expert",
            verb: "",
            nom: "ise ises",
            adj: "",
            adv: "ly",
        }, {
            root: "communicat",
            verb: "e ed ing",
            nom: "ion ions",
            adj: "ed",
            adv: "",
        }, {
            root: "wealth",
            verb: "",
            nom: ".",
            adj: "",
            adv: "",
        }, {
            root: "personal",
            verb: "",
            nom: "ity",
            adj: ".",
            adv: "ly",
        }, {
            root: "learn",
            verb: ". ed ing",
            nom: "ing",
            adj: "ed",
            adv: "",
        }, {
            root: "large",
            verb: "",
            nom: "",
            adj: ".",
            adv: "ly",
        }, {
            root: "expect",
            verb: ". ed ing",
            nom: "ation",
            adj: "ed",
            adv: "",
        }, {
            root: "imagin",
            verb: "e ed ing",
            nom: "ation",
            adj: "ed",
            adv: "",
        }, {
            root: "complet",
            verb: "",
            nom: "ion",
            adj: "e",
            adv: "ely",
        }, {
            root: "stead",
            verb: "",
            nom: "",
            adj: "y",
            adv: "ily",
        }, {
            root: "inform",
            verb: ". ed ing",
            nom: "ation",
            adj: "",
            adv: "",
        }, {
            root: "ethic",
            verb: "",
            nom: "s s",
            adj: "al",
            adv: "ally",
        },
        {
            root: "tru",
            verb: "",
            nom: "th ths",
            adj: "e",
            adv: "",
        }, {
            root: "realiz",
            verb: "e ed ing",
            nom: "ation ations",
            adj: "ed",
            adv: "",
        }, {
            root: "clear",
            verb: "",
            nom: "",
            adj: ".",
            adv: "ly",
        }, {
            root: "bright",
            verb: "",
            nom: "",
            adj: ".",
            adv: "",
        },
    ]


var verbsPresent = [];
var verbsPast = [];
var verbsIng = [];

var nominalizations = [];
var nominalizationsM = [];
var adjectives = [];
var adverbs = [];

var nouns = []

var locations =
    `
at the frontline of
at the frontiers of 
in key areas of
throughout
in all areas of
`

var simpleSentences =
    `
our _nom is _vIng
our _nom is _vIng _noms
`

var simplePassiveSentences =
    `
_adj _noms are _adv _adj
_noms are being _vEd
`

var sentenceFrames =
    `
It is our mission to _vPres the _nom of _nom _loc _adj _nom by _vIng _adv _vEd _noms
It can be said that _adj _noms are the cause of _nom throughout the _adj _nom industry
We believe that without _adj _noms from _noms, _vIng _noms would not be possible
It should be clear to anyone that _vIng _nom is _adv _vEd
The true source of _nom is _vIng new _noms
While most are _vIng _loc _nom to _vPres _nom, we believe in _vIng _noms 
What one has to _vPres is that the frontiers of _nom need to be _adv _adj
Soon, _adj _noms will be _adj _nom
Soon, _phrS will become a _phrC
The more _nom is _vEd, the more _noms are _vEd
Every _nom creates new _noms
Soon, the _phrS will lead to _phrS
_pre every _nom creates new _noms
While _sent, _sentP
_pre although _sentP, _sent
`

var simplePhrases =
    `
_adj _nom
_nom of _nom
_noms of _nom
_adj _nom
_nom of _noms
_nom
the new wave of _nom
the future of _nom
the potential of _nom
`

var complexPhrases =
    `
_adj _nom of _nom
_nom of _adj _nom
_nom of _vIng _nom
_nom _loc _nom
_adj _nom _loc _nom
_adj _nom _loc _noms
_adj _noms _loc _noms
_adv _adj _nom of _nom
_adv _adj _nom of _noms
`

var titlePhrases =
    `
Re-Imagining Tomorrow through _nom and _nom
Why _adj _noms are _adv _adj
_nom is _nom
Why _adj _noms are _adv _adj
`

var prefixFrames =
    `
Because
And
So
Meanwhile, 
Now more than ever,
Only a while ago, nobody could have predicted that
It is hard to believe that
You need to understand that

`

var inductionFrames =
    `
More people have _vEd than I have
`

var pacingFrames =
    `
The time for this article has come
Now more than ever, we need a _adj _nom
`

var dogSentences =
    `
Dog lover
Dog fanatic
Good with dogs
Very good with dogs
Dog person
Handy with dogs
Dogs love me
9/10 dogs would recommend me
Caretaker of three wonderful dogs
My dog can testify to my outstanding character
`

var goodPersonalAdjectives =
    `
dependable
determined
careful
creative
daring
alert
sensitive
earnest
sincere
motivated
inspired
talented
multifaceted
`

var goodPersonalDescriptions =
    `
great comunicator
true team player
real winner
profound thinker
inspiring presence
disruptive thinker
invaluable addition to any team
world-class coordinator
pioneer
`


function stringToList(st) {
    let result = st.split("\n").slice(1, -1);
    for (let i = 0; i < result.length; i++) {
        result[i] = result[i].replace('•', '').trim();
    }
    return result;
}

function listToWords(result) {
    for (let i = 0; i < result.length; i++) {
        result[i] = new Word(result[i], result[i]);
    }
    return result;
}


let pb = new PhraseBank("test");
pb.add(locations, "_loc");
pb.add(simplePhrases, "_phrS");
pb.add(complexPhrases, "_phrC");
pb.add(prefixFrames, "_pre");
pb.add(simplePassiveSentences, "_sentP");
pb.add(simpleSentences, "_sent");
pb.add(sentenceFrames, "_S");

console.log(pb);

locations = listToWords(stringToList(locations));

simplePhrases = listToWords(stringToList(simplePhrases));
complexPhrases = listToWords(stringToList(complexPhrases));

prefixFrames = listToWords(stringToList(prefixFrames));

simplePassiveSentences = listToWords(stringToList(simplePassiveSentences));
simpleSentences = listToWords(stringToList(simpleSentences));
sentenceFrames = stringToList(sentenceFrames);




for (let i = 0; i < buzzwords.length; i++) {
    let word = buzzwords[i];

    // verbs
    if (word.verb !== "") {
        let verb = word.verb.split(" ");

        for (let j = 0; j < verb.length; j++) {
            verb[j] = verb[j].replace('.', '');
        }
        verbsPresent.push(new Word(word.root, word.root + verb[0]));
        verbsPast.push(new Word(word.root, word.root + verb[1]));
        verbsIng.push(new Word(word.root, word.root + verb[2]));

        pb.add(new Word(word.root, word.root + verb[0]), "_vPres");
        pb.add(new Word(word.root, word.root + verb[1]), "_vEd");
        pb.add(new Word(word.root, word.root + verb[2]), "_vIng");
    }

    // nominalizations
    if (word.nom !== "") {
        let nom = word.nom.split(" ");
        for (let j = 0; j < nom.length; j++) {
            nom[j] = nom[j].replace('.', '');
        }
        nominalizations.push(new Word(word.root, word.root + nom[0]));
        pb.add(new Word(word.root, word.root + nom[0]), "_noms");
        if (nom.length > 1) {
            nominalizationsM.push(new Word(word.root, word.root + nom[1]));
            pb.add(new Word(word.root, word.root + nom[1]), "_noms");
        }
    }
    // adjectives
    if (word.adj !== "") {
        adjectives.push(new Word(word.root, word.root + word.adj.replace('.', '')));
        pb.add(new Word(word.root, word.root + word.adj.replace('.', '')), "_adj");
    }
    // adverbs
    if (word.adv !== "") {
        adverbs.push(new Word(word.root, word.root + word.adv.replace('.', '')));
        pb.add(new Word(word.root, word.root + word.adv.replace('.', '')), "_adv");
    }
}
