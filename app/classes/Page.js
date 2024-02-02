import { each, map } from "lodash"
import GSAP from 'gsap'
import Hover from "../animations/hover.js"
import Prefix from 'prefix'
import TextReveal from "../animations/textReveal.js"
import TextOpacity from "../animations/textOpacity.js"
import TextRotation from "../animations/textRotation.js"
import DetectionManager from "./Detection.js"

export default class Page {
    constructor({ element, elements, id }) {
        this.selector = element
        this.selectorChildren = {
            ...elements,
            animationCursor: "[data-animation='hover']",
            animationTextReveal: "[data-animation='textReveal']",
            animationTextOpacity: "[data-animation='textOpacity']",
            animationTextRotation: "[data-animation='textRotation']",
            stickyContainer: '.sticky__parent',
            // stickyWrap: ".sticky",
            // stickyHorizontal: ".sticky__horizontal__scroll"
        }
        this.id = id

        this.scroll = {
            current: 0,
            target: 0 ,
            limit: 0,
            start: 0
        }

        this.mouse = {
            x: 0,
            y: 0
        }

        this.navigation = document.querySelector('.navigation__path')
        this.start = "M0 502S175 272 500 272s500 230 500 230V0H0Z"
        this.end = "M0,1005S175,995,500,995s500,5,500,5V0H0Z"

        this.transformPrefix = Prefix('transform')

    }

    create() {
        this.element = document.querySelector(this.selector)
        this.elements = {}

        each(this.selectorChildren, (selector, key) => {
            if (selector instanceof window.HTMLElement || selector instanceof window.NodeList || Array.isArray(selector)) {
                this.elements[key] = selector
            } else {
                this.elements[key] = this.element.querySelectorAll(selector)
                if (this.elements[key].length === 0) {
                    this.elements[key] = null
                } else if (this.elements[key].length === 1) {
                    this.elements[key] = this.element.querySelector(selector)
                }
            }
        })

        if (this.elements?.wrapper) {
            this.scroll.limit = (this.elements.wrapper.clientHeight - window.innerHeight)
        }

        this.createAnimation()
    }

    createAnimation() {
        this.hoverAnimation = map(this.elements.animationCursor, (element) => {
            return new Hover({ element })
        })

        this.textRevealAnimation = map(this.elements.animationTextReveal, (element) => { 
            return new TextReveal({element})
        })

        this.textOpacityAnimation = map(this.elements.animationTextOpacity, (element) => { 
            return new TextOpacity({element})
        })

        this.textRotationAnimation = map(this.elements.animationTextRotation, (element) => { 
            return new TextRotation({element})
        })
    }

    show() {
        return new Promise((resolve) => {
            this.animationOut = GSAP.timeline()

            this.animationOut.to(this.navigation, {
                attr: {
                    d: this.start
                },
                duration: 1,
                ease: "power2.inOut",
            }, '<').to(this.navigation, {
                attr: {
                    d: 'M0 2S175 1 500 1s500 1 500 1V0H0Z'
                },
                duration: 0.8,
                ease: 'power4.out',
            }, '-=0.5')

            this.animationOut.fromTo(
                this.element,
                {
                    autoAlpha: 0,
                },
                {
                    autoAlpha: 1,
                    duration: 0.8,
                    ease: "power4.ease"
                }, '-=0.5'
            );

            this.animationOut.call(() => {
                resolve()
            })
        })
    }

    hide() {
        return new Promise((resolve) => {
            this.destroy();
            this.animationIn = GSAP.timeline()

            this.animationIn.to(this.element, {
                autoAlpha: 0,
                duration: 1,
            })

            this.animationIn.to(this.navigation, {
                attr: {
                    d: this.start
                },
                duration: 1,
                ease: "power2.inOut",
            }, '<').to(this.navigation, {
                attr: {
                    d: this.end
                },
                duration: 0.8,
                ease: "power4.easeIn",
            }, '-=0.5')

            this.animationIn.call(() => {
                resolve()
            })
        })
    }

    onResize() {
        if (this.elements?.wrapper) {
            this.scroll.limit = this.elements.wrapper.clientHeight - window.innerHeight
        }

    }

    onScroll(e) {
        const { pixelY } = e
        this.scroll.target += pixelY
    }

     onMouseMove(e) {
        if (this.hoverAnimation.length > 0) {
            each(this.hoverAnimation, (o) => o.onMouseMove(e))
         }
         this.mouse.x = e.clientX 
         this.mouse.y = e.clientY 
    }

    onTouchStart(e) {
        this.scroll.start = e.touches[0].clientY
    }

    onTouchMove(e) {
        if (this.scroll.start > e.touches[0].clientY) {
            this.scroll.target += 25
        } else {
            this.scroll.target -= 25
        }
    }

    update() {
        if (this.elements.stickyContainer) {
            this.sticky = this.elements.stickyContainer.getBoundingClientRect()
            this.offsetTop = this.elements.stickyContainer.offsetTop;
        }

        this.scroll.target = GSAP.utils.clamp(0, this.scroll.limit, this.scroll.target)

        if (this.scroll.current < 0.01) {
            this.scroll.current = 0
        }

        this.scroll.current = GSAP.utils.interpolate(this.scroll.current, this.scroll.target, DetectionManager.isPhone() ? 0.1: 0.01)
        
        if (this.scroll.current > this.offsetTop && this.scroll.current < this.offsetTop + this.sticky.width - window.innerWidth) {
            this.elements.stickyContainer.style[
                this.transformPrefix
            ] = `translate3d(-${this.scroll.current - this.offsetTop}px, ${this.scroll.current - this.offsetTop}px, 0px)`
        } 

        if (this.elements?.wrapper) {
            this.elements.wrapper.style[
                this.transformPrefix
            ] = `translate3d(0px,-${this.scroll.current}px,0px)`
    }
    }
    
    removeEventListener() {
    }

    destroy() {
        this.removeEventListener()
    }

}


