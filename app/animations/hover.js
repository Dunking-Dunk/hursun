import { each } from "lodash"
import Component from "../classes/Component.js"
import gsap from "gsap"

export default class Hover extends Component {
    constructor({ element,elements }) {
        super({ element,elements })
        this.hover = false
    }

    onMouseMove(e) {
        const box = this.element.getBoundingClientRect()

            this.x = box.left + box.width * 0.5
            this.y = box.top + box.height * 0.5
            this.width = box.width
            this.height = box.height
            let hoverArea = 1.5
            let x = e.clientX - this.x;
            let y = e.clientY - this.y
            let distance = Math.sqrt(x * x + y * y);

            if (distance < this.width * hoverArea) {
                this.onHover(e.clientX, e.clientY);
            }
            else {
                this.onLeave();
              }
    }

    onHover(x, y) {
        each(this.element.children, (element,index) => {
            gsap.to(element, {
                x: (x - this.x) * 0.3 * (this.element.children.length - index),
                y: (y - this.y) * 0.3 * (this.element.children.length -  index),
                scale: 1.15,
                ease: "power2.out",
                duration: 0.4,
              });
        })
        
      }
    
    onLeave() {
        each(this.element.children, (element,index) => {
            gsap.to(element, {
                x: 0,
                y: 0,
                scale: 1,
                ease: "power2.out",
                duration: 0.7,
              });
        })
    }
    
    update() {

    }
}