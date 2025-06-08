'use client';
import styled from 'styled-components';
import { getTypeVars } from '@/app/constants/PokemonTypes';

// We can have the style within the same file utilising data & props
const ProfileTypeStyle = styled.div<{ bgColor: string }>`
    background-color: ${({ bgColor }) => bgColor};
    color: var(--black-1);
    padding: 15px;
    border-radius: 100%;
    border: 2px solid var(--white-1);
    svg {
        fill: rgba(0, 0, 0, 0.25);
    }
`;

export default function ProfileType({
    pokemonType,
}: Readonly<{ pokemonType: string }>) {
    const typeVars = getTypeVars(pokemonType, 32);

    // Pass the hexcode for typeVars as a prop to dynamically type
    return (
        <ProfileTypeStyle bgColor={typeVars.hexCode}>
            {typeVars.icon}
        </ProfileTypeStyle>
    );
}
