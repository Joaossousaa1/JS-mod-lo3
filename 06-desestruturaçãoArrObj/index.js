const person = {
  name: 'João',
  job: 'Devs',
  parents: ['Leila', 'Gordin']
}

const {name, job, parents} = person
const [mother, pather] = person.parents

function createUser({name, job, parents}) {
  const id = Math.floor(Math.random() * 9999)
  return {
    id,
    name,
    job,
    parents
  }
}

const luke = createUser(person)
console.log(luke)


