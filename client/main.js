const dndCharContainer = document.querySelector('#dnd-char-container')
const form = document.querySelector('form')

const baseURL = `http://localhost:4000/api/characters`

const characterCallback = ({ data: character }) => displayCharacter(character)
const errCallback = err => console.log(err.response.data)

const getAllCharacters = () => axios.get(baseURL).then(characterCallback).catch(errCallback)
const createCharacter = body => axios.post(baseURL, body).then(characterCallback).catch(errCallback)
const deleteCharacter = id => axios.delete(`${baseURL}/${id}`).then(characterCallback).catch(errCallback)
const updateCharacter = (id, type, stat) => axios.put(`${baseURL}/${stat}${id}`, {type}).then(characterCallback).catch(errCallback)

function submitHandler(e) {
    e.preventDefault()

    let title = document.querySelector('#title')
    let statStrength = document.querySelector('input#str')
    let statDexterity = document.querySelector('input#dex')
    let statConstitution = document.querySelector('input#con')
    let statWisdom = document.querySelector('input#wis')
    let statIntelligence = document.querySelector('input#int')
    let statCharisma = document.querySelector('input#cha')
    let imageURL = document.querySelector('#img')

    let bodyObj = {
        title: title.value,
        statStrength: +statStrength.value, 
        statDexterity: +statDexterity.value, 
        statConstitution: +statConstitution.value, 
        statWisdom: +statWisdom.value, 
        statIntelligence: +statIntelligence.value, 
        statCharisma: +statCharisma.value, 
        imageURL: imageURL.value
    }

    createCharacter(bodyObj)

    title.value = ''
    statStrength.value = Number
    statDexterity.value = Number
    statConstitution.value = Number
    statWisdom.value = Number
    statIntelligence.value = Number
    statCharisma.value = Number
    imageURL.value = ''
}

function createCharacterCard(character) {
    const characterCard = document.createElement('div')
    characterCard.classList.add('character-card')

    characterCard.innerHTML = `<img alt='character cover' src=${character.imageURL} class="character-cover"/>
    <p class="character-name">${character.title}</p>
    <div class="btns-container">
        <button onclick="updateCharacter(${character.id}, 'minus', 'str')">-</button>
        <p class="stat-card"> STR = ${character.statStrength}</p>
        <button onclick="updateCharacter(${character.id}, 'plus', 'str')">+</button>
    </div>
    <div class="btns-container">
        <button onclick="updateCharacter(${character.id}, 'minus', 'dex')">-</button>
        <p class="stat-card"> DEX = ${character.statDexterity}</p>
        <button onclick="updateCharacter(${character.id}, 'plus', 'dex')">+</button>
    </div>
    <div class="btns-container">
        <button onclick="updateCharacter(${character.id}, 'minus', 'con')">-</button>
        <p class="stat-card"> CON = ${character.statConstitution}</p>
        <button onclick="updateCharacter(${character.id}, 'plus', 'con')">+</button>
    </div>
    <div class="btns-container">
        <button onclick="updateCharacter(${character.id}, 'minus', 'wis')">-</button>
        <p class="stat-card"> WIS = ${character.statWisdom}</p>
        <button onclick="updateCharacter(${character.id}, 'plus', 'wis')">+</button>
    </div>
    <div class="btns-container">
        <button onclick="updateCharacter(${character.id}, 'minus', 'int')">-</button>
        <p class="stat-card"> INT = ${character.statIntelligence}</p>
        <button onclick="updateCharacter(${character.id}, 'plus', 'int')">+</button>
    </div>
    <div class="btns-container">
        <button onclick="updateCharacter(${character.id}, 'minus', 'cha')">-</button>
        <p class="stat-card"> CHA = ${character.statCharisma}</p>
        <button onclick="updateCharacter(${character.id}, 'plus', 'cha')">+</button>
    </div>
    <button onclick="deleteCharacter(${character.id})">delete</button>
    `

    dndCharContainer.appendChild(characterCard)
}

function displayCharacter(arr) {
    dndCharContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createCharacterCard(arr[i])
    }
}

form.addEventListener('submit', submitHandler)

getAllCharacters()