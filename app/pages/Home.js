import { each } from "lodash";
import Page from "../classes/Page.js";
import { lerp } from "../utils/lerp.js";
import gsap from "gsap";
import TagCloud from "TagCloud";
import DetectionManager from '../classes/Detection.js'

export default class Home extends Page {
    constructor() {
        super({
            element: '.home',
            elements: {
                wrapper: '.home__wrapper',
                marque: '.home__about__infinity',
                projectText: '.home__project',
                circleArea: '.home__abstract__main',
                circles: '.home__abstract__circle',
                hero: '.home__hero',
                title: '.home__hero__title',
                skillsContainer: '.home__skills__sphere',
            },
            id: 'home'
        })
        this.hoverOver = false;
    }

    create() {
        super.create()
        this.createMarque()
        this.createCircleArea()
        this.createSkillSphere()
    }


    createMarque() {
        if (this.elements?.marque) {
       
            gsap.to(this.elements.marque, {
                x: "-=2000",
                duration: 20,
                ease: "none",
                repeat: -1,
                modifiers: {
                    x: gsap.utils.unitize(x => parseFloat(x) % 2000)
                }
            })
        }
    }

    mouseEnter(e)  {
        this.hoverOver = true
    }

    mouseLeave() {
        this.hoverOver = false
    }

    createCircleArea() {
         this.positions = {
            circleOne: { x: 0, y: 0 },
            circleTwo: { x: 0, y: 0 },
            circleThree: { x: 0, y: 0 },
            circleFour: { x: 0, y: 0 },
        }

    
        if (this.elements?.circleArea) {
            this.mouseEnterEvent = this.mouseEnter.bind(this)
            this.mouseLeaveEvent = this.mouseLeave.bind(this)

             this.elements.circleArea.addEventListener('mouseenter',this.mouseEnterEvent)
    
            this.eventMouseLeave = this.elements.circleArea.addEventListener('mouseleave',this.mouseLeaveEvent )
        }
          
    }

    animateCircleArea() { 
        let width = window.innerWidth
        let height = window.innerHeight

        let x = this.mouse.x
        let y = this.mouse.y

        this.positions.circleOne.x = lerp(this.positions.circleOne.x, (x - (width / 2)) * .3, .1);
        this.positions.circleOne.y = lerp(this.positions.circleOne.y, (y - (height / 2)) * .3, .1);

        this.positions.circleTwo.x = lerp(this.positions.circleTwo.x, (-x + (width / 2)) * .3, .1);
        this.positions.circleTwo.y = lerp(this.positions.circleTwo.y, (y - (height / 2)) * .3, .1);

        this.positions.circleThree.x = lerp(this.positions.circleThree.x, (x - (width / 2)) * .3, .1);
        this.positions.circleThree.y = lerp(this.positions.circleThree.y, (-y + (height / 2)) * .3, .1);

        this.positions.circleFour.x = lerp(this.positions.circleFour.x, (-x + (width / 2)) * .3, .1);
        this.positions.circleFour.y = lerp(this.positions.circleFour.y, (-y + (height / 2)) * .3, .1);

    
        this.elements.circles[0].style.transform = `translate3d(${this.positions.circleOne.x}px,${this.positions.circleOne.y}px,0px) translate(-50%, -50%)`
        this.elements.circles[1].style.transform = `translate3d(${this.positions.circleTwo.x}px,${this.positions.circleTwo.y}px,0px) translate(-50%, -50%)`

        this.elements.circles[2].style.transform = `translate3d(${this.positions.circleThree.x}px,${this.positions.circleThree.y}px,0px) translate(-50%, -50%)`
        this.elements.circles[3].style.transform = `translate3d(${this.positions.circleFour.x}px,${this.positions.circleFour.y}px,0px) translate(-50%, -50%)`

        // each(this?.images, (image) => {
        //     image.style.top = `${this.mouse.y}px`
        //     image.style.left = `${this.mouse.x}px`
        //     image.style.opacity = this.hoverOver ? 1: 0
        // })
    }

    createSkillSphere() {
        const texts = [
            'JavaScript',
            'Python',
            'Express',
            'Next js' ,
            'React ',
            'Microservice ',
            'Figma',
            'React-Native ',
            'AWS ',
            'JavaScript',
            'Tensorflow',
            'SkLearn',
            'HTML',
            'CSS',
            'C',
            'Java',
            'UI/UX',
            'GLSL',
        ]
        this.TagOptions = {
            radius: DetectionManager.isPhone() ? 150 : 300,
            maxSpeed: 'normal',
            itemClass: 'home__skills__skill',
        };

        this.tag = TagCloud(this.elements.skillsContainer, texts, this.TagOptions);
    }



    update() {
        super.update()
        if (this.elements?.circleArea && this.hoverOver) {
                this.animateCircleArea() 
        }
    }

    destroy() {
        super.destroy()
    }

}