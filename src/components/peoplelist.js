export default function PeopleList(state) {
  if (!state.people || state.people.length === 0) {
    return `<p class="text-center">No characters found.</p>`
  }

  return state.people
    .map(
      (person) => `
          <div class="bg-gray-800 p-4 rounded shadow">
            <h2 class="text-xl font-semibold">${person.name}</h2>
            <p>Height: ${person.height} cm</p>
            <p>Mass: ${person.mass} kg</p>
          </div>
        `,
    )
    .join('')
}
