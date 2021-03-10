const express = require('express')
const app = express()
const port = 3000

const ingredients = [
    {
        "id": "234kjw",
        "text": "Eggs"
    },
    {
        "id": "as82w",
        "text": "Milk"
    },
    {
        "id": "234sk1",
        "text": "Bacon"
    },
    {
        "id": "ppo3j3",
        "text": "Frog Legs"
    }
];

app.use(express.json());

app.get('/', (req, res) => {
    res.json(ingredients)
})

app.post('/', (req, res) => {
    const ingredient = req.body
    if (!ingredient) res.status(401).send({error:'You must post an ingredient'})
    ingredients.push(ingredient);
    res.send(ingredients)
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})