import dotenv from 'dotenv'
dotenv.config()

import express, {Router} from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import methodOverride from 'method-override'
import path from 'path'
import { fileURLToPath } from 'url'
import UAParser from 'ua-parser-js'

const app = express()
const router = Router()

const PORT = 3000
const __dirname = path.dirname(fileURLToPath(import.meta.url))

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(methodOverride())
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'public')))

app.use(async (req, res, next) => {
    const ua = UAParser(req.headers['user-agent'])

    res.locals.isDesktop = ua.device.type === undefined
    res.locals.isPhone = ua.device.type === 'mobile'
    res.locals.isTablet = ua.device.type === 'tablet'

    next()
})

app.get('/', async (req, res) => { 
    res.render('pages/home',{})
})

app.get('/projects', async(req, res) => { 
    res.render('pages/projects',{})
})


app.get('/project/:id', async(req, res) => { 
    res.render('pages/project', {})
})


app.listen(PORT, () => {
    console.log('listening on port 3000')
})
