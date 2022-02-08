

class Paragraph {
    constructor(document) {
        this.document = document;
        this.counter = 0;
    }

    add(length = 3, type = "p") {
        let text = [];
        let paragraph = document.createElement(type);
        let id = "paragraph" + this.counter++;
        paragraph.id = id;

        paragraph.onclick = function () {
            let t = [];
            for (let s = 0; s < length; s++) {
                t.push(parser.fillIn("_S"))
            }
            t = t.join(' ');
            document.getElementById(id).innerHTML = t;
        }


        for (let s = 0; s < length; s++) {
            text.push(parser.fillIn("_S"))
        }

        text = text.join(' ');
        paragraph.innerHTML = text;
        document.getElementById("textZone").appendChild(paragraph);
    }

    appear() {

    }

}