export default function PeopleList(people) {
  return `
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 p-4">
        ${people
          .map(
            (person) => `
          <div class="bg-gray-800 p-4 rounded shadow">
            <h2 class="text-xl font-semibold">${person.name}</h2>
            <p>Height: ${person.height}cm</p>
            <p>Mass: ${person.mass}kg</p>
          </div>
        `,
          )
          .join('')}
      </div>
    `
}
