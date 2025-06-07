import { PokeAPI } from './init';

export const getAllPokemon = async () => {
    try {
        const data = await PokeAPI.listPokemons(0, 151);
        return data.results;
    } catch (error) {
        console.error(error);
        return [];
    }
};
