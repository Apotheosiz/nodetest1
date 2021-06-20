// import
const express = require('express')
const app = express()
const port = 3000


// Get static file
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))

// Set Views
app.set('views', 'public/views')
app.set('view engine', 'ejs')

app.get('', (req, res) => {
    res.render('index', { text: 'EJS test' })
})

app.get('/about', (req, res) => {
    res.render('about', { text: 'About page' })
})


// listen on port
app.listen(port, () => console.info('Listening on port ${port}'))