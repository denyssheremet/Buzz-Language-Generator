class Word {
    constructor(root, word) {
        this.root = root;
        this.word = word;
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
        },
        {
            root: "importan",
            verb: "",
            nom: "ce",
            adj: "t",
            adv: "tly",
        }, {
            root: "sol",
            verb: "ve ved ving",
            nom: "ution utions",
            adj: "ved",
            adv: "",
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
            nom: "ation ations",
            adj: "ed",
            adv: "",
        }, {
            root: "envision",
            verb: ". ed ing",
            nom: "ing ings",
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
            nom: "ity ities",
            adj: "",
            adv: "ly",
        }, {
            root: "data",
            verb: "",
            nom: ". .",
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
            adj: ".",
            adv: "ly",
        }, {
            root: "communicat",
            verb: "e ed ing",
            nom: "ion ions",
            adj: "ed",
            adv: "ingly",
        }, {
                root:"cultivat",
                verb:"e ed ing",
                nom:"ion ions",
                adj:"",
                adv:"",
            },    
            // {
        //         root:"",
        //         verb:". ed ing",
        //         nom:"ion",
        //         adj:"t",
        //         adv:"tly",
        //     },    {
        //         root:"",
        //         verb:". ed ing",
        //         nom:"ion",
        //         adj:"t",
        //         adv:"tly",
        //     },    {
        //         root:"",
        //         verb:". ed ing",
        //         nom:"ion",
        //         adj:"t",
        //         adv:"tly",
        //     },
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

var sentenceFrames =
    `
Our mission is to _vPres the _nom of _nom _loc _adj _nom by _vIng _adv _vEd _noms
`

for (let i = 0; i < adverbs.length; i++) {

}

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


// adverbs = stringToList(adverbs);
// verbs = stringToList(verbs);
// adjectives = stringToList(adjectives);
// nouns = stringToList(nouns);
// nominalizations = stringToList(nominalizations);

locations = listToWords(stringToList(locations));
sentenceFrames = stringToList(sentenceFrames);


console.log(buzzwords);
for (let i = 0; i < buzzwords.length; i++) {
    let word = buzzwords[i];
    console.log(word.root);

    // verbs
    if (word.verb !== "") {
        let verb = word.verb.split(" ");
        console.log(verb);
        for (let j = 0; j < verb.length; j++) {
            verb[j] = verb[j].replace('.', '');
        }
        verbsPresent.push(new Word(word.root, word.root + verb[0]));
        verbsPast.push(new Word(word.root, word.root + verb[1]));
        verbsIng.push(new Word(word.root, word.root + verb[2]));
    }

    // nominalizations
    if (word.nom !== "") {
        let nom = word.nom.split(" ");
        for (let j = 0; j < nom.length; j++) {
            nom[j] = nom[j].replace('.', '');
        }
        nominalizations.push(new Word(word.root, word.root + nom[0]));
        if (nom.length > 1) {
            nominalizationsM.push(new Word(word.root, word.root + nom[1]));
        }
    }
    // adjectives
    if (word.adj !== "") {
        adjectives.push(new Word(word.root, word.root + word.adj.replace('.', '')));
    }
    // adverbs
    if (word.adv !== "") {
        adverbs.push(new Word(word.root, word.root + word.adv.replace('.', '')));
    }
}
console.log(verbsPresent);
console.log(verbsPast);
console.log(verbsIng);
