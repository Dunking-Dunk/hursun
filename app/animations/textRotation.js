import { each } from "lodash"
import Component from "../classes/Component.js"

export default class TextRotation extends Component {
    constructor({ element,elements }) {
        super({ element, elements })
       
        this.HoverText()
    }

    HoverText() {
            let word = this.element.children[0].children[0].innerText.split('')
            this.element.children[0].innerHTML = ''
            each(word, (letter, index) => {
                this.element.children[0].innerHTML += `<h3 class="home__project__title" style="--index: ${index};">${letter}</h3>`
            })
            let cloneDiv = this.element.children[0].cloneNode(true)
            cloneDiv.style.position = 'absolute';
            // cloneDiv.style.left = '0';
            // cloneDiv.style.top = '0';
        
            this.element.appendChild(cloneDiv)
}


}