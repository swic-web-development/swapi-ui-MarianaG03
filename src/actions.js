import store from './store.js'

export async function fetchPeople() {
  store.setState({ isLoading: true, error: null })

  try {
    const res = await fetch('https://www.swapi.tech/api/people')
    const data = await res.json()

    // Fetch full details for each person
    const detailPromises = data.results.map(async (person) => {
      const res = await fetch(person.url)
      const fullData = await res.json()
      return fullData.result.properties
    })

    const detailedPeople = await Promise.all(detailPromises)

    console.log('Detailed People:', detailedPeople)

    store.setState({ people: detailedPeople, isLoading: false })
  } catch (err) {
    store.setState({ error: err.message, isLoading: false, people: [] })
  }
}
