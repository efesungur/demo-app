const express = require('express')
const hbs = require('hbs')
const path = require('path')

const app = express()
const port = process.env.PORT || 3000

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(path.join(publicDirectoryPath)))

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Countly Web SDK Demo'
    })
})

app.get('/apm', (req, res) => {
    res.render('example_apm', {
        title: 'APM (Application Performance Management)'
    })
})

app.get('/async', (req, res) => {
    res.render('example_async', {
        title: 'Asynchronous Initialization'
    })
})

app.get('/fb', (req, res) => {
    res.render('example_fb', {
        title: 'Facebook User Information'
    })
})

app.get('/formdata', (req, res) => {
    res.render('example_formdata', {
        title: 'Form Data'
    })
})

app.post('/formdata', (req, res) => {
    res.render('example_formdata', {
        title: 'POST request sent'
    })
  })

app.get('/ga-adapter', (req, res) => {
    res.render('example_ga_adapter', {
        title: 'Google Analytics Adapter'
    })
})

app.get('/gdpr', (req, res) => {
    res.render('example_gdpr', {
        title: 'GDPR (General Data Protection Regulation)'
    })
})

app.get('/helpers', (req, res) => {
    res.render('example_helpers', {
        title: 'Helpers'
    })
})

app.post('/helpers', (req, res) => {
    res.render('example_helpers', {
        title: 'POST request sent'
    })
  })

app.get('/opt-mechanism', (req, res) => {
    res.render('example_opt_out', {
        title: 'Opt-In/Opt-Out'
    })
})

app.get('/remote-config', (req, res) => {
    res.render('example_remote_config', {
        title: 'Remote Config'
    })
})

app.get('/sync', (req, res) => {
    res.render('example_sync', {
        title: 'Synchronous Initialization'
    })
})

app.get('*', (req, res) => {
    res.render('404')
})

app.listen(port, () => {
    console.log(`Server is up on port ${port}.`)
})