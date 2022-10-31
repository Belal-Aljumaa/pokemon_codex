const input = document.getElementById('search');
const btn = document.getElementById('search-btn');
const content = document.getElementById('card-content');


window.onload = () => {
  input.focus();
};


btn.addEventListener('click', (event) => {
  event.preventDefault();
  getPokemon(input.value);
  input.value = "";
  input.focus();
});


input.addEventListener('keyup', (event) => {
  let userText = input.value.trim();
  if (event.key == "Enter" && userText) {
    getPokemon(input.value);
    input.value = "";
    input.focus();
  }
});


function getPokemon(pokemon) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((result) => result.json())
    .then((data) => {
      createPokemon(data);
    });
}

function createPokemon(pokemon) {
  content.innerHTML = `
      <div class="pokemon-card" id="pokemon_details">
        <div class="img-container">
          <img src= ${pokemon.sprites.other.dream_world.front_default} alt="">
        </div>
        <div class="detail-container">
          <div class="name-container">
            <h3 class="name-pokemon" id="update_name">${pokemon.name}</h3>
          </div>
          <div class="stats">
            <span id="update_hp">HP: ${pokemon.stats[0].base_stat}</span>
            <span>|</span>
            <span id="update_cp">XP: ${pokemon.base_experience}</span>
          </div>
          <div class="attributes-container"> 
            <div>
              <p id="update_type">Speed</p>
              <small class="text">${pokemon.stats[5].base_stat}</small>
            </div>
            <div>
              <p id="update_weight">Weight</p>
              <small class="text">${pokemon.weight} kg</small>
            </div>
            <div>
              <p id="update_height">Height</p>
              <small class="text">0.${pokemon.height} m</small>
            </div>
          </div>
          <div class="btn">
          <a href="http://www.pokewiki.de/${pokemon.name}" target="_blank" rel="noopener noreferrer">Read More...</a>
          </div>
        </div>
      </div>`;
}