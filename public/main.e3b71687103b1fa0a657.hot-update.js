/*! For license information please see main.e3b71687103b1fa0a657.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatehursun_unfazed("main",{"./app/components/canvas/home/particle.js":(e,t,i)=>{i.r(t),i.d(t,{default:()=>l});var s=i("./node_modules/three/build/three.module.js"),r=i("./app/shaders/particle/vertex.glsl"),o=i("./app/shaders/particle/fragment.glsl"),a=i("./app/shaders/particle/simVertex.glsl"),h=i("./app/shaders/particle/simFragment.glsl"),n=i("./app/classes/Detection.js");class l{constructor({renderer:e,camera:t,elements:i,size:r}){this.elements=i,this.renderer=e,this.camera=t,this.size=n.default.isPhone()?256:512,this.device={width:window.innerWidth,height:window.innerHeight},this.mouse={x:0,y:0},this.scene=new s.Scene,this.clock=new s.Clock,this.setupFBO(),this.createObject()}getRenderTarget(){return new s.WebGLRenderTarget(this.device.width,this.device.height,{minFilter:s.NearestFilter,magFilter:s.NearestFilter,format:s.RGBFormat,type:s.HalfFloatType})}setupFBO(){this.fbo=this.getRenderTarget(),this.fbo1=this.getRenderTarget(),this.fboScene=new s.Scene,this.fboCamera=new s.OrthographicCamera(-1,1,1,-1,-1,1),this.fboCamera.position.set(0,0,1),this.fboCamera.lookAt(0,0,0);let e=new s.PlaneGeometry(2,2);this.data=new Float32Array(this.size*this.size*4);for(let e=0;e<this.size;e++)for(let t=0;t<this.size;t++){let i=4*(e+t*this.size),s=Math.random()*Math.PI*2,r=.5+.5*Math.random();this.data[i+0]=r*Math.cos(s),this.data[i+1]=r*Math.sin(s),this.data[i+2]=1,this.data[i+3]=1}this.fboTexture=new s.DataTexture(this.data,this.size,this.size,s.RGBAFormat,s.FloatType),this.fboTexture.magFilter=s.NearestFilter,this.fboTexture.minFilter=s.NearestFilter,this.fboTexture.needsUpdate=!0,this.fboMaterial=new s.ShaderMaterial({uniforms:{time:{value:0},uPositions:{value:this.fboTexture},uInfo:{value:null},uMouse:{value:new s.Vector2(0,0)}},vertexShader:a.default,fragmentShader:h.default}),this.infoArray=new Float32Array(this.size*this.size*4);for(let e=0;e<this.size;e++)for(let t=0;t<this.size;t++){let i=4*(e+t*this.size);this.infoArray[i+0]=.5+Math.random(),this.infoArray[i+1]=.5+Math.random(),this.infoArray[i+2]=.5+Math.random(),this.infoArray[i+3]=1}this.info=new s.DataTexture(this.infoArray,this.size,this.size,s.RGBAFormat,s.FloatType),this.info.magFilter=s.NearestFilter,this.info.minFilter=s.NearestFilter,this.info.needsUpdate=!0,this.fboMaterial.uniforms.uInfo.value=this.info,this.fboMesh=new s.Mesh(e,this.fboMaterial),this.fboScene.add(this.fboMesh),this.renderer.setRenderTarget(this.fbo),this.renderer.render(this.fboScene,this.fboCamera),this.renderer.setRenderTarget(this.fbo1),this.renderer.render(this.fboScene,this.fboCamera)}createObject(){this.count=this.size*this.size,this.material=new s.ShaderMaterial({uniforms:{uPositions:{value:null},time:{value:0}},fragmentShader:o.default,vertexShader:r.default,transparent:!0});let e=new s.BufferGeometry,t=new Float32Array(3*this.count),i=new Float32Array(2*this.count);for(let e=0;e<this.size;e++)for(let s=0;s<this.size;s++){let r=e+s*this.size;t[3*r+0]=Math.random(),t[3*r+1]=Math.random(),t[3*r+2]=Math.random(),i[2*r+0]=e/this.size,i[2*r+1]=s/this.size}e.setAttribute("position",new s.BufferAttribute(t,3)),e.setAttribute("uv",new s.BufferAttribute(i,2)),this.material.uniforms.uPositions.value=this.fboTexture,this.points=new s.Points(e,this.material),this.scene.add(this.points)}createLight(){this.light=new s.AmbientLight(new s.Vector3(1,.5686,0),10),this.scene.add(this.light)}setElements(e){this.elements=e}onMouseMove(e){this.mouse.x=e.clientX/this.device.width*2-1,this.mouse.y=-e.clientY/this.device.height*2+1}update(){const e=this.elements?.hero.getBoundingClientRect(),t=this.elements?.about.getBoundingClientRect(),i=this.elements?.contact.getBoundingClientRect(),s=i.right-i.left,r=i.left,o=this.renderer.domElement.clientHeight-i.bottom,a=i.bottom-i.top;if(i.top<window.innerHeight&&(n.default.isPhone()?this.points?.position.set(0,-1,-4):this.points?.position.set(3,-1,-4),this.points?.rotation.set(1.25,0,0),this.renderer.setViewport(r,o,s,a),this.renderer.setScissor(r,o,s,a),this.fboAnimate()),t.bottom<0||e.top>this.renderer.domElement.clientHeight||e.right<0||e.left>this.renderer.domElement.clientWidth)return;this.camera.position.set(0,0,5);const h=this.clock.getElapsedTime();this.fboMaterial.uniforms.time.value=h,this.material.uniforms.time.value=h;const l=e.right-e.left,d=e.bottom-e.top,f=e.left,m=(this.renderer.domElement.clientHeight,e.bottom,this.renderer.domElement.clientHeight-t.bottom),u=t.bottom-e.top;n.default.isPhone()?this.points?.position.set(0,0,e.top/250):this.points?.position.set(-e.top/250,0,e.top/250),this.points?.rotation.set(0,e.top/600,0),this.renderer.setViewport(f,Math.max(0,m),l,d),this.renderer.setScissor(f,m,l,u),this.fboAnimate()}fboAnimate(){this.fboMaterial.uniforms.uMouse.value=this.mouse,this.fboMaterial.uniforms.uPositions.value=this.fbo1.texture,this.material.uniforms.uPositions.value=this.fbo.texture,this.renderer.setRenderTarget(this.fbo),this.renderer.render(this.fboScene,this.fboCamera),this.renderer.setRenderTarget(null),this.renderer.render(this.scene,this.camera);let e=this.fbo;this.fbo=this.fbo1,this.fbo1=e}}}},(function(e){e.h=()=>"76ca003c35fbd6bd2833"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0JBQWdCLE1BQzlCM0QsS0FBS0osU0FBU2dFLE9BQU81RCxLQUFLWSxNQUFPWixLQUFLSCxRQUd0QyxJQUFJNkcsRUFBTzFHLEtBQUtzQixJQUNoQnRCLEtBQUtzQixJQUFNdEIsS0FBS3VCLEtBRWhCdkIsS0FBS3VCLEtBQU9tRixDQUNkLGtCQ3hQRkMsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2h1cnN1bi11bmZhemVkLy4vYXBwL2NvbXBvbmVudHMvY2FudmFzL2hvbWUvcGFydGljbGUuanMiLCJ3ZWJwYWNrOi8vaHVyc3VuLXVuZmF6ZWQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFQgZnJvbSAndGhyZWUnXHJcblxyXG5pbXBvcnQgdmVydGV4IGZyb20gJy4uLy4uLy4uL3NoYWRlcnMvcGFydGljbGUvdmVydGV4Lmdsc2wnXHJcbmltcG9ydCBmcmFnbWVudCBmcm9tICcuLi8uLi8uLi9zaGFkZXJzL3BhcnRpY2xlL2ZyYWdtZW50Lmdsc2wnXHJcbmltcG9ydCBzaW1WZXJ0ZXggZnJvbSAnLi4vLi4vLi4vc2hhZGVycy9wYXJ0aWNsZS9zaW1WZXJ0ZXguZ2xzbCdcclxuaW1wb3J0IHNpbUZyYWdtZW50IGZyb20gJy4uLy4uLy4uL3NoYWRlcnMvcGFydGljbGUvc2ltRnJhZ21lbnQuZ2xzbCdcclxuXHJcbmltcG9ydCBEZXRlY3Rpb25NYW5hZ2VyIGZyb20gJy4uLy4uLy4uL2NsYXNzZXMvRGV0ZWN0aW9uLmpzJ1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcnRpY2xlIHtcclxuICBjb25zdHJ1Y3Rvcih7IHJlbmRlcmVyLCBjYW1lcmEsIGVsZW1lbnRzLCBzaXplIH0pIHtcclxuICAgIHRoaXMuZWxlbWVudHMgPSBlbGVtZW50c1xyXG4gICAgdGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyXHJcblxyXG4gICAgdGhpcy5jYW1lcmEgPSBjYW1lcmFcclxuXHJcbiAgICB0aGlzLnNpemUgPSBEZXRlY3Rpb25NYW5hZ2VyLmlzUGhvbmUoKSA/IDI1NiA6IDUxMlxyXG4gICAgXHJcbiAgICB0aGlzLmRldmljZSA9IHtcclxuICAgICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxyXG4gICAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCBcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm1vdXNlID0ge1xyXG4gICAgICB4OiAwLFxyXG4gICAgICB5OiAwXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHRoaXMuc2NlbmUgPSBuZXcgVC5TY2VuZSgpXHJcbiAgICB0aGlzLmNsb2NrID0gbmV3IFQuQ2xvY2soKTtcclxuXHJcbiAgICB0aGlzLnNldHVwRkJPKClcclxuICAgICAgICB0aGlzLmNyZWF0ZU9iamVjdCgpXHJcbiAgfVxyXG5cclxuICBnZXRSZW5kZXJUYXJnZXQoKSB7XHJcbiAgICBjb25zdCByZW5kZXJUYXJnZXQgPSBuZXcgVC5XZWJHTFJlbmRlclRhcmdldCh0aGlzLmRldmljZS53aWR0aCwgdGhpcy5kZXZpY2UuaGVpZ2h0LCB7XHJcbiAgICAgIG1pbkZpbHRlcjogVC5OZWFyZXN0RmlsdGVyLFxyXG4gICAgICBtYWdGaWx0ZXI6IFQuTmVhcmVzdEZpbHRlcixcclxuICAgICAgZm9ybWF0OiBULlJHQkZvcm1hdCxcclxuICAgICAgdHlwZTogVC5IYWxmRmxvYXRUeXBlLFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHJlbmRlclRhcmdldFxyXG59XHJcblxyXG4gIFxyXG4gIHNldHVwRkJPKCkge1xyXG4gICAgdGhpcy5mYm8gPSB0aGlzLmdldFJlbmRlclRhcmdldCgpXHJcbiAgICB0aGlzLmZibzEgPSB0aGlzLmdldFJlbmRlclRhcmdldCgpXHJcblxyXG5cclxuICAgIHRoaXMuZmJvU2NlbmUgPSBuZXcgVC5TY2VuZSgpXHJcbiAgICB0aGlzLmZib0NhbWVyYSA9IG5ldyBULk9ydGhvZ3JhcGhpY0NhbWVyYSgtMSwgMSwgMSwtMSwgLTEsIDEpO1xyXG5cclxuICAgIHRoaXMuZmJvQ2FtZXJhLnBvc2l0aW9uLnNldCgwLCAwLCAxKVxyXG4gICAgdGhpcy5mYm9DYW1lcmEubG9va0F0KDAsIDAsMClcclxuXHJcbiAgICBsZXQgZ2VvbWV0cnkgPSBuZXcgVC5QbGFuZUdlb21ldHJ5KDIsIDIpXHJcblxyXG4gICAgdGhpcy5kYXRhID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLnNpemUgKiB0aGlzLnNpemUgKiA0KTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2l6ZTsgaSsrKSB7XHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5zaXplOyBqKyspIHtcclxuICAgICAgICBsZXQgaW5kZXggPSAoaSArIGogKiB0aGlzLnNpemUpICogNDtcclxuICAgICAgICBsZXQgdGhldGEgPSBNYXRoLnJhbmRvbSgpICogTWF0aC5QSSAqIDJcclxuICAgICAgICBsZXQgciA9IDAuNSArIDAuNSAqIE1hdGgucmFuZG9tKClcclxuICAgICAgICB0aGlzLmRhdGFbaW5kZXggKyAwXSA9IHIqTWF0aC5jb3ModGhldGEpXHJcbiAgICAgICAgdGhpcy5kYXRhW2luZGV4ICsgMV0gPSByKk1hdGguc2luKHRoZXRhKVxyXG4gICAgICAgIHRoaXMuZGF0YVtpbmRleCArIDJdID0gMVxyXG4gICAgICAgIHRoaXMuZGF0YVtpbmRleCArIDNdID0gMVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5mYm9UZXh0dXJlID0gbmV3IFQuRGF0YVRleHR1cmUodGhpcy5kYXRhLCB0aGlzLnNpemUsIHRoaXMuc2l6ZSwgVC5SR0JBRm9ybWF0LCBULkZsb2F0VHlwZSlcclxuICAgIHRoaXMuZmJvVGV4dHVyZS5tYWdGaWx0ZXIgPSBULk5lYXJlc3RGaWx0ZXJcclxuICAgIHRoaXMuZmJvVGV4dHVyZS5taW5GaWx0ZXIgPSBULk5lYXJlc3RGaWx0ZXJcclxuICAgIHRoaXMuZmJvVGV4dHVyZS5uZWVkc1VwZGF0ZSA9IHRydWVcclxuXHJcbiAgICB0aGlzLmZib01hdGVyaWFsID0gbmV3IFQuU2hhZGVyTWF0ZXJpYWwoe1xyXG4gICAgICB1bmlmb3Jtczoge1xyXG4gICAgICAgIHRpbWU6IHsgdmFsdWU6IDAgfSxcclxuICAgICAgICB1UG9zaXRpb25zOiB7IHZhbHVlOiB0aGlzLmZib1RleHR1cmUgfSxcclxuICAgICAgICB1SW5mbzogeyB2YWx1ZTogbnVsbCB9LFxyXG4gICAgICAgIHVNb3VzZToge3ZhbHVlOiBuZXcgVC5WZWN0b3IyKDAsMCl9XHJcbiAgICAgIH0sXHJcbiAgICAgIHZlcnRleFNoYWRlcjogc2ltVmVydGV4LFxyXG4gICAgICBmcmFnbWVudFNoYWRlcjogc2ltRnJhZ21lbnRcclxuICAgIH0pXHJcblxyXG4gICAgdGhpcy5pbmZvQXJyYXkgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMuc2l6ZSAqIHRoaXMuc2l6ZSAqIDQpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zaXplOyBpKyspIHtcclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLnNpemU7IGorKykge1xyXG4gICAgICAgIGxldCBpbmRleCA9IChpICsgaiAqIHRoaXMuc2l6ZSkgKiA0O1xyXG4gICAgICAgIHRoaXMuaW5mb0FycmF5W2luZGV4ICsgMF0gPSAwLjUgKyBNYXRoLnJhbmRvbSgpXHJcbiAgICAgICAgdGhpcy5pbmZvQXJyYXlbaW5kZXggKyAxXSA9IDAuNSArIE1hdGgucmFuZG9tKClcclxuICAgICAgICB0aGlzLmluZm9BcnJheVtpbmRleCArIDJdID0gMC41ICsgTWF0aC5yYW5kb20oKVxyXG4gICAgICAgIHRoaXMuaW5mb0FycmF5W2luZGV4ICsgM10gPSAxXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmluZm8gPSBuZXcgVC5EYXRhVGV4dHVyZSh0aGlzLmluZm9BcnJheSwgdGhpcy5zaXplLCB0aGlzLnNpemUsIFQuUkdCQUZvcm1hdCwgVC5GbG9hdFR5cGUpXHJcbiAgICB0aGlzLmluZm8ubWFnRmlsdGVyID0gVC5OZWFyZXN0RmlsdGVyXHJcbiAgICB0aGlzLmluZm8ubWluRmlsdGVyID0gVC5OZWFyZXN0RmlsdGVyXHJcbiAgICB0aGlzLmluZm8ubmVlZHNVcGRhdGUgPSB0cnVlXHJcbiAgICB0aGlzLmZib01hdGVyaWFsLnVuaWZvcm1zLnVJbmZvLnZhbHVlID0gdGhpcy5pbmZvXHJcblxyXG5cclxuICAgIHRoaXMuZmJvTWVzaCA9IG5ldyBULk1lc2goZ2VvbWV0cnksIHRoaXMuZmJvTWF0ZXJpYWwpXHJcbiAgICB0aGlzLmZib1NjZW5lLmFkZCh0aGlzLmZib01lc2gpXHJcblxyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRSZW5kZXJUYXJnZXQodGhpcy5mYm8pXHJcbiAgICB0aGlzLnJlbmRlcmVyLnJlbmRlcih0aGlzLmZib1NjZW5lLCB0aGlzLmZib0NhbWVyYSlcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0UmVuZGVyVGFyZ2V0KHRoaXMuZmJvMSlcclxuICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKHRoaXMuZmJvU2NlbmUsIHRoaXMuZmJvQ2FtZXJhKVxyXG5cclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgICBjcmVhdGVPYmplY3QoKSB7IFxyXG4gICAgICAgIHRoaXMuY291bnQgPSB0aGlzLnNpemUgKiB0aGlzLnNpemU7XHJcbiAgICBcclxuICAgIHRoaXMubWF0ZXJpYWwgPSBuZXcgVC5TaGFkZXJNYXRlcmlhbCh7XHJcbiAgICAgIHVuaWZvcm1zOiB7XHJcbiAgICAgICAgdVBvc2l0aW9uczogeyB2YWx1ZTogbnVsbCB9LFxyXG4gICAgICAgIHRpbWU6IHt2YWx1ZTogMH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIGZyYWdtZW50U2hhZGVyOiBmcmFnbWVudCxcclxuICAgICAgdmVydGV4U2hhZGVyOiB2ZXJ0ZXgsXHJcbiAgICAgIHRyYW5zcGFyZW50OiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBsZXQgZ2VvbWV0cnkgPSBuZXcgVC5CdWZmZXJHZW9tZXRyeSgpXHJcbiAgICBsZXQgcG9zaXRpb25zID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLmNvdW50ICogMylcclxuICAgIGxldCB1diA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5jb3VudCAqIDIpXHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNpemU7IGkrKykge1xyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuc2l6ZTsgaisrKSB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gKGkgKyBqICogdGhpcy5zaXplKTtcclxuICAgICAgICBwb3NpdGlvbnNbaW5kZXggKiAzICsgMF0gPSBNYXRoLnJhbmRvbSgpXHJcbiAgICAgICAgcG9zaXRpb25zW2luZGV4KiAzICsgMV0gPSBNYXRoLnJhbmRvbSgpXHJcbiAgICAgICAgcG9zaXRpb25zW2luZGV4ICogMyArIDJdID0gTWF0aC5yYW5kb20oKVxyXG4gICAgICAgIHV2W2luZGV4ICogMiArIDBdID0gaS90aGlzLnNpemVcclxuICAgICAgICB1dltpbmRleCAqIDIgKyAxXSA9IGovdGhpcy5zaXplXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZW9tZXRyeS5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IFQuQnVmZmVyQXR0cmlidXRlKHBvc2l0aW9ucywgMykpXHJcbiAgICBnZW9tZXRyeS5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFQuQnVmZmVyQXR0cmlidXRlKHV2LCAyKSlcclxuICAgIFxyXG4gICAgdGhpcy5tYXRlcmlhbC51bmlmb3Jtcy51UG9zaXRpb25zLnZhbHVlID0gdGhpcy5mYm9UZXh0dXJlXHJcbiAgICAgIHRoaXMucG9pbnRzID0gbmV3IFQuUG9pbnRzKGdlb21ldHJ5LCB0aGlzLm1hdGVyaWFsKTtcclxuXHJcbiAgICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMucG9pbnRzKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIGNyZWF0ZUxpZ2h0KCkge1xyXG4gICAgICAgIHRoaXMubGlnaHQgPSBuZXcgVC5BbWJpZW50TGlnaHQobmV3IFQuVmVjdG9yMygxLiwuNTY4NiwwLiksIDEwKVxyXG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMubGlnaHQpXHJcbiAgfVxyXG4gIFxyXG4gIHNldEVsZW1lbnRzKGVsZW1lbnRzKSB7XHJcbiAgICB0aGlzLmVsZW1lbnRzID0gZWxlbWVudHNcclxuICB9XHJcblxyXG4gIFxyXG4gIG9uTW91c2VNb3ZlKGUpIHtcclxuICAgICAgICB0aGlzLm1vdXNlLnggPSAoZS5jbGllbnRYIC8gdGhpcy5kZXZpY2Uud2lkdGgpICogMiAtIDFcclxuICAgICAgdGhpcy5tb3VzZS55ID0gLSAoZS5jbGllbnRZIC8gdGhpcy5kZXZpY2UuaGVpZ2h0KSAqIDIgKyAxXHJcbiAgICB9XHJcbiAgICBcclxuICB1cGRhdGUoKSB7XHJcbiAgICBjb25zdCByZWN0ID0gdGhpcy5lbGVtZW50cz8uaGVyby5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGNvbnN0IHJlY3QyID0gdGhpcy5lbGVtZW50cz8uYWJvdXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcclxuICAgIGNvbnN0IHJlY3QzID0gdGhpcy5lbGVtZW50cz8uY29udGFjdC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxyXG5cclxuICAgIGNvbnN0IHdpZHRoMyA9IHJlY3QzLnJpZ2h0IC0gcmVjdDMubGVmdDtcclxuXHRcdGNvbnN0IGxlZnQzID0gcmVjdDMubGVmdDtcclxuICAgIGNvbnN0IGJvdHRvbTMgPSB0aGlzLnJlbmRlcmVyLmRvbUVsZW1lbnQuY2xpZW50SGVpZ2h0IC0gcmVjdDMuYm90dG9tO1xyXG4gICAgY29uc3QgaGVpZ2h0MyA9IHJlY3QzLmJvdHRvbSAtIHJlY3QzLnRvcDtcclxuXHJcbiAgICBpZiAocmVjdDMudG9wIDwgd2luZG93LmlubmVySGVpZ2h0KSB7XHJcbiAgICAgIGlmIChEZXRlY3Rpb25NYW5hZ2VyLmlzUGhvbmUoKSkge1xyXG4gICAgICAgIHRoaXMucG9pbnRzPy5wb3NpdGlvbi5zZXQoMCwtMSwtNClcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnBvaW50cz8ucG9zaXRpb24uc2V0KDMsLTEsLTQpXHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5wb2ludHM/LnJvdGF0aW9uLnNldCgxLjI1LDAsMClcclxuXHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldFZpZXdwb3J0KGxlZnQzLCBib3R0b20zLHdpZHRoMywgaGVpZ2h0Myk7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldFNjaXNzb3IoIGxlZnQzLCBib3R0b20zLCB3aWR0aDMsIGhlaWdodDMpO1xyXG4gICAgICAgIFxyXG4gICAgICB0aGlzLmZib0FuaW1hdGUoKVxyXG4gICAgICB9XHJcblxyXG4gICAgaWYgKCByZWN0Mi5ib3R0b20gPCAwIHx8IHJlY3QudG9wID4gdGhpcy5yZW5kZXJlci5kb21FbGVtZW50LmNsaWVudEhlaWdodCB8fFxyXG4gICAgICByZWN0LnJpZ2h0IDwgMCB8fCByZWN0LmxlZnQgPiB0aGlzLnJlbmRlcmVyLmRvbUVsZW1lbnQuY2xpZW50V2lkdGgpIHtcclxuICAgICByZXR1cm47IFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi5zZXQoMCwgMCwgNSlcclxuXHJcbiAgICBjb25zdCBlbGFwc2VkVGltZSA9IHRoaXMuY2xvY2suZ2V0RWxhcHNlZFRpbWUoKTtcclxuICAgIHRoaXMuZmJvTWF0ZXJpYWwudW5pZm9ybXMudGltZS52YWx1ZSA9IGVsYXBzZWRUaW1lXHJcbiAgICB0aGlzLm1hdGVyaWFsLnVuaWZvcm1zLnRpbWUudmFsdWUgPSBlbGFwc2VkVGltZVxyXG5cclxuICAgIGNvbnN0IHdpZHRoID0gcmVjdC5yaWdodCAtIHJlY3QubGVmdDtcclxuICAgIGNvbnN0IGhlaWdodCA9IHJlY3QuYm90dG9tIC0gcmVjdC50b3A7XHJcblx0XHRjb25zdCBsZWZ0ID0gcmVjdC5sZWZ0O1xyXG4gICAgY29uc3QgYm90dG9tID0gdGhpcy5yZW5kZXJlci5kb21FbGVtZW50LmNsaWVudEhlaWdodCAtIHJlY3QuYm90dG9tO1xyXG5cclxuICAgIGNvbnN0IGJvdHRvbTIgPSB0aGlzLnJlbmRlcmVyLmRvbUVsZW1lbnQuY2xpZW50SGVpZ2h0IC0gcmVjdDIuYm90dG9tO1xyXG4gICAgY29uc3QgaGVpZ2h0MiA9IHJlY3QyLmJvdHRvbSAtIHJlY3QudG9wO1xyXG5cclxuICAgIGlmIChEZXRlY3Rpb25NYW5hZ2VyLmlzUGhvbmUoKSkge1xyXG4gICAgICB0aGlzLnBvaW50cz8ucG9zaXRpb24uc2V0KDAsMCxyZWN0LnRvcCAvIDI1MClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucG9pbnRzPy5wb3NpdGlvbi5zZXQoLXJlY3QudG9wIC8gMjUwLDAscmVjdC50b3AgLyAyNTApXHJcbiAgICB9XHJcbiAgICB0aGlzLnBvaW50cz8ucm90YXRpb24uc2V0KDAscmVjdC50b3AgLyA2MDAsMClcclxuXHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldFZpZXdwb3J0KGxlZnQsIE1hdGgubWF4KDAsIGJvdHRvbTIpLHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTY2lzc29yKCBsZWZ0LCBib3R0b20yLCB3aWR0aCwgaGVpZ2h0Mik7XHJcbiAgICAgIFxyXG4gICAgdGhpcy5mYm9BbmltYXRlKClcclxuICAgXHJcbiAgfVxyXG4gIFxyXG4gIGZib0FuaW1hdGUoKSB7XHJcbiAgICB0aGlzLmZib01hdGVyaWFsLnVuaWZvcm1zLnVNb3VzZS52YWx1ZSA9IHRoaXMubW91c2VcclxuICAgIHRoaXMuZmJvTWF0ZXJpYWwudW5pZm9ybXMudVBvc2l0aW9ucy52YWx1ZSA9IHRoaXMuZmJvMS50ZXh0dXJlO1xyXG4gICAgdGhpcy5tYXRlcmlhbC51bmlmb3Jtcy51UG9zaXRpb25zLnZhbHVlID0gdGhpcy5mYm8udGV4dHVyZTtcclxuXHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldFJlbmRlclRhcmdldCh0aGlzLmZibylcclxuICAgICAgdGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcy5mYm9TY2VuZSwgdGhpcy5mYm9DYW1lcmEpXHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldFJlbmRlclRhcmdldChudWxsKVxyXG4gICAgdGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEpO1xyXG5cclxuICAgIC8vc3dhcCByZW5kZXJlZFxyXG4gICAgbGV0IHRlbXAgPSB0aGlzLmZib1xyXG4gICAgdGhpcy5mYm8gPSB0aGlzLmZibzFcclxuXHJcbiAgICB0aGlzLmZibzEgPSB0ZW1wXHJcbiAgfVxyXG4gICAgXHJcbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI3NmNhMDAzYzM1ZmJkNmJkMjgzM1wiKSJdLCJuYW1lcyI6WyJQYXJ0aWNsZSIsImNvbnN0cnVjdG9yIiwicmVuZGVyZXIiLCJjYW1lcmEiLCJlbGVtZW50cyIsInNpemUiLCJ0aGlzIiwiRGV0ZWN0aW9uTWFuYWdlciIsImlzUGhvbmUiLCJkZXZpY2UiLCJ3aWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsIm1vdXNlIiwieCIsInkiLCJzY2VuZSIsIlQiLCJjbG9jayIsInNldHVwRkJPIiwiY3JlYXRlT2JqZWN0IiwiZ2V0UmVuZGVyVGFyZ2V0IiwibWluRmlsdGVyIiwibWFnRmlsdGVyIiwiZm9ybWF0IiwidHlwZSIsImZibyIsImZibzEiLCJmYm9TY2VuZSIsImZib0NhbWVyYSIsInBvc2l0aW9uIiwic2V0IiwibG9va0F0IiwiZ2VvbWV0cnkiLCJkYXRhIiwiRmxvYXQzMkFycmF5IiwiaSIsImoiLCJpbmRleCIsInRoZXRhIiwiTWF0aCIsInJhbmRvbSIsIlBJIiwiciIsImNvcyIsInNpbiIsImZib1RleHR1cmUiLCJuZWVkc1VwZGF0ZSIsImZib01hdGVyaWFsIiwidW5pZm9ybXMiLCJ0aW1lIiwidmFsdWUiLCJ1UG9zaXRpb25zIiwidUluZm8iLCJ1TW91c2UiLCJ2ZXJ0ZXhTaGFkZXIiLCJzaW1WZXJ0ZXgiLCJmcmFnbWVudFNoYWRlciIsInNpbUZyYWdtZW50IiwiaW5mb0FycmF5IiwiaW5mbyIsImZib01lc2giLCJhZGQiLCJzZXRSZW5kZXJUYXJnZXQiLCJyZW5kZXIiLCJjb3VudCIsIm1hdGVyaWFsIiwiZnJhZ21lbnQiLCJ2ZXJ0ZXgiLCJ0cmFuc3BhcmVudCIsInBvc2l0aW9ucyIsInV2Iiwic2V0QXR0cmlidXRlIiwicG9pbnRzIiwiY3JlYXRlTGlnaHQiLCJsaWdodCIsInNldEVsZW1lbnRzIiwib25Nb3VzZU1vdmUiLCJlIiwiY2xpZW50WCIsImNsaWVudFkiLCJ1cGRhdGUiLCJyZWN0IiwiaGVybyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInJlY3QyIiwiYWJvdXQiLCJyZWN0MyIsImNvbnRhY3QiLCJ3aWR0aDMiLCJyaWdodCIsImxlZnQiLCJsZWZ0MyIsImJvdHRvbTMiLCJkb21FbGVtZW50IiwiY2xpZW50SGVpZ2h0IiwiYm90dG9tIiwiaGVpZ2h0MyIsInRvcCIsInJvdGF0aW9uIiwic2V0Vmlld3BvcnQiLCJzZXRTY2lzc29yIiwiZmJvQW5pbWF0ZSIsImNsaWVudFdpZHRoIiwiZWxhcHNlZFRpbWUiLCJnZXRFbGFwc2VkVGltZSIsImJvdHRvbTIiLCJoZWlnaHQyIiwibWF4IiwidGV4dHVyZSIsInRlbXAiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=