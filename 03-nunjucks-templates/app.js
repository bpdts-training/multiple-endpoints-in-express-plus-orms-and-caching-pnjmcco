var express = require('express');
var bodyParser = require('body-parser')
var nunjucks = require('nunjucks');
const { Client } = require('pg');

var app = express();

nunjucks.configure('views', {
    autoescape:true,
    express: app
})


//https://xkcd.com/936/
const connectionString = 'postgres://postgres:Correct-Horse-Battery-Staple@localhost:5432/postgres';
const client = new Client({
    connectionString: connectionString
});
client.connect();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', function (req, res) {
    res.render('index.njk');
});

app.get('/people', function (req, res) {
    client.query('SELECT * FROM people', function (err, result) {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        res.status(200).render('people.njk', {data: result.rows});
    });
});

app.get('/people/:Id', function (req, res) {
    client.query('SELECT * FROM people where Id = $1', [req.params.Id], function (err, result) {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        res.status(200).send(result.rows);
    });
});

app.post('/create', function (req, res) {
    if(req.body.name != undefined && req.body.birthday != undefined) {
        client.query("INSERT INTO people (name,birthday) VALUES ($1,$2) RETURNING *",
            [req.body.name, req.body.birthday], function (err, result) {
                if (err) {
                    console.log(err);
                    res.status(400).send(err);
                }
                res.status(200).send(result.rows);
            });
    } else {
        res.send("Please provide a name and a birthday")
    }
});

app.delete("/delete/:id", async function (req, res, next) {
    client.query("DELETE FROM people WHERE id=$1", [req.params.id], function (err, result) {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        res.status(200).send("Deleted the person with id: " + req.params.id);
    });
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000');
});