import store from './store.js'

export async function fetchPeople() {
  store.setState({ isLoading: true, error: null })

  try {
    const res = await fetch('https://www.swapi.tech/api/people/')
    const data = await res.json()

    store.setState({ people: data.results, isLoading: false })
  } catch (err) {
    store.setState({ error: err.message, isLoading: false, people: [] })
  }
}
