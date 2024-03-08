import * as T from 'three'
import Stats from 'stats.js'

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import Home from './home/index.js';
import Projects from './projects/index.js';

import vertex from '../../shaders/background/vertex.glsl'
import fragment from '../../shaders/background/lavaFragment.glsl'

export default class Canvas {
    constructor() {
        this.canvas = document.querySelector('.webgl')

        this.size = {
            width: window.innerWidth,
            height: window.innerHeight,
        }

        this.scene = new T.Scene()
        this.content = document.querySelector('.content')
        this.clock = new T.Clock()

        this.createCamera()
        this.createLight()
        this.createBackground()
        // this.createStats()
        this.createRenderer() 
        this.createScene()
    }

    createCamera() {
        this.camera = new T.PerspectiveCamera(75, this.size.width / this.size.height,
            0.0001,
        1000)
        this.camera.position.set(0, 0, 5)
    }
    
    createLight() {
        this.light = new T.AmbientLight('#FBA834', 10)
        this.scene.add(this.light)

    }

    createBackground() {
        this.geometry = new T.PlaneGeometry(50, 50)
        this.material = new T.ShaderMaterial({
            uniforms: {
                uTime: {value: 0}
            },
            vertexShader: vertex,
            fragmentShader: fragment
        })
        this.planeBackground = new T.Mesh(this.geometry, this.material)
        this.planeBackground.position.set(0,0,-10)
        this.scene.add(this.planeBackground)
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
        })

        this.renderer.setSize(this.size.width, this.size.height)
        this.renderer.setPixelRatio(Math.min(1, window.devicePixelRatio))
        this.renderer.outputColorSpace = T.SRGBColorSpace
       this.renderer.autoClear = false
        this.renderer.toneMapping = T.ACESFilmicToneMapping

        this.controls = new OrbitControls( this.camera, this.renderer.domElement );
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
        this.material.uniforms.uTime.value = this.clock.getElapsedTime()
        
        this.renderer.setScissorTest(false);
        this.renderer.clear();
        this.renderer.setScissorTest(true);


        if (this.page) {
            this.page.update()
        }

          const rect = this.content.getBoundingClientRect()
        if (rect.bottom < 0 || rect.top > this.renderer.domElement.clientHeight ||
            rect.right < 0 || rect.left > this.renderer.domElement.clientWidth) {
            return;
        }
        const width = rect.right - rect.left;
		const height = rect.bottom - rect.top;
		const left = rect.left;
        const bottom = this.renderer.domElement.clientHeight - rect.bottom;
        
        this.renderer.setViewport( left, bottom, width, height );
        this.renderer.setScissor( left, bottom, width, height );
        this.renderer.render(this.scene, this.camera)
 
        // this.stats.end()
        }


}