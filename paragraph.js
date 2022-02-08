

class Paragraph {
    constructor(document, parser) {
        this.document = document;
        this.parser = parser;
    }

    add(length = 3, type = "p") {
        let text = [];
        let paragraph = document.createElement(type);

        for (let s = 0; s < length; s++) {
            text.push(this.parser.fillIn("_S"))
        }

        text = text.join(' ');
        paragraph.innerHTML = text;
        document.getElementById("textZone").appendChild(paragraph);
    }

    appear() {

    }

}