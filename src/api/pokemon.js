const URL_POKEMON = "https://pokeapi.co/api/v2/pokemon/";
// const URL_ITEMS = "https://pokeapi.co/api/v2/item/";
// const URL_SPECIES = "https://pokeapi.co/api/v2/pokemon-species/";
const URL_TYPES = "https://pokeapi.co/api/v2/type/";

export const getTypes = async () => {
    const response = await fetch(URL_TYPES);
    const data = await response.json();
    return data.results;
};

export const getPokemonByType = async (type) => {
    const response = await fetch(`${URL_TYPES}${type}`);
    const data = await response.json();
    return data.pokemon.map((pokemon) => pokemon.pokemon);
};

export const getPokemonByName = async (name) => {
    const response = await fetch(`${URL_POKEMON}${name}`);
    const data = await response.json();
    return data;
};
