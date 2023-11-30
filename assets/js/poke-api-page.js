
const urlParams = new URLSearchParams(window.location.search);

const id = urlParams.get('id');

console.log(id)
console.log(urlParams)
const pokemonId = id
const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`

const convertPokemonInfoToHtml = (pokemon) => {
    return `
    <div class="pokemonPage  ${pokemon.types[0].type.name}">
    <span class="number">#${pokemon.id}</span>
    <span class="name">${pokemon.name}</span>
    <div class="detail">
        <ol class="types">
        ${pokemon.types.map((item) => `<li class="type ${item.type.name}">${item.type.name}</li>`).join('')}
        </ol>
        <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}">
    </div>
    <p>Species: ${pokemon.species.name}</p>
    <p>Height: ${pokemon.height}cm</p>
    <p>Weight: ${pokemon.weight}g</p>
    <p>Abilities:
    <ul>
        ${pokemon.abilities.map((item) => `<li>${item.ability.name}</li>`)}
    </ul>
    </p>

    </div>
    `
}
const pokemonInfoPage = document.getElementById('pokepage')

fetch(url)
    .then((response) => response.json())
    // .then((jsonBody) => jsonBody.results)
    .then((jsonBody) => jsonBody)
    .then((pokemonInfo) => {
        // console.log(pokemonInfo)
        // console.log(convertPokemonInfoToHtml(pokemonInfo))
        pokemonInfoPage.innerHTML += convertPokemonInfoToHtml(pokemonInfo)
    })
    .catch((error)=>console.log(error))
    .finally(()=>console.log('deu certo!'))
