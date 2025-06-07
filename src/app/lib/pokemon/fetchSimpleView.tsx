import { PokeAPI } from './init';
import { simplePokemonView } from '@/app/types/simplePokemonView';

export const getSimpleView = async (
    name: string,
): Promise<simplePokemonView> => {
    try {
        const data = await PokeAPI.getPokemonByName(name);
        const simplePokemonView: simplePokemonView = {
            id: data.id,
            name: data.name,
            type: data.types,
            image: data.sprites.front_default,
        };

        return simplePokemonView;
    } catch (error) {
        console.error(error);
        return {
            id: null,
            name: null,
            type: null,
            image: null,
        };
    }
};
