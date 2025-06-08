import { PokemonClient } from 'pokenode-ts';

// File to initialise the Pokemon API Client with a 1 hour cache

export const PokeAPI = new PokemonClient({
    cacheOptions: {
        ttl: 1000 * 60 * 60, // Cache duration: 1 hour
    },
});
