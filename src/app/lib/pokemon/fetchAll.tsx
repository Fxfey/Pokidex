import { PokeAPI } from './init';

// Use the pokemon API to return all the classic 151 pokemon by using a limit on the request

export const getAllPokemon = async () => {
    try {
        const data = await PokeAPI.listPokemons(0, 151);
        return data.results;
    } catch (error) {
        console.error(error);
        return [];
    }
};
