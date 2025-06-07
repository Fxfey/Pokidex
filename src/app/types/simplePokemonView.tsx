import { PokemonType } from 'pokenode-ts';

export type simplePokemonView = {
    id: number | null;
    name: string | null;
    type: PokemonType[] | null;
    image: string | null | undefined;
};
