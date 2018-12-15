// requires
const express = require('express');
const bodyParser = require('body-parser');
const knex = require('knex');

// settings
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

// db connection
const db = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'Andy',
        password: '',
        database: 'users'
    }
});

// routes
app.get('/', (req, res) => {
    res.render('index');
});

app.post('/register', (req, res) => {
    let person = {
        name: req.body.name,
        email: req.body.email
    };

    db('users').insert({
        name: person.name,
        email: person.email
    }).then()

    // redirects 'thanks' page
    res.redirect('/registered');
})

app.get('/registered', (req, res) => {
    res.render('registered');
});


app.listen(3000, () => {
    console.log('App running on port 3000.')
});



