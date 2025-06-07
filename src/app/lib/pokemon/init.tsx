import { PokemonClient } from 'pokenode-ts';

export const PokeAPI = new PokemonClient({
    cacheOptions: {
        ttl: 1000 * 60 * 60, // Cache duration: 1 hour
    },
    logs: true,
});
