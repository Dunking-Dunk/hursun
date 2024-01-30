import Component from '../../classes/Component.js'
import { each } from 'lodash'
import * as T from 'three'
import  {lerp} from '../../utils/lerp.js'

import vertex from '../../shaders/distortImage/vertex.glsl'
import fragment from '../../shaders/distortImage/fragment.glsl'

export default class Project {
    constructor({ renderer, camera, elements,size }) {
        this.elements = elements
        this.renderer = renderer
        this.camera = camera
        this.size = size

        this.offset = new T.Vector2(0,0)
        this.mouse = {
            x: 0,
            y: 0
        }
        this.linksHover = false
        this.clock = new T.Clock()
        this.createTexture()
        this.createGeometry()
        this.createLight()
        this.setEventListener()
    }

    createTexture() {
        this.textures = {}
        this.scene = new T.Scene()

        for (let i of this.elements.links) {
            let src = i.getAttribute('data-src')

            let texture = new T.TextureLoader().load(src)
            this.textures[i.getAttribute('data-title')] = texture
        }
    }

    createGeometry() { 
        this.planeGeometry = new T.PlaneGeometry(1, 1, 20, 20);
        this.planeMaterial = new T.ShaderMaterial({
          side: T.DoubleSide,
          wireframe: false,
          fragmentShader: fragment,
          vertexShader: vertex,
          uniforms: {
            progress: { type: 'f', value: 0 },
              uTexture: { value: null },
            time: {value: 0},
            uAlpha: { value: 0 },
            uOffset: {value: new T.Vector2(0,0) }
          }
        });
    
        this.plane = new T.Mesh(this.planeGeometry, this.planeMaterial)
        this.plane.scale.set(this.size.width/ 800, this.size.height/ 800);
        this.plane.position.set(this.offset.x, this.offset.y, 0)
        this.scene.add(this.plane)
    }

    createLight() {
        this.light = new T.AmbientLight('white', 10)
        this.scene.add(this.light)
    }

    setEventListener() {
        each(this.elements.links, (element) => {
            element.addEventListener('mousemove', (e) => {
                this.planeMaterial.uniforms.uTexture.value = this.textures[element.getAttribute('data-title')]
            })

            element.addEventListener('mouseenter', () => {
                this.linksHover = true
              })
              
              element.addEventListener('mouseleave', () => {
                this.linksHover = false
              })
            
        })
            
    }

    setElements(elements) {
        this.elements = elements
        this.setEventListener()
    }

    onResize() {
        this.size ={
            height: window.innerHeight,
            width: window.innerWidth
        }
        this.plane.scale.set(this.size.width/ 800, this.size.height/ 800);
    }
    
    onMouseMove(e) {
        this.mouse.x = e.clientX
        this.mouse.y = e.clientY
    }
    
    update() {
        const rect = this.elements.project?.getBoundingClientRect();
        
					if ( rect.bottom < 0 || rect.top > this.renderer.domElement.clientHeight ||
						 rect.right < 0 || rect.left > this.renderer.domElement.clientWidth ) {
						return; 

        }
        this.camera.position.set(0, 0, 2)
        this.planeMaterial.uniforms.time.value = this.clock.getElapsedTime()

        this.offset.x = lerp(this.offset.x, this.mouse.x, 0.1)
        this.offset.y = lerp(this.offset.y, this.mouse.y, 0.1)
        this.planeMaterial.uniforms.uOffset.value.set((this.mouse.x - this.offset.x) * 0.0005, -(this.mouse.y - this.offset.y) * 0.0005)
        this.plane.position.set((this.offset.x - (window.innerWidth / 2)) / 900, (-this.offset.y + (window.innerHeight / 2)) / 900)
        this.linksHover ? this.planeMaterial.uniforms.uAlpha.value = lerp(this.planeMaterial.uniforms.uAlpha.value,1.0, 0.1) : this.planeMaterial.uniforms.uAlpha.value = lerp(this.planeMaterial.uniforms.uAlpha.value,0.0, 0.1)

        const width = rect.right - rect.left;
		const height = rect.bottom - rect.top;
		const left = rect.left;
        const bottom = this.renderer.domElement.clientHeight - rect.bottom;
        
        this.renderer.setViewport( left, bottom, width, height );
        this.renderer.setScissor( left, bottom, width, height );

            this.renderer.render(this.scene,this.camera)
    }
    
}