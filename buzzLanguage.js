// -verb -nom -adj -adv
var buzzwords =
    [
        {
            root: "efficien",
            verb: "",
            nom: "cy",
            adj: "t",
            adv: "tly",
        },
        {
            root: "disrupt",
            verb: ". ed ing",
            nom: "ion",
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
            nom: "ution",
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
            nom: "ition",
            adj: "ed",
            adv: "",
        }, {
            root: "consider",
            verb: ". ed ing",
            nom: "ation",
            adj: "ed",
            adv: "",
        }, {
            root: "envision",
            verb: ". ed ing",
            nom: "ing",
            adj: "ed",
            adv: "",
        }, {
            root: "creat",
            verb: "e ed ing",
            nom: "ion",
            adj: "ed",
            adv: "",
        }, {
            root: "critical",
            verb: "",
            nom: "ity",
            adj: "",
            adv: "ly",
        }, {
            root: "data",
            verb: "",
            nom: ".",
            adj: "",
            adv: "",
        }, {
            root: "need",
            verb: "",
            nom: ".",
            adj: "ed",
            adv: "",
        }, {
            root: "expert",
            verb: "",
            nom: "ise",
            adj: ".",
            adv: "ly",
        }, {
            root: "communicat",
            verb: "e ed ing",
            nom: "ion",
            adj: "ed",
            adv: "ingly",
        }, {
                root:"cultivat",
                verb:"e ed ing",
                nom:"ion",
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
Our mission is to _vPres the _nominalization of _nominalization _location _adjective _nominalization through _adverb _vEd _nominalization
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

// adverbs = stringToList(adverbs);
// verbs = stringToList(verbs);
// adjectives = stringToList(adjectives);
// nouns = stringToList(nouns);
// nominalizations = stringToList(nominalizations);

locations = stringToList(locations);

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
        verbsPresent.push(word.root + verb[0]);
        verbsPast.push(word.root + verb[1]);
        verbsIng.push(word.root + verb[2]);
    }

    // nominalizations
    if (word.nom !== "") {
        nominalizations.push(word.root + word.nom.replace('.', ''));
    }
    // adjectives
    if (word.adj !== "") {
        adjectives.push(word.root + word.adj.replace('.', ''));
    }
    // adverbs
    if (word.adv !== "") {
        adverbs.push(word.root + word.adv.replace('.', ''));
    }
}
console.log(verbsPresent);
console.log(verbsPast);
console.log(verbsIng);
