function createStore(intitialState = {}) {
  let state = intitialState
  const listeners = new Set()

  const getState = () => ({ ...state })

  const setState = (newState) => {
    state = typeof newState === 'function' ? newState(state) : { ...state, ...newState }
    listeners.forEach((listener) => listener(state))
  }

  const subscribe = (listener) => {
    listeners.add(listener)
    return () => listeners.delete(listener)
  }

  return { getState, setState, subscribe }
}

// Our app's starting state
const store = createStore({
  people: [],
  isLoading: false,
  error: null,
})

export default store
