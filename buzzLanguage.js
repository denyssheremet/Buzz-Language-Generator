

var adverbs = 
`
efficient-ly
great-ly
`

var verbs = 
`
grow-n
redefine-d
engineer-ed
refine-d
reconsider-ed
envision-ed
create-d
`

var adjectives = 
`
business-critical
`

var nouns = 
`
public
government
stakeholders
environment
`

var nominalizations = 
`
data
expertise
`

var locations = 
`
at the frontline
at the frontiers
in key areas
throughout
`

var sentenceFrames = 
`
Our mission is to _verb the _nominalization for _nominalization _location of _adjective _nominalization through _adverb _verb
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

adverbs = stringToList(adverbs);
verbs = stringToList(verbs);
adjectives = stringToList(adjectives);
nouns = stringToList(nouns);
nominalizations = stringToList(nominalizations);
locations = stringToList(locations);

sentenceFrames = stringToList(sentenceFrames);
