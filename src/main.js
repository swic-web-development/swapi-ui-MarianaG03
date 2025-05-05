import { fetchPeople } from './actions.js'
import PeopleList from './components/peoplelist.js'
import store from './store.js'
import './styles.css'

const APP_CLASS_NAME =
  'bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center'

function App() {
  const render = (state) => {
    state.appElement.className = APP_CLASS_NAME

    let content = ''

    if (state.error) {
      content = `<p class="text-red-500 text-center p-4">${state.error}</p>`
    } else if (state.isLoading) {
      content = `<p class="text-center p-4">Loading characters...</p>`
    } else {
      content = PeopleList(state)
    }

    state.appElement.innerHTML = `
      <h1 class="mb-4 text-3xl font-bold">Star Wars Characters</h1>
      <main class="container mx-auto p-4 max-w-6xl grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        ${content}
      </main>
    `
  }

  render(store.getState())
  store.subscribe(render)
  fetchPeople()
}

App()
