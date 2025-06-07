import { PokeAPI } from './init';

export const getAllPokemon = async () => {
    // Set the limit to 151 to get the original Pokemon
    await PokeAPI.listPokemons(0, 151)
        .then((data) => console.log(data))
        .catch((error) => console.error(error));
};
