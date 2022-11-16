const BASE_URL = 'https://rickandmortyapi.com/api/character/'
const someID = 1

const fetchAPI = (url) => {
  return fetch(url)
}

const renderRick = () => {
  const getImage = document.querySelector('.img-character')
  const getName = document.querySelector('.description-character h4')
  const getDescriptions = document.querySelector('.description-character p')
  fetchAPI(`${BASE_URL}${someID}`)
    .then(result => result.json())
    .then(data => {
      getImage.src = data.image
      getName.innerHTML = data.name
      getDescriptions.innerHTML =
      `
      Status: ${data.status}<br>
      Species: ${data.species}<br>
      Gender: ${data.gender}<br>
      Created in: <br>${data.created}<br>
      `
    })
}

renderRick()
