import { PokemonType } from 'pokenode-ts';

export type advancedPokemonView = {
    id: number | null;
    name: string | null;
    type: PokemonType[] | null;
    image: string | null | undefined;
    stats: {
        hp: number;
        attack: number;
        defense: number;
        speed: number;
    } | null;
    height: number | null;
    weight: number | null;
};
