import each from 'lodash/each.js'
import NormalizeWheel from 'normalize-wheel'

import Home from './pages/Home.js';
import Project from './pages/Project.js';
import Projects from './pages/Projects.js';
import Header from './components/Header.js';
import Canvas from './components/canvas/index.js';

class App {
    constructor() {
        this.createContent()
        this.createHeader()
        this.createCanvas()
        this.createPages()
        this.addLinkListeners()
        this.addEventListeners()
        this.update()
    }

    createContent() {
        this.content = document.querySelector('#content');
        this.template = this.content.getAttribute('data-template');
    }

    createHeader() {
        this.header = new Header()
    }

    createCanvas() {
        this.canvas = new Canvas()
        this.canvas.onChange(this.template)
    }

    createPages() {
            this.pages = {
                home: new Home(),
                projects: new Projects(),
                project: new Project()
            }   
            this.page = this.pages[this.template]
            this.page.create()
    }

    async onChange(url) {
        await this.page.hide()
        const request = await fetch(url)
        if (request.status === 200) {
            const html = await request.text()
            const div = document.createElement('div')
            div.innerHTML = html

            window.history.pushState({}, '', url)

            const divContent = div.querySelector('.content')
            this.template = divContent.getAttribute('data-template')
            this.content.setAttribute('data-template', this.template)
            this.content.innerHTML = divContent.innerHTML
        
            this.canvas.onChange(this.template)
            this.page = this.pages[this.template]
            this.page.create()

            await this.page.show()

            this.addLinkListeners()
        }
    }

    addLinkListeners() {
        this.links = document.querySelectorAll('a')
        each(this.links, (link) => {
            link.onclick = (e) => {
                const isLocal = link.href.indexOf(window.location.origin) > -1

                if (isLocal) {
                    e.preventDefault()
                    const { href } = link
                    this.onChange(href)
                }
                
            }

        })
    }

    addEventListeners() {
        window.addEventListener('resize', this.onResize.bind(this))
        
        window.addEventListener('wheel', this.onScroll.bind(this))
        window.addEventListener('mousemove', this.onMouseMove.bind(this))

        window.addEventListener('touchmove', this.onTouchMove.bind(this))
        window.addEventListener('touchstart', this.onTouchStart.bind(this))
    }

    onResize() {
        if (this.page && this.page.onResize) {
            this.page.onResize()
        }

        if (this.canvas && this.canvas.onResize) {
            this.canvas.onResize()
        }
    }

    onTouchStart(e) {
        if (this.page && this.page.onTouchStart) {
            this.page.onTouchStart(e)
        }
    }

    onTouchMove(e) {
        if (this.page && this.page.onTouchMove) {
            this.page.onTouchMove(e)
        }
    }

    onScroll(e) {
        const normalize = NormalizeWheel(e)

        if (this.page && this.page.onScroll) {
            this.page.onScroll(normalize)
        }

        if (this.canvas && this.canvas.onScroll) {
            this.canvas.onScroll(normalize)
        }
    }

    onMouseMove(e) {
        if (this.page && this.page.onMouseMove) {
            this.page.onMouseMove(e)
        }

        if (this.canvas && this.canvas.onMouseMove) {
            this.canvas.onMouseMove(e)
        }

        this.onMouseMove.bind(this)
    }

    update() {
        if (this.page && this.page.update) {
            this.page.update()
        }

        if (this.header && this.header.update) { 
            this.header.update()
        }

        if (this.canvas && this.canvas.update) {
            this.canvas.update()
        }

        window.requestAnimationFrame(this.update.bind(this))
    }
    
} 

new App()