import { fetchPeople } from './actions.js'
import PeopleList from './components/peoplelist.js'
import store from './store.js'
import './styles.css'

const app = document.getElementById('app')

function render(state) {
  if (state.error) {
    app.innerHTML = `<p class="text-red-500">${state.error}</p>`
  } else if (state.isLoading) {
    app.innerHTML = `<p>Loading...</p>`
  } else {
    app.innerHTML = PeopleList(state.people)
  }
}

// Initial render
render(store.getState())

// Re-render on state change
store.subscribe(render)

// Fetch people data
fetchPeople()
