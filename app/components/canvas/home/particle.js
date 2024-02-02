import * as T from 'three'

import vertex from '../../../shaders/particle/vertex.glsl'
import fragment from '../../../shaders/particle/fragment.glsl'
import simVertex from '../../../shaders/particle/simVertex.glsl'
import simFragment from '../../../shaders/particle/simFragment.glsl'

import DetectionManager from '../../../classes/Detection.js'


export default class Particle {
  constructor({ renderer, camera, elements, size }) {
    this.elements = elements
    this.renderer = renderer

    this.camera = camera

    this.size = DetectionManager.isPhone() ? 256 : 512
    
    this.device = {
      width: window.innerWidth,
      height: window.innerHeight
    }

    this.mouse = {
      x: 0,
      y: 0
    }
    
    this.scene = new T.Scene()
    this.clock = new T.Clock();

    this.setupFBO()
        this.createObject()
  }

  getRenderTarget() {
    const renderTarget = new T.WebGLRenderTarget(this.device.width, this.device.height, {
      minFilter: T.NearestFilter,
      magFilter: T.NearestFilter,
      format: T.RGBAFormat,
      type: T.FloatType,
    });
    
    return renderTarget
}

  
  setupFBO() {
    this.fbo = this.getRenderTarget()
    this.fbo1 = this.getRenderTarget()

    this.fboScene = new T.Scene()
    this.fboCamera = new T.OrthographicCamera(-1, 1, 1,-1, -1, 1);

    this.fboCamera.position.set(0, 0, 1)
    this.fboCamera.lookAt(0, 0,0)

    let geometry = new T.PlaneGeometry(2, 2)

    this.data = new Float32Array(this.size * this.size * 4);

    for (let i = 0; i < this.size; i++) {
      for (let j = 0; j < this.size; j++) {
        let index = (i + j * this.size) * 4;
        let theta = Math.random() * Math.PI * 2
        let r = 0.5 + 0.5 * Math.random()
        this.data[index + 0] = r*Math.cos(theta)
        this.data[index + 1] = r*Math.sin(theta)
        this.data[index + 2] = 1
        this.data[index + 3] = 1
      }
    }

    this.fboTexture = new T.DataTexture(this.data, this.size, this.size, T.RGBAFormat, T.FloatType)
    this.fboTexture.magFilter = T.NearestFilter
    this.fboTexture.minFilter = T.NearestFilter
    this.fboTexture.needsUpdate = true

    this.fboMaterial = new T.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        uPositions: { value: this.fboTexture },
        uInfo: { value: null },
        uMouse: {value: new T.Vector2(0,0)}
      },
      vertexShader: simVertex,
      fragmentShader: simFragment
    })

    this.infoArray = new Float32Array(this.size * this.size * 4);

    for (let i = 0; i < this.size; i++) {
      for (let j = 0; j < this.size; j++) {
        let index = (i + j * this.size) * 4;
        this.infoArray[index + 0] = 0.5 + Math.random()
        this.infoArray[index + 1] = 0.5 + Math.random()
        this.infoArray[index + 2] = 0.5 + Math.random()
        this.infoArray[index + 3] = 1
      }
    }

    this.info = new T.DataTexture(this.infoArray, this.size, this.size, T.RGBAFormat, T.FloatType)
    this.info.magFilter = T.NearestFilter
    this.info.minFilter = T.NearestFilter
    this.info.needsUpdate = true
    this.fboMaterial.uniforms.uInfo.value = this.info


    this.fboMesh = new T.Mesh(geometry, this.fboMaterial)
    this.fboScene.add(this.fboMesh)

    this.renderer.setRenderTarget(this.fbo)
    this.renderer.render(this.fboScene, this.fboCamera)
    this.renderer.setRenderTarget(this.fbo1)
    this.renderer.render(this.fboScene, this.fboCamera)


  }


    createObject() { 
        this.count = this.size * this.size;
    
    this.material = new T.ShaderMaterial({
      uniforms: {
        uPositions: { value: null },
        time: {value: 0},
      },
      fragmentShader: fragment,
      vertexShader: vertex,
      transparent: true
    });

    let geometry = new T.BufferGeometry()
    let positions = new Float32Array(this.count * 3)
    let uv = new Float32Array(this.count * 2)

    for (let i = 0; i < this.size; i++) {
      for (let j = 0; j < this.size; j++) {
        let index = (i + j * this.size);
        positions[index * 3 + 0] = Math.random()
        positions[index* 3 + 1] = Math.random()
        positions[index * 3 + 2] = Math.random()
        uv[index * 2 + 0] = i/this.size
        uv[index * 2 + 1] = j/this.size
      }
    }

    geometry.setAttribute('position', new T.BufferAttribute(positions, 3))
    geometry.setAttribute('uv', new T.BufferAttribute(uv, 2))
    
    this.material.uniforms.uPositions.value = this.fboTexture
      this.points = new T.Points(geometry, this.material);

      this.scene.add(this.points);
    }



    createLight() {
        this.light = new T.AmbientLight(new T.Vector3(1.,.5686,0.), 10)
        this.scene.add(this.light)
  }
  
  setElements(elements) {
    this.elements = elements
  }

  
  onMouseMove(e) {
        this.mouse.x = (e.clientX / this.device.width) * 2 - 1
      this.mouse.y = - (e.clientY / this.device.height) * 2 + 1
    }
    
  update() {
    const rect = this.elements?.hero.getBoundingClientRect();
    const rect2 = this.elements?.about.getBoundingClientRect()
    const rect3 = this.elements?.contact.getBoundingClientRect()

    const width3 = rect3.right - rect3.left;
		const left3 = rect3.left;
    const bottom3 = this.renderer.domElement.clientHeight - rect3.bottom;
    const height3 = rect3.bottom - rect3.top;

    if (rect3.top < window.innerHeight) {
      if (DetectionManager.isPhone()) {
        this.points?.position.set(0,-1,-4)
      } else {
        this.points?.position.set(3,-1,-4)
      }
      this.points?.rotation.set(1.25,0,0)

    this.renderer.setViewport(left3, bottom3,width3, height3);
    this.renderer.setScissor( left3, bottom3, width3, height3);
        
      this.fboAnimate()
      }

    if ( rect2.bottom < 0 || rect.top > this.renderer.domElement.clientHeight ||
      rect.right < 0 || rect.left > this.renderer.domElement.clientWidth) {
     return; 
    }
    
    this.camera.position.set(0, 0, 5)

    const elapsedTime = this.clock.getElapsedTime();
    this.fboMaterial.uniforms.time.value = elapsedTime
    this.material.uniforms.time.value = elapsedTime

    const width = rect.right - rect.left;
    const height = rect.bottom - rect.top;
		const left = rect.left;
    const bottom = this.renderer.domElement.clientHeight - rect.bottom;

    const bottom2 = this.renderer.domElement.clientHeight - rect2.bottom;
    const height2 = rect2.bottom - rect.top;

    if (DetectionManager.isPhone()) {
      this.points?.position.set(0,0,rect.top / 250)
    } else {
      this.points?.position.set(-rect.top / 250,0,rect.top / 250)
    }
    this.points?.rotation.set(0,rect.top / 600,0)

    this.renderer.setViewport(left, Math.max(0, bottom2),width, height);
    this.renderer.setScissor( left, bottom2, width, height2);
      
    this.fboAnimate()
   
  }
  
  fboAnimate() {
    this.fboMaterial.uniforms.uMouse.value = this.mouse
    this.fboMaterial.uniforms.uPositions.value = this.fbo1.texture;
    this.material.uniforms.uPositions.value = this.fbo.texture;

    this.renderer.setRenderTarget(this.fbo)
      this.renderer.render(this.fboScene, this.fboCamera)
    this.renderer.setRenderTarget(null)
    this.renderer.render(this.scene, this.camera);

    //swap rendered
    let temp = this.fbo
    this.fbo = this.fbo1

    this.fbo1 = temp
  }
    
}