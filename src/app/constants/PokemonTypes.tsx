import {
    Flame,
    Bubbles,
    Leaf,
    Zap,
    Wand,
    Origami,
    Bug,
    Grab,
    Feather,
    Ghost,
    Mountain,
    Snowflake,
    Skull,
    CircleDashed,
    Sprout,
    Ban,
    Sparkle,
} from 'lucide-react';

export function getTypeVars(pokemonType: string, size: number) {
    let typeVars;

    switch (pokemonType) {
        case 'fire':
            typeVars = {
                icon: <Flame size={size} />,
                hexCode: '#F78E6B',
            };
            break;
        case 'water':
            typeVars = {
                icon: <Bubbles size={size} />,
                hexCode: '#7AC7E3',
            };
            break;
        case 'grass':
            typeVars = {
                icon: <Leaf size={size} />,
                hexCode: '#7ECD7C',
            };
            break;
        case 'electric':
            typeVars = {
                icon: <Zap size={size} />,
                hexCode: '#FFF176',
            };
            break;
        case 'psychic':
            typeVars = {
                icon: <Wand size={size} />,
                hexCode: '#F5A6C4',
            };
            break;
        case 'dragon':
            typeVars = {
                icon: <Origami size={size} />,
                hexCode: '#9C8FF3',
            };
            break;
        case 'bug':
            typeVars = {
                icon: <Bug size={size} />,
                hexCode: '#A8D5A3',
            };
            break;
        case 'fighting':
            typeVars = {
                icon: <Grab size={size} />,
                hexCode: '#F48C8C',
            };
            break;
        case 'flying':
            typeVars = {
                icon: <Feather size={size} />,
                hexCode: '#92B6F4',
            };
            break;
        case 'ghost':
            typeVars = {
                icon: <Ghost size={size} />,
                hexCode: '#9F91D6',
            };
            break;
        case 'ground':
            typeVars = {
                icon: <Mountain size={size} />,
                hexCode: '#D6B98A',
            };
            break;
        case 'ice':
            typeVars = {
                icon: <Snowflake size={size} />,
                hexCode: '#A6D8E7',
            };
            break;
        case 'poison':
            typeVars = {
                icon: <Skull size={size} />,
                hexCode: '#B28DD9',
            };
            break;
        case 'rock':
            typeVars = {
                icon: <Sprout size={size} />,
                hexCode: '#C6B280',
            };
            break;
        case 'fairy':
            typeVars = {
                icon: <Sparkle size={size} />,
                hexCode: '#f9c0f1',
            };
            break;
        case 'normal':
            typeVars = {
                icon: <CircleDashed size={size} />,
                hexCode: '#C2BEB5',
            };
            break;
        default:
            typeVars = {
                icon: <Ban size={size} />,
                hexCode: '#cdcdcd',
            };
            break;
    }
    return typeVars;
}
