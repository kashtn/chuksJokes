import express from 'express'
import fetch from 'node-fetch'
// import Handlebars from 'handlebars'
const app = express()

app.set('view engine', 'hbs')
app.use(express.static('public'));


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(3000, () => {
    console.log('Listening...');
})

app.get('/', async (req, res) => {
    
    res.render('home')
})

app.get('/joke', async (req, res) => {

    const jokeResponse = await fetch("https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "matchilling-chuck-norris-jokes-v1.p.rapidapi.com",
        "x-rapidapi-key": "d808595fe2msh4689c2dd453b78bp1f2122jsne6ee247af325",
        "accept": "application/json"
      }
    })

    const joke = await jokeResponse.json()
    res.send(joke)
})