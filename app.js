// import
const express = require('express');
const app = express();
const port = 3000;


// Get static file
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));

// Create a function that displays random number
function randomNumber(max) {    
    let randObj = {
        "number": Math.floor(Math.random() * max)
    };
    return randObj
};

// Function that counts the amount of vowels in a word. Source: https://www.programiz.com/javascript/examples/count-vowels
function countVowel(countallthevowels) {
    let countVowel = {
        "word": countallthevowels,
        "vowels": count = countallthevowels.match(/[aeiouåäö]/gi).length
    };
    return countVowel
};


// Set Views
app.set('views', 'public/views');
app.set('view engine', 'ejs');

app.get('', (req, res) => {
    res.render('index', { text: 'EJS test' });
});

app.get('/about', (req, res) => {
    res.render('about', { text: 'About page' });
});

app.get('/api/random', (req, res) => {
    return res.send(randomNumber(1024));
});

app.get('/api/count_vowels/:word', (req, res) => {
    return res.send(countVowel(req.params.word));
});

app.get('/api/custom_random/:num', (req, res) => {
    return res.send(randomNumber(req.params.num));
});

// listen on port
app.listen(port, () => console.info('Listening on port ${port}'));