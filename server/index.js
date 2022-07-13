const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const {getCharacters, deleteCharacter, createCharacter, updateSTR, updateDEX, updateCON, updateWIS, updateINT, updateCHA} = require('./controller')

app.get('/api/characters', getCharacters)
app.delete('/api/characters/:id', deleteCharacter)
app.post('/api/characters', createCharacter)
app.put('/api/characters/:id', updateSTR)
app.put('/api/characters/:id', updateDEX)
app.put('/api/characters/:id', updateCON)
app.put('/api/characters/:id', updateWIS)
app.put('/api/characters/:id', updateINT)
app.put('/api/characters/:id', updateCHA)


app.listen(4000, console.log('Listening on port 4000'))