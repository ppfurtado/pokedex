const { ApolloServer, gql } = require('apollo-server')
const fetch = require('node-fetch');

const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Forms {
    url: String
  }
  type Species {
    url: String
  }

  type Pokemon {
    name: String,
    forms: [Forms],
    weight: Int,
    species: Species
    
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    pokemon: Pokemon
  }

`

const pokemons = async () => {
  const getPokemonUrl = (id) => `https://pokeapi.co/api/v2/pokemon/${id}`
  const pokemonsPromises = []

  for(let i = 1;i< 150;i++){
    const response = await fetch(getPokemonUrl(i))
    const json = await response.json()
    pokemonsPromises.push(json)
  }
  return pokemonsPromises
}



// const pokemons = async () => {
  //   const data = await fetch(`https://pokeapi.co/api/v2/pokemon/1`)
  //   const json = await data.json()
  //   console.log(json);
  //   return json
  // }
  
  const pokemon = pokemons()
  pokemon.then(allPokemons => {
    console.log("TESTE",allPokemons)
  })
  console.log('DEBUG',pokemon);

const resolvers = {
  Query: {
    pokemon: () => pokemon,
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({typeDefs, resolvers})

// The `listen` method launches a web server.
server.listen().then(({url}) => {
  console.log(`🚀  Server ready at ${url}`);
})