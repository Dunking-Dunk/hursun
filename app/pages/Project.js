import Page from "../classes/Page.js";
import { each } from "lodash";

export default class Project extends Page {
    constructor() {
        super({
            element: '.project',
            elements: {
                wrapper: '.project__wrapper',
                case: '.case',
            },
            id: 'project'
        })
    }   

    create() {
        super.create();
        this.show()
    }

    show() {
        this.href = window.location.href
        this.id = this.href.substring(this.href.lastIndexOf('/') + 1)
        this.cases = this.elements.wrapper.children
        this.case = Array.from(this.cases).find((e) => e.id === this.id)
        this.case.classList.add('active')
        this.images = this.case.querySelectorAll('[data-src]')
        each(this.images, (i) => {
            const img = new Image()
            img.src = i.getAttribute('data-src')
            img.className = 'case__gallery__media__image'
            img.src = i.getAttribute('data-src')
      img.decode().then(_ => {
       i.classList.add('case__gallery__media__placeholder--active')
       i.appendChild(img)
      })
        })
        this.scroll.limit = this.case.clientHeight - window.innerHeight
        return super.show()
    }

    hide() {
        this.scroll.target = 0
        if (this.case)
            this.case.classList.remove('active')
        
            this.elements.wrapper = null
        
            return super.hide()
    }
}