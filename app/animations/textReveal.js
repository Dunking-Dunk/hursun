import gsap from 'gsap'

import Animation from '../classes/Animation.js'
import {split} from '../utils/text.js'
import { each } from 'lodash'

export default class TextReveal extends Animation { 
    constructor({ element, elements }) {
        super({ element, elements })
        
        split({ element, append: true })

        split({
            element: this.element,
            append: true,
        })

        this.allSpans = this.element.querySelectorAll('span  span')
    }

    animateIn() {

    gsap.to(this.element,{
        autoAlpha: 1,
        duration: 1
    })
      
       each(this.allSpans, (element, index) => {
        gsap.fromTo(element, {
               y: '100%'
           }, {
               delay: index * 1.5 / this.allSpans.length,
               duration: 0.5,
               ease: 'expo.out',
               y: '0%',
           })
       })
    }

    animateOut() {
        gsap.to(this.element,{
            autoAlpha: 0
        })
    }
}