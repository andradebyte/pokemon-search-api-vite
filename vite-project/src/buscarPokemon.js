export async function buscarPokemon() {
  const nome = document.getElementById("pokemonName").value.toLowerCase();

  if (!nome) {
    document.getElementById("result").innerHTML = "<p>Por favor, digite um nome de Pokémon.</p>";
    return;
  }

  try {
    const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`);

    if (resposta.ok) {
      const dados = await resposta.json();
      document.getElementById("result").innerHTML = `
          <h2>${dados.name.toUpperCase()}</h2>
          <img src="${dados.sprites.front_default}" alt="${dados.name}">
          <p>Altura: ${dados.height / 10} m</p>
          <p>Peso: ${dados.weight / 10} kg</p>
      `;
    } else {
      document.getElementById("result").innerHTML = "<p>Pokémon não encontrado!</p>";
    }
  } catch (error) {
    document.getElementById("result").innerHTML = `<p>Erro ao buscar dados: ${error.message}</p>`;
  }
}