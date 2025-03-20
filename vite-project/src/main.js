import './style.css'
import { buscarPokemon } from './buscarPokemon.js'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Buscar Pokémon:</h1>
    <input type="text" id="pokemonName" placeholder="Digite o nome do Pokémon">
    <button id="buscarBtn">Buscar</button>
    <div id="result"></div>
  </div>
`;

// Garante que o botão funcione corretamente
document.getElementById("buscarBtn").addEventListener("click", buscarPokemon);
