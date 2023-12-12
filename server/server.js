const express=require("express")
const cors = require("cors")
const app = express()
const port = 4000
app.use(express.json());

app.use(cors())
let products = [
    {
        "id": 1,
        "name": "bread",
        "image": "https://www.bhg.com/thmb/ov2S31znAvSCXqrpgJQ8rwBgzp8=/2250x0/filters:no_upscale():strip_icc()/BHG-milk-bread-4CdeIL1uKGyB5ryU8J_EED-aaa76729c86a413ca7500029edba79f0.jpg",
        "info": "plentiful",
        "price": "0.60 AZN"
    },
    {
        "id": 2,
        "name": "water",
        "image": "https://domf5oio6qrcr.cloudfront.net/medialibrary/7909/conversions/b8a1309a-ba53-48c7-bca3-9c36aab2338a-thumb.jpg",
        "info": "clean",
        "price": "0.50 AZN"
    },
    {
        "id": 3,
        "name": "date",
        "image": "https://a-z-animals.com/media/2022/06/dates-fruts-picture-id1211281586.jpg",
        "info" : "vitamin",
        "price": "2.5 AZN"
    },
    {
        "id": 4,
        "name": "salt",
        "image":"https://www.healthkart.com/connect/wp-content/uploads/2022/05/900x500_thumbnail_HK-Why-you-should-cutdown-on-salt-in-diet-during-summer-May-1st-2nd-week.png",
        "info": "sour",
        "price": "1 AZN"
    },
    {
        "id": 5,
        "name": "rice",
        "image":"https://images.immediate.co.uk/production/volatile/sites/30/2013/05/rice-a941d59.jpg?quality=90&resize=556,505",
        "info": "satisfying",
        "price": "2 AZN"
    },
    {
        "id": 6,
        "name": "Meat",
        "image": "https://images.squarespace-cdn.com/content/v1/59f0e6beace8641044d76e9c/1669587646206-6Z76MY4X3GBFKIUQZJ4R/Social+Meat.jpeg",
        "info" : "delicious",
        "price": "10 AZN"
    }   
]
let id = 7

app.get('/', async(req, res) => {
    res.send(products)
})
app.get('/', (req, res) => {
    res.send(products)
})

app.get('/:id', (req, res) => {
    const { id } = req.params
    const item = products.find(x => x.id === +id)
    res.send(item)
})
app.delete('/:id', (req, res) => {
    const { id } = req.params
    products = products.filter(x => x.id !== +id)
    res.send(products)
})

app.post('/', (req, res) => {
    products.push({ id: id++, ...req.body })
    res.send(products)
})

app.put('/:id', (req, res) => {
    const { id } = req.params
    const index = products.findIndex(x => x.id === +id)
    products[index] = { id: +id, ...req.body }
    res.send(products)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
