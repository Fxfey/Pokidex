import { SimpleTypeStyled } from './SimpleType.styled';
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
} from 'lucide-react';

export default function SimpleType({ type }: Readonly<{ type: string }>) {
    let typeIcon;

    switch (type) {
        case 'fire':
            typeIcon = <Flame />;
            break;
        case 'water':
            typeIcon = <Bubbles />;
            break;
        case 'grass':
            typeIcon = <Leaf />;
            break;
        case 'electric':
            typeIcon = <Zap />;
            break;
        case 'psychic':
            typeIcon = <Wand />;
            break;
        case 'dragon':
            typeIcon = <Origami />;
            break;
        case 'bug':
            typeIcon = <Bug />;
            break;
        case 'fighting':
            typeIcon = <Grab />;
            break;
        case 'flying':
            typeIcon = <Feather />;
            break;
        case 'ghost':
            typeIcon = <Ghost />;
            break;
        case 'ground':
            typeIcon = <Mountain />;
            break;
        case 'ice':
            typeIcon = <Snowflake />;
            break;
        case 'poison':
            typeIcon = <Skull />;
            break;
        case 'rock':
            typeIcon = <Sprout />;
            break;
        case 'normal':
            typeIcon = <CircleDashed />;
            break;
        default:
            typeIcon = 'N/A';
            break;
    }

    return <SimpleTypeStyled type={type}>{typeIcon}</SimpleTypeStyled>;
}
