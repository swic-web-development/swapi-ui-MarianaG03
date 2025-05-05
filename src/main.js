import './styles.css'

async function fetchPeople() {
  const response = await fetch('https://swapi.dev/api/people/')
  const data = await response.json()
  return data.results
}

function displayPeople(people) {
  const peopleContainer = document.getElementById('people')
  peopleContainer.innerHTML = ''

  people.forEach((person) => {
    const container = document.getElementById('people')
    container.innerHTML = people
      .map(
        (person) => `
    <div class="bg-gray-800 p-4 rounded shadow">
      <h2 class="text-xl font-semibold">${person.name}</h2>
      <p>Height: ${person.height}cm</p>
      <p>Mass: ${person.mass}kg</p>
    </div>
  `,
      )
      .join('')
  })
}

fetchPeople().then(displayPeople)
