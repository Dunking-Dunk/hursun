/*! For license information please see main.bd38d5a623f9ab94518d.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatehursun_unfazed("main",{"./app/classes/Page.js":(t,e,i)=>{i.r(e),i.d(e,{default:()=>c});var s=i("./node_modules/lodash/lodash.js"),n=i("./node_modules/gsap/index.js"),a=i("./app/animations/hover.js"),o=i("./node_modules/prefix/index.js"),r=i("./app/animations/textReveal.js"),l=i("./app/animations/textOpacity.js"),h=i("./app/animations/textRotation.js"),m=i("./app/classes/Detection.js");class c{constructor({element:t,elements:e,id:i}){this.selector=t,this.selectorChildren={...e,animationCursor:"[data-animation='hover']",animationTextReveal:"[data-animation='textReveal']",animationTextOpacity:"[data-animation='textOpacity']",animationTextRotation:"[data-animation='textRotation']",stickyContainer:".sticky__parent"},this.id=i,this.scroll={current:0,target:0,limit:0,start:0},this.mouse={x:0,y:0},this.navigation=document.querySelector(".navigation__path"),this.start="M0 502S175 272 500 272s500 230 500 230V0H0Z",this.end="M0,1005S175,995,500,995s500,5,500,5V0H0Z",this.transformPrefix=o("transform")}create(){this.element=document.querySelector(this.selector),this.elements={},(0,s.each)(this.selectorChildren,((t,e)=>{t instanceof window.HTMLElement||t instanceof window.NodeList||Array.isArray(t)?this.elements[e]=t:(this.elements[e]=this.element.querySelectorAll(t),0===this.elements[e].length?this.elements[e]=null:1===this.elements[e].length&&(this.elements[e]=this.element.querySelector(t)))})),this.elements?.wrapper&&(this.scroll.limit=this.elements.wrapper.clientHeight-window.innerHeight),this.createAnimation()}createAnimation(){this.hoverAnimation=(0,s.map)(this.elements.animationCursor,(t=>new a.default({element:t}))),this.textRevealAnimation=(0,s.map)(this.elements.animationTextReveal,(t=>new r.default({element:t}))),this.textOpacityAnimation=(0,s.map)(this.elements.animationTextOpacity,(t=>new l.default({element:t}))),this.textRotationAnimation=(0,s.map)(this.elements.animationTextRotation,(t=>new h.default({element:t})))}show(){return new Promise((t=>{this.animationOut=n.default.timeline(),this.animationOut.to(this.navigation,{attr:{d:this.start},duration:1,ease:"power2.inOut"},"<").to(this.navigation,{attr:{d:"M0 2S175 1 500 1s500 1 500 1V0H0Z"},duration:.8,ease:"power4.out"},"-=0.5"),this.animationOut.fromTo(this.element,{autoAlpha:0},{autoAlpha:1,duration:.8,ease:"power4.ease"},"-=0.5"),this.animationOut.call((()=>{t()}))}))}hide(){return new Promise((t=>{this.destroy(),this.animationIn=n.default.timeline(),this.animationIn.to(this.element,{autoAlpha:0,duration:1}),this.animationIn.to(this.navigation,{attr:{d:this.start},duration:1,ease:"power2.inOut"},"<").to(this.navigation,{attr:{d:this.end},duration:.8,ease:"power4.easeIn"},"-=0.5"),this.animationIn.call((()=>{t()}))}))}onResize(){this.elements?.wrapper&&(this.scroll.limit=this.elements.wrapper.clientHeight-window.innerHeight)}onScroll(t){const{pixelY:e}=t;this.scroll.target+=e}onMouseMove(t){this.hoverAnimation.length>0&&(0,s.each)(this.hoverAnimation,(e=>e.onMouseMove(t))),this.mouse.x=t.clientX,this.mouse.y=t.clientY}onTouchStart(t){this.scroll.start=t.touches[0].clientY}onTouchMove(t){this.scroll.start>t.touches[0].clientY?this.scroll.target+=25:this.scroll.target-=25}update(){this.elements.stickyContainer&&(this.sticky=this.elements.stickyContainer.getBoundingClientRect(),this.offsetTop=this.elements.stickyContainer.offsetTop),this.scroll.target=n.default.utils.clamp(0,this.scroll.limit,this.scroll.target),this.scroll.current<.01&&(this.scroll.current=0),this.scroll.current=n.default.utils.interpolate(this.scroll.current,this.scroll.target,m.default.isPhone()?.1:.01),this.scroll.current>this.offsetTop&&this.scroll.current<this.offsetTop+this.sticky.width-window.innerWidth&&(this.elements.stickyContainer.style[this.transformPrefix]=`translate3d(-${this.scroll.current-this.offsetTop}px, ${this.scroll.current-this.offsetTop}px, 0px)`),this.elements?.wrapper&&(this.elements.wrapper.style[this.transformPrefix]=`translate3d(0px,-${this.scroll.current}px,0px)`)}removeEventListener(){}destroy(){this.removeEventListener()}}}},(function(t){t.h=()=>"eb081896e21b216d839c"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MEUsT0FBUzFFLEtBQUtGLFNBQVNTLGdCQUFnQm9FLHdCQUM1QzNFLEtBQUs0RSxVQUFZNUUsS0FBS0YsU0FBU1MsZ0JBQWdCcUUsV0FHbkQ1RSxLQUFLUSxPQUFPRSxPQUFTdUMsRUFBQUEsUUFBSzRCLE1BQU1DLE1BQU0sRUFBRzlFLEtBQUtRLE9BQU9HLE1BQU9YLEtBQUtRLE9BQU9FLFFBRXBFVixLQUFLUSxPQUFPQyxRQUFVLE1BQ3RCVCxLQUFLUSxPQUFPQyxRQUFVLEdBRzFCVCxLQUFLUSxPQUFPQyxRQUFVd0MsRUFBQUEsUUFBSzRCLE1BQU1FLFlBQVkvRSxLQUFLUSxPQUFPQyxRQUFTVCxLQUFLUSxPQUFPRSxPQUFRc0UsRUFBQUEsUUFBaUJDLFVBQVksR0FBSyxLQUVwSGpGLEtBQUtRLE9BQU9DLFFBQVVULEtBQUs0RSxXQUFhNUUsS0FBS1EsT0FBT0MsUUFBVVQsS0FBSzRFLFVBQVk1RSxLQUFLMEUsT0FBT1EsTUFBUXpELE9BQU8wRCxhQUMxR25GLEtBQUtGLFNBQVNTLGdCQUFnQjZFLE1BQzFCcEYsS0FBS29CLGlCQUNKLGdCQUFlcEIsS0FBS1EsT0FBT0MsUUFBVVQsS0FBSzRFLGdCQUFnQjVFLEtBQUtRLE9BQU9DLFFBQVVULEtBQUs0RSxxQkFHMUY1RSxLQUFLRixVQUFVa0MsVUFDZmhDLEtBQUtGLFNBQVNrQyxRQUFRb0QsTUFDbEJwRixLQUFLb0IsaUJBQ0osb0JBQW1CcEIsS0FBS1EsT0FBT0MsaUJBRTVDLENBRUE0RSxtQkFBQUEsR0FDQSxDQUVBekIsT0FBQUEsR0FDSTVELEtBQUtxRixxQkFDVCxrQkN4TkpDLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9odXJzdW4tdW5mYXplZC8uL2FwcC9jbGFzc2VzL1BhZ2UuanMiLCJ3ZWJwYWNrOi8vaHVyc3VuLXVuZmF6ZWQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGVhY2gsIG1hcCB9IGZyb20gXCJsb2Rhc2hcIlxyXG5pbXBvcnQgR1NBUCBmcm9tICdnc2FwJ1xyXG5pbXBvcnQgSG92ZXIgZnJvbSBcIi4uL2FuaW1hdGlvbnMvaG92ZXIuanNcIlxyXG5pbXBvcnQgUHJlZml4IGZyb20gJ3ByZWZpeCdcclxuaW1wb3J0IFRleHRSZXZlYWwgZnJvbSBcIi4uL2FuaW1hdGlvbnMvdGV4dFJldmVhbC5qc1wiXHJcbmltcG9ydCBUZXh0T3BhY2l0eSBmcm9tIFwiLi4vYW5pbWF0aW9ucy90ZXh0T3BhY2l0eS5qc1wiXHJcbmltcG9ydCBUZXh0Um90YXRpb24gZnJvbSBcIi4uL2FuaW1hdGlvbnMvdGV4dFJvdGF0aW9uLmpzXCJcclxuaW1wb3J0IERldGVjdGlvbk1hbmFnZXIgZnJvbSBcIi4vRGV0ZWN0aW9uLmpzXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2Uge1xyXG4gICAgY29uc3RydWN0b3IoeyBlbGVtZW50LCBlbGVtZW50cywgaWQgfSkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0b3IgPSBlbGVtZW50XHJcbiAgICAgICAgdGhpcy5zZWxlY3RvckNoaWxkcmVuID0ge1xyXG4gICAgICAgICAgICAuLi5lbGVtZW50cyxcclxuICAgICAgICAgICAgYW5pbWF0aW9uQ3Vyc29yOiBcIltkYXRhLWFuaW1hdGlvbj0naG92ZXInXVwiLFxyXG4gICAgICAgICAgICBhbmltYXRpb25UZXh0UmV2ZWFsOiBcIltkYXRhLWFuaW1hdGlvbj0ndGV4dFJldmVhbCddXCIsXHJcbiAgICAgICAgICAgIGFuaW1hdGlvblRleHRPcGFjaXR5OiBcIltkYXRhLWFuaW1hdGlvbj0ndGV4dE9wYWNpdHknXVwiLFxyXG4gICAgICAgICAgICBhbmltYXRpb25UZXh0Um90YXRpb246IFwiW2RhdGEtYW5pbWF0aW9uPSd0ZXh0Um90YXRpb24nXVwiLFxyXG4gICAgICAgICAgICBzdGlja3lDb250YWluZXI6ICcuc3RpY2t5X19wYXJlbnQnLFxyXG4gICAgICAgICAgICAvLyBzdGlja3lXcmFwOiBcIi5zdGlja3lcIixcclxuICAgICAgICAgICAgLy8gc3RpY2t5SG9yaXpvbnRhbDogXCIuc3RpY2t5X19ob3Jpem9udGFsX19zY3JvbGxcIlxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmlkID0gaWRcclxuXHJcbiAgICAgICAgdGhpcy5zY3JvbGwgPSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnQ6IDAsXHJcbiAgICAgICAgICAgIHRhcmdldDogMCAsXHJcbiAgICAgICAgICAgIGxpbWl0OiAwLFxyXG4gICAgICAgICAgICBzdGFydDogMFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5tb3VzZSA9IHtcclxuICAgICAgICAgICAgeDogMCxcclxuICAgICAgICAgICAgeTogMFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5uYXZpZ2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmlnYXRpb25fX3BhdGgnKVxyXG4gICAgICAgIHRoaXMuc3RhcnQgPSBcIk0wIDUwMlMxNzUgMjcyIDUwMCAyNzJzNTAwIDIzMCA1MDAgMjMwVjBIMFpcIlxyXG4gICAgICAgIHRoaXMuZW5kID0gXCJNMCwxMDA1UzE3NSw5OTUsNTAwLDk5NXM1MDAsNSw1MDAsNVYwSDBaXCJcclxuXHJcbiAgICAgICAgdGhpcy50cmFuc2Zvcm1QcmVmaXggPSBQcmVmaXgoJ3RyYW5zZm9ybScpXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZSgpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuc2VsZWN0b3IpXHJcbiAgICAgICAgdGhpcy5lbGVtZW50cyA9IHt9XHJcblxyXG4gICAgICAgIGVhY2godGhpcy5zZWxlY3RvckNoaWxkcmVuLCAoc2VsZWN0b3IsIGtleSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoc2VsZWN0b3IgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTEVsZW1lbnQgfHwgc2VsZWN0b3IgaW5zdGFuY2VvZiB3aW5kb3cuTm9kZUxpc3QgfHwgQXJyYXkuaXNBcnJheShzZWxlY3RvcikpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IHNlbGVjdG9yXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcilcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmVsZW1lbnRzW2tleV0ubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gbnVsbFxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnRzW2tleV0ubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBpZiAodGhpcy5lbGVtZW50cz8ud3JhcHBlcikge1xyXG4gICAgICAgICAgICB0aGlzLnNjcm9sbC5saW1pdCA9ICh0aGlzLmVsZW1lbnRzLndyYXBwZXIuY2xpZW50SGVpZ2h0IC0gd2luZG93LmlubmVySGVpZ2h0KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jcmVhdGVBbmltYXRpb24oKVxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUFuaW1hdGlvbigpIHtcclxuICAgICAgICB0aGlzLmhvdmVyQW5pbWF0aW9uID0gbWFwKHRoaXMuZWxlbWVudHMuYW5pbWF0aW9uQ3Vyc29yLCAoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEhvdmVyKHsgZWxlbWVudCB9KVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHRoaXMudGV4dFJldmVhbEFuaW1hdGlvbiA9IG1hcCh0aGlzLmVsZW1lbnRzLmFuaW1hdGlvblRleHRSZXZlYWwsIChlbGVtZW50KSA9PiB7IFxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFRleHRSZXZlYWwoe2VsZW1lbnR9KVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHRoaXMudGV4dE9wYWNpdHlBbmltYXRpb24gPSBtYXAodGhpcy5lbGVtZW50cy5hbmltYXRpb25UZXh0T3BhY2l0eSwgKGVsZW1lbnQpID0+IHsgXHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgVGV4dE9wYWNpdHkoe2VsZW1lbnR9KVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHRoaXMudGV4dFJvdGF0aW9uQW5pbWF0aW9uID0gbWFwKHRoaXMuZWxlbWVudHMuYW5pbWF0aW9uVGV4dFJvdGF0aW9uLCAoZWxlbWVudCkgPT4geyBcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBUZXh0Um90YXRpb24oe2VsZW1lbnR9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgc2hvdygpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25PdXQgPSBHU0FQLnRpbWVsaW5lKClcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uT3V0LnRvKHRoaXMubmF2aWdhdGlvbiwge1xyXG4gICAgICAgICAgICAgICAgYXR0cjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGQ6IHRoaXMuc3RhcnRcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMSxcclxuICAgICAgICAgICAgICAgIGVhc2U6IFwicG93ZXIyLmluT3V0XCIsXHJcbiAgICAgICAgICAgIH0sICc8JykudG8odGhpcy5uYXZpZ2F0aW9uLCB7XHJcbiAgICAgICAgICAgICAgICBhdHRyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZDogJ00wIDJTMTc1IDEgNTAwIDFzNTAwIDEgNTAwIDFWMEgwWidcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMC44LFxyXG4gICAgICAgICAgICAgICAgZWFzZTogJ3Bvd2VyNC5vdXQnLFxyXG4gICAgICAgICAgICB9LCAnLT0wLjUnKVxyXG5cclxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25PdXQuZnJvbVRvKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9BbHBoYTogMCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b0FscGhhOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAwLjgsXHJcbiAgICAgICAgICAgICAgICAgICAgZWFzZTogXCJwb3dlcjQuZWFzZVwiXHJcbiAgICAgICAgICAgICAgICB9LCAnLT0wLjUnXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbk91dC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgaGlkZSgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uSW4gPSBHU0FQLnRpbWVsaW5lKClcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uSW4udG8odGhpcy5lbGVtZW50LCB7XHJcbiAgICAgICAgICAgICAgICBhdXRvQWxwaGE6IDAsXHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMSxcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uSW4udG8odGhpcy5uYXZpZ2F0aW9uLCB7XHJcbiAgICAgICAgICAgICAgICBhdHRyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZDogdGhpcy5zdGFydFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxLFxyXG4gICAgICAgICAgICAgICAgZWFzZTogXCJwb3dlcjIuaW5PdXRcIixcclxuICAgICAgICAgICAgfSwgJzwnKS50byh0aGlzLm5hdmlnYXRpb24sIHtcclxuICAgICAgICAgICAgICAgIGF0dHI6IHtcclxuICAgICAgICAgICAgICAgICAgICBkOiB0aGlzLmVuZFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAwLjgsXHJcbiAgICAgICAgICAgICAgICBlYXNlOiBcInBvd2VyNC5lYXNlSW5cIixcclxuICAgICAgICAgICAgfSwgJy09MC41JylcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uSW4uY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIG9uUmVzaXplKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnRzPy53cmFwcGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsLmxpbWl0ID0gdGhpcy5lbGVtZW50cy53cmFwcGVyLmNsaWVudEhlaWdodCAtIHdpbmRvdy5pbm5lckhlaWdodFxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgb25TY3JvbGwoZSkge1xyXG4gICAgICAgIGNvbnN0IHsgcGl4ZWxZIH0gPSBlXHJcbiAgICAgICAgdGhpcy5zY3JvbGwudGFyZ2V0ICs9IHBpeGVsWVxyXG4gICAgfVxyXG5cclxuICAgICBvbk1vdXNlTW92ZShlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaG92ZXJBbmltYXRpb24ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBlYWNoKHRoaXMuaG92ZXJBbmltYXRpb24sIChvKSA9PiBvLm9uTW91c2VNb3ZlKGUpKVxyXG4gICAgICAgICB9XHJcbiAgICAgICAgIHRoaXMubW91c2UueCA9IGUuY2xpZW50WCBcclxuICAgICAgICAgdGhpcy5tb3VzZS55ID0gZS5jbGllbnRZIFxyXG4gICAgfVxyXG5cclxuICAgIG9uVG91Y2hTdGFydChlKSB7XHJcbiAgICAgICAgdGhpcy5zY3JvbGwuc3RhcnQgPSBlLnRvdWNoZXNbMF0uY2xpZW50WVxyXG4gICAgfVxyXG5cclxuICAgIG9uVG91Y2hNb3ZlKGUpIHtcclxuICAgICAgICBpZiAodGhpcy5zY3JvbGwuc3RhcnQgPiBlLnRvdWNoZXNbMF0uY2xpZW50WSkge1xyXG4gICAgICAgICAgICB0aGlzLnNjcm9sbC50YXJnZXQgKz0gMjVcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNjcm9sbC50YXJnZXQgLT0gMjVcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnRzLnN0aWNreUNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICB0aGlzLnN0aWNreSA9IHRoaXMuZWxlbWVudHMuc3RpY2t5Q29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXHJcbiAgICAgICAgICAgIHRoaXMub2Zmc2V0VG9wID0gdGhpcy5lbGVtZW50cy5zdGlja3lDb250YWluZXIub2Zmc2V0VG9wO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zY3JvbGwudGFyZ2V0ID0gR1NBUC51dGlscy5jbGFtcCgwLCB0aGlzLnNjcm9sbC5saW1pdCwgdGhpcy5zY3JvbGwudGFyZ2V0KVxyXG5cclxuICAgICAgICBpZiAodGhpcy5zY3JvbGwuY3VycmVudCA8IDAuMDEpIHtcclxuICAgICAgICAgICAgdGhpcy5zY3JvbGwuY3VycmVudCA9IDBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSBHU0FQLnV0aWxzLmludGVycG9sYXRlKHRoaXMuc2Nyb2xsLmN1cnJlbnQsIHRoaXMuc2Nyb2xsLnRhcmdldCwgRGV0ZWN0aW9uTWFuYWdlci5pc1Bob25lKCkgPyAwLjE6IDAuMDEpXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHRoaXMuc2Nyb2xsLmN1cnJlbnQgPiB0aGlzLm9mZnNldFRvcCAmJiB0aGlzLnNjcm9sbC5jdXJyZW50IDwgdGhpcy5vZmZzZXRUb3AgKyB0aGlzLnN0aWNreS53aWR0aCAtIHdpbmRvdy5pbm5lcldpZHRoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudHMuc3RpY2t5Q29udGFpbmVyLnN0eWxlW1xyXG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm1QcmVmaXhcclxuICAgICAgICAgICAgXSA9IGB0cmFuc2xhdGUzZCgtJHt0aGlzLnNjcm9sbC5jdXJyZW50IC0gdGhpcy5vZmZzZXRUb3B9cHgsICR7dGhpcy5zY3JvbGwuY3VycmVudCAtIHRoaXMub2Zmc2V0VG9wfXB4LCAwcHgpYFxyXG4gICAgICAgIH0gXHJcblxyXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnRzPy53cmFwcGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudHMud3JhcHBlci5zdHlsZVtcclxuICAgICAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtUHJlZml4XHJcbiAgICAgICAgICAgIF0gPSBgdHJhbnNsYXRlM2QoMHB4LC0ke3RoaXMuc2Nyb2xsLmN1cnJlbnR9cHgsMHB4KWBcclxuICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcigpIHtcclxuICAgIH1cclxuXHJcbiAgICBkZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcigpXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZWIwODE4OTZlMjFiMjE2ZDgzOWNcIikiXSwibmFtZXMiOlsiUGFnZSIsImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImVsZW1lbnRzIiwiaWQiLCJ0aGlzIiwic2VsZWN0b3IiLCJzZWxlY3RvckNoaWxkcmVuIiwiYW5pbWF0aW9uQ3Vyc29yIiwiYW5pbWF0aW9uVGV4dFJldmVhbCIsImFuaW1hdGlvblRleHRPcGFjaXR5IiwiYW5pbWF0aW9uVGV4dFJvdGF0aW9uIiwic3RpY2t5Q29udGFpbmVyIiwic2Nyb2xsIiwiY3VycmVudCIsInRhcmdldCIsImxpbWl0Iiwic3RhcnQiLCJtb3VzZSIsIngiLCJ5IiwibmF2aWdhdGlvbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImVuZCIsInRyYW5zZm9ybVByZWZpeCIsIlByZWZpeCIsImNyZWF0ZSIsImVhY2giLCJrZXkiLCJ3aW5kb3ciLCJIVE1MRWxlbWVudCIsIk5vZGVMaXN0IiwiQXJyYXkiLCJpc0FycmF5IiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsIndyYXBwZXIiLCJjbGllbnRIZWlnaHQiLCJpbm5lckhlaWdodCIsImNyZWF0ZUFuaW1hdGlvbiIsImhvdmVyQW5pbWF0aW9uIiwibWFwIiwiSG92ZXIiLCJ0ZXh0UmV2ZWFsQW5pbWF0aW9uIiwiVGV4dFJldmVhbCIsInRleHRPcGFjaXR5QW5pbWF0aW9uIiwiVGV4dE9wYWNpdHkiLCJ0ZXh0Um90YXRpb25BbmltYXRpb24iLCJUZXh0Um90YXRpb24iLCJzaG93IiwiUHJvbWlzZSIsInJlc29sdmUiLCJhbmltYXRpb25PdXQiLCJHU0FQIiwidGltZWxpbmUiLCJ0byIsImF0dHIiLCJkIiwiZHVyYXRpb24iLCJlYXNlIiwiZnJvbVRvIiwiYXV0b0FscGhhIiwiY2FsbCIsImhpZGUiLCJkZXN0cm95IiwiYW5pbWF0aW9uSW4iLCJvblJlc2l6ZSIsIm9uU2Nyb2xsIiwiZSIsInBpeGVsWSIsIm9uTW91c2VNb3ZlIiwibyIsImNsaWVudFgiLCJjbGllbnRZIiwib25Ub3VjaFN0YXJ0IiwidG91Y2hlcyIsIm9uVG91Y2hNb3ZlIiwidXBkYXRlIiwic3RpY2t5IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwib2Zmc2V0VG9wIiwidXRpbHMiLCJjbGFtcCIsImludGVycG9sYXRlIiwiRGV0ZWN0aW9uTWFuYWdlciIsImlzUGhvbmUiLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJzdHlsZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=