import { each } from 'lodash';
import Component from '../classes/Component.js'
import { lerp } from '../utils/lerp.js';

export default class Header extends Component {
    constructor() {
        super({
            element: '.header',
            elements: {
                wrapper: '.header__wrapper',
                button: '.header__btn',
                sidebar: '.header__sidebar',
                path: '.header__path',
                links: '.header__sidebar__link '
            }
        })

        this.y = 100;
        this.c = 100;
        this.toggle = false;
        this.headerButton()
        this.animate()
    }
    
    animate() {
        let y = this.y
        let c = this.c
        if (this.toggle) {
            this.y = lerp(y, 0, .055);
            this.c = lerp(c, 0, 0.025);
            this.elements.path.setAttribute('d', `M 0 ${y} L 0 100 100 100 100 ${y} C ${50} ${c}, ${50} ${c}, 0 ${y}`)      
        } else {
            this.elements.sidebar.classList.remove('active')
            this.y = lerp(y, 100, .055)
            this.c = lerp(c, 100, 0.025);
            this.elements.path.setAttribute('d', `M 0 ${y} L 0 100 100 100 100 ${y} C 50 ${c}, ${50} ${c}, 0 ${y}`)
        }
    }
    
    
    headerButton() {
   
        this.elements.button.addEventListener('click', () => {
            this.elements.button.classList.toggle('active')
       
            setTimeout(() => {
                this.toggle = !this.toggle;
                setTimeout(() => {
                    this.elements.sidebar.classList.add('active')
                }, 500)
            }, 300)

        })

        each(this.elements.links, (link) => { 
            link.addEventListener('click', () => {
                this.elements.button.classList.remove('active')
                this.toggle = false
            })
        })

    }
    update() {
        this.animate()
     }
}