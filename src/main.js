import { createGeneralElement } from './helpers/useful'
const BASE_URL = 'https://rickandmortyapi.com/api/character/'
const getSectionMainCharacter = document.querySelector('.main-character')
const fetchAPI = (url) => {
  return fetch(url)
}

const renderCharacter = (id) => {
  fetchAPI(`${BASE_URL}${id}`)
    .then(result => result.json())
    .then(data => {
      const getCardFrame = createGeneralElement('div', 'card-frame')
      getSectionMainCharacter.appendChild(getCardFrame)
      const getImage = createGeneralElement('img', 'img-character')
      getCardFrame.appendChild(getImage)
      getImage.src = data.image
      const getName = createGeneralElement('h4', 'description-character h4')
      getCardFrame.appendChild(getName)
      getName.innerHTML = data.name
      const getDescriptions = createGeneralElement('p', '.description-character p')
      getCardFrame.appendChild(getDescriptions)
      getDescriptions.innerHTML =
      `
      Status: ${data.status}<br>
      Species: ${data.species}<br>
      Gender: ${data.gender}<br>
      Created in: <br>${data.created}<br>
      `
    })
}

const fetchAllCharacters = async () => {
  const response = await fetchAPI(BASE_URL)
  const data = await response.json()
  return data.results
}

const renderMainCharacters = async () => {
  const data = await fetchAllCharacters()
  data.forEach(element => {
    console.log(element.name, element.id)
    if (element.id < 6) {
      renderCharacter(element.id)
    }
  })
}

window.onload = () => {
  renderMainCharacters()
}
