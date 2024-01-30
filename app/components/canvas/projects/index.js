import Component from "../../../classes/Component.js";

import Project from "../project.js";

export default class extends Component {
    constructor({ renderer, camera, size }) {
        super({
            element: '.projects',
            elements: {
                project: ".projects__wrapper",
                links: '.home__project'
            }
        }) 

        this.renderer = renderer;
        this.camera = camera;
        this.size = size;

        this.createScene()
    }

    setElements() {
        super.create()
        if (this.project) 
            this.project.setElements({
                project: this.elements.project, links: this.elements.links
            })
    }

    createScene() {
        if (this.elements?.project && this.elements.links)
            this.project = new Project({
                renderer: this.renderer, camera: this.camera, elements: {
                project: this.elements.project, links: this.elements.links
                },
            size: this.size
            })
    }

    onMouseMove(e) {

        if (this.project && this.project.onMouseMove)
            this.project.onMouseMove(e)
    }
    onResize() {
        if (this.project && this.project.onResize) {
        this.project.onResize()
    }
    }

    onScroll() {

    }

    update() {
        if (this.project && this.project.update)
            this.project?.update()
    }
}