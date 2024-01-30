import Component from "../../../classes/Component.js";

import Particle from "./particle.js";
import Project from "../project.js";

export default class extends Component {
    constructor({ renderer, camera, size }) {
        super({
            element: '.home',
            elements: {
                hero: '.home__hero',
                title:".home__hero__title",
                about: '.home__about',
                project: '.home__featured',
                links: '.home__project',
                contact: '.home__contact'
            }
        }) 

        this.renderer = renderer;
        this.camera = camera;
        this.size = size;

        // setTimeout(() => {
        //     this.createTitleEffect();
        // }, 100)
 
        this.createScene()
    }

    createTitleEffect() {
        const text = new Blotter.Text("CREATIVE", {
            family: "Manolo Mono",
            size : 120,
            fill: "#f6f6f6",
            paddingLeft: 100
        });

        const text2 = new Blotter.Text("TECHNOLOGIST", {
            family: "Manolo Mono",
            size : 120,
            fill: "#f6f6f6",
            paddingLeft: 100,
        });
        
        const material = new Blotter.RollingDistortMaterial()
        material.uniforms.uSineDistortSpread.value = 0.055
        material.uniforms.uSineDistortCycleCount.value = 2
        material.uniforms.uSineDistortAmplitude.value = 0.05
        material.uniforms.uNoiseDistortVolatility.value = 1.5
        material.uniforms.uNoiseDistortAmplitude.value = 0.05
        material.uniforms.uDistortPosition.value = [0.5,0.5]
        material.uniforms.uRotation.value = 170
        material.uniforms.uSpeed.value = 0.1

        const blotter = new Blotter(material, { texts: [text,text2] })
        
        this.scope = blotter.forText(text);
        this.scope2 = blotter.forText(text2);
        this.setTitle(this.elements.hero, this.elements.title)
    }
    
    
    setTitle(element1, element2) {
        if (this.scope && this.scope2) {
            this.scope.appendTo(element1)
            this.scope2.appendTo(element2)
        }
    }

    setElements() {
        super.create()
        if (this.particle)
        this.particle.setElements({
            hero: this.elements.hero, about: this.elements.about,contact: this.elements.contact
        })
        if (this.project) 
            this.project.setElements({
                project: this.elements.project, links: this.elements.links
            })
        
        // this.setTitle(this.elements.hero, this.elements.title)
    }

    createScene() {
        this.particle = new Particle({
            renderer: this.renderer, camera: this.camera, elements: {
            hero: this.elements.hero, about: this.elements.about,contact: this.elements.contact
            }
        })

        this.project = new Project({
            renderer: this.renderer, camera: this.camera, elements: {
            project: this.elements.project, links: this.elements.links
            },
            size: this.size
        })
    }

    onMouseMove(e) {
        if (this.particle && this.particle.onMouseMove) 
            this.particle.onMouseMove(e)

        if (this.project && this.project.onMouseMove)
            this.project.onMouseMove(e)
    }

        onResize() {
        
    }

    onScroll() {

    }

    update() {
        if (this.particle && this.particle.update)
            this.particle?.update()

        if (this.project && this.project.update)
            this.project?.update()
    }
}