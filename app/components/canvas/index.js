import * as T from 'three'
import Stats from 'stats.js'

import Home from './home/index.js';
import Projects from './projects/index.js';

export default class Canvas {
    constructor() {
        this.canvas = document.querySelector('.webgl')

        this.size = {
            width: window.innerWidth,
            height: window.innerHeight,
        }

        this.createCamera()
        this.createLight()
        // this.createStats()
        this.createRenderer() 
        this.createScene()
    }

    createCamera() {
        this.camera = new T.PerspectiveCamera(70, this.size.width / this.size.height, 1, 100)
        this.camera.position.set(0, 0, 2)
        this.scene = new T.Scene()
    }
    
    createLight() {
        this.light = new T.AmbientLight('white', 10)
    }

    createStats() {
        this.stats = new Stats()
this.stats.showPanel(0)
document.body.appendChild(this.stats.dom)
    }

    createRenderer() {
        this.renderer = new T.WebGLRenderer({
            canvas: this.canvas,
            antialias: true,
            preserveDrawingBuffer: false
        })

        this.renderer.setSize(this.size.width, this.size.height)
        this.renderer.setPixelRatio(Math.min(1, window.devicePixelRatio))
        this.renderer.outputColorSpace = T.SRGBColorSpace
        this.renderer.toneMapping = T.ACESFilmicToneMapping
    }

    createScene() {
        this.pages = {
        }
    }

    onChange(url) {
        this.template = url
        if (!(this.template in this.pages)) {
            if (this.template === 'home') {
                this.pages[this.template] = new Home({ renderer: this.renderer, camera: this.camera, size: this.size })
            }
            if (this.template === 'projects')
                this.pages[this.template] = new Projects({ renderer: this.renderer, camera: this.camera, size: this.size})
        }
        this.page = this.pages[this.template]
        if (this.page && this.page.setElements)
            this.page.setElements()
    }


    onResize() {
    this.size.width = window.innerWidth
        this.size.height = window.innerHeight

        if (this.page) {
            this.page.onResize()
        }

        this.camera.aspect = this.size.width / this.size.height
        this.camera.updateProjectionMatrix()

        this.renderer.setSize(this.size.width, this.size.height)
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    }

    onScroll(e) {
        if (this.page &&  this.page.onScroll) {
            this.page.onScroll(e)
        }
    }

    onMouseMove(e) {
        if (this.page &&  this.page.onMouseMove) {
           this.page.onMouseMove(e)
       }
         }

    update() {
        // this.stats.begin()
        
        this.renderer.setScissorTest( false );
        this.renderer.clear();
        this.renderer.setScissorTest(true);

        if (this.page) {
            this.page.update()
        }
        // this.stats.end()
        }


}