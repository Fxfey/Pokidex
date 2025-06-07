'use client';
import { PokemonType } from 'pokenode-ts';
import styled from 'styled-components';

type ProfileContainerStyledProps = {
    type?: PokemonType[];
};

const typeColors: Record<string, string> = {
    fire: '#F78E6B',
    water: '#7AC7E3',
    grass: '#7ECD7C',
    electric: '#FFF176',
    psychic: '#F5A6C4',
    dragon: '#9C8FF3',
    bug: '#A8D5A3',
    fighting: '#F48C8C',
    flying: '#92B6F4',
    ghost: '#9F91D6',
    ground: '#D6B98A',
    ice: '#A6D8E7',
    normal: '#C2BEB5',
    poison: '#B28DD9',
    rock: '#C6B280',
};

export const ProfileContainerStyled = styled.div.attrs<ProfileContainerStyledProps>(
    (props) => {
        const colors = props.type?.map((t) => typeColors[t.type.name]) ?? [
            '#ffffff',
        ];
        const gradient =
            colors.length > 1
                ? `linear-gradient(135deg, ${colors.join(', ')})`
                : colors[0];

        return {
            style: {
                background: gradient,
            },
        };
    },
)<ProfileContainerStyledProps>`
    height: 100vh;
`;
