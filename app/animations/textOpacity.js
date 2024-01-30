import gsap from 'gsap'

import Animation from '../classes/Animation.js'
import {split} from '../utils/text.js'
import { each } from 'lodash'

export default class TextReveal extends Animation { 
    constructor({ element, elements }) {
        super({ element, elements })
        
       split({ element, append: true })
        this.allSpans = this.element.querySelectorAll('span')


    }

    animateIn() {

    gsap.to(this.element,{
        autoAlpha: 1,
        duration: 2
    })
      
       each(this.allSpans, (element, index) => {
        gsap.fromTo(element, {
               opacity: 0.2
           }, {
               delay: index * 0.2,
               duration: 0.5,
               ease: 'expo.out',
               opacity: 1
           })
       })
    }

    animateOut() {
        gsap.to(this.element,{
            autoAlpha: 0
        })
    }
}