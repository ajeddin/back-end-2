const express = require('express') 
const cors = require('cors') 
const app = express()
const {getHouses,deleteHouse,createHouse,updateHouse} = require('./controller')
app.use(express.json());
app.use(cors());
app.listen(4004, () => console.log("Server running on port 4004..."));

app.get('/api/houses/' , getHouses)
app.post('/api/houses/' , createHouse)
app.delete('/api/houses/:id' , deleteHouse)
app.put('/api/houses/:id' , updateHouse)