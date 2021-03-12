export const API_URL = 'https://pokeapi.co/api/v2/pokemon/'


export function GET_DATA(id) {
  return {
    url: API_URL + id
  }
}