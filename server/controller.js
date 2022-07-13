const characters = require('./db.json')

let globalID = 4

module.exports = {
    getCharacters: (req, res) => {
        res.status(200).send(characters)
    },
    deleteCharacter: (req, res) => {
        let index = characters.findIndex(elem => elem.id === +req.params.id)
        characters.splice(index, 1)
        res.status(200).send(characters)
    },
    createCharacter: (req, res) => {
        const {title, statStrength, statDexterity, statConstitution, statWisdom, statIntelligence, statCharisma, imageURL} = req.body;
        let newCharacter = {
            title: title,
            statStrength,
            statDexterity,
            statConstitution,
            statWisdom,
            statIntelligence,
            statCharisma,
            imageURL,
            id: globalID
        }
        characters.push(newCharacter)
        globalID++
        res.status(200).send(characters)
    },
    updateSTR: (req, res) => {
        const {type} = req.body;
        let index = characters.findIndex(elem => elem.id === +req.params.id) // fix so str isnt the only one changing... also new char updates goes up by 60 (6x10)

        if(type === 'minus' && characters[index].statStrength > 6){
            characters[index].statStrength -= 1;
            res.status(200).send(characters)
        } else if(type === 'plus' && characters[index].statStrength < 20){
            characters[index].statStrength += 1;
            res.status(200).send(characters)
        } else {
            res.status(400).send('Invalid stat rating!')
        }
    },
    updateDEX: (req, res) => {
        const {type} = req.body;
        let index = characters.findIndex(elem => elem.id === +req.params.id)

        if(type === 'minus' && characters[index].statDexterity > 6){
            characters[index].statDexterity -= 1;
            res.status(200).send(characters)
        } else if(type === 'plus' && characters[index].statDexterity < 20){
            characters[index].statDexterity += 1;
            res.status(200).send(characters)
        } else {
            res.status(400).send('Invalid stat rating!')
        }
    },
    updateCON: (req, res) => {
        const {type} = req.body;
        let index = characters.findIndex(elem => elem.id === +req.params.id)

        if(type === 'minus' && characters[index].statConstitution> 6){
            characters[index].statConstitution -= 1;
            res.status(200).send(characters)
        } else if(type === 'plus' && characters[index].statConstitution < 20){
            characters[index].statConstitution += 1;
            res.status(200).send(characters)
        } else {
            res.status(400).send('Invalid stat rating!')
        }
    },
    updateWIS: (req, res) => {
        const {type} = req.body;
        let index = characters.findIndex(elem => elem.id === +req.params.id)
        
        if(type === 'minus' && characters[index].statWisdom > 6){
            characters[index].statWisdom -= 1;
            res.status(200).send(characters)
        } else if(type === 'plus' && characters[index].statWisdom < 20){
            characters[index].statWisdom += 1;
            res.status(200).send(characters)
        } else {
            res.status(400).send('Invalid stat rating!')
        }
    },
    updateINT: (req, res) => {
        const {type} = req.body;
        let index = characters.findIndex(elem => elem.id === +req.params.id)
        
        if(type === 'minus' && characters[index].statIntelligence > 6){
            characters[index].statIntelligence -= 1;
            res.status(200).send(characters)
        } else if(type === 'plus' && characters[index].statIntelligence < 20){
            characters[index].statIntelligence += 1;
            res.status(200).send(characters)
        } else {
            res.status(400).send('Invalid stat rating!')
        }
    },
    updateCHA: (req, res) => {
        const {type} = req.body;
        let index = characters.findIndex(elem => elem.id === +req.params.id)
        
        if(type === 'minus' && characters[index].statCharisma > 6){
            characters[index].statCharisma -= 1;
            res.status(200).send(characters)
        } else if(type === 'plus' && characters[index].statCharisma < 20){
            characters[index].statCharisma += 1;
            res.status(200).send(characters)
        } else {
            res.status(400).send('Invalid stat rating!')
        }
    }

}