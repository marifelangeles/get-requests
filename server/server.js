let express = require('express');
let PORT = 5000;
let app = express();


let quotes_data = [
    { quote: 'I\'m not going to school just for the academics - I wanted to share ideas, to be around people who are passionate about learning.', author: 'Emma Watson' },
    { quote: 'Remember there\'s no such thing as a small act of kindness. Every act creates a ripple with no logical end.', author: 'Scott Adams' },
    { quote: 'Intelligence plus character-that is the goal of true education.', author: 'Martin Luther King, Jr.' }
];


app.use(express.static('server/public'));

app.get('/quotes', function (req, res) {
    //res.sendStatus(200); 
    res.send(quotes_data);
});

app.listen(PORT, () => {
    console.log('Running on ' + PORT);
});