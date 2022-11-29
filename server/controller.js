const houses = require('./db.json')
let houseIndexPOS = 4
module.exports = {
    getHouses: (req,res) => { res.status(200).send(houses)}, 
    deleteHouse:(req,res) => {
        let {id}= req.params
        let houseIndex = houses.findIndex(el => el.id=== +id)  
        houses.splice(houseIndex,1)
        res.status(200).send(houses)
    },
    createHouse:(req,res) => {
        let {address,price,imageURL}= req.body
        house = {
            id: houseIndexPOS,
            address,
            price,
            imageURL
        }
        houses.push(house)
        houseIndexPOS++
        res.status(200).send(houses)
    },
    updateHouse:(req,res) => {
        let {id}= req.params
        let {type} = req.body
        let houseIndex = houses.findIndex(el => el.id=== +id)  
        house = houses[houseIndex]
        if (type === 'plus'){
            house.price += 10000
            res.status(200).send(houses)
        }else if (type === 'minus' && house.price <=10000){
            res.status(400).send("Can't be under 10k")
        }else if (type === 'minus'){
            house.price -= 10000
            res.status(200).send(houses)
        }else{
            res.status(400).send("Something Else")
        }
        
    }
}