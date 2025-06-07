import { PokeAPI } from './init';
import { advancedPokemonView } from '@/app/types/advancedPokemonView';

export const getAdvancedView = async (
    name: string,
): Promise<advancedPokemonView> => {
    try {
        const data = await PokeAPI.getPokemonByName(name);

        const statData = {
            hp: 0,
            attack: 0,
            defense: 0,
            speed: 0,
        };

        data.stats.forEach((stat) => {
            switch (stat.stat.name) {
                case 'hp':
                    statData.hp = stat.base_stat;
                    break;
                case 'attack':
                    statData.attack = stat.base_stat;
                    break;
                case 'defense':
                    statData.defense = stat.base_stat;
                    break;
                case 'speed':
                    statData.speed = stat.base_stat;
                    break;
                default:
                    break;
            }
        });

        const advancedPokemonView: advancedPokemonView = {
            id: data.id,
            name: data.name,
            type: data.types,
            image: data.sprites.other?.['official-artwork'].front_default,
            stats: statData,
            weight: data.weight,
            height: data.height,
        };

        return advancedPokemonView;
    } catch (error) {
        console.error(error);
        return {
            id: null,
            name: null,
            type: null,
            image: null,
            stats: null,
            weight: null,
            height: null,
        };
    }
};
