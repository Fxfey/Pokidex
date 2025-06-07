import { PokemonType } from 'pokenode-ts';
import { ProfileContainerStyled } from './ProfileContainer.styled';
import { ReactNode } from 'react';

export default function ProfileContainer({
    types,
    children,
}: Readonly<{ types: PokemonType[] | null; children: ReactNode }>) {
    return (
        <ProfileContainerStyled type={types || undefined}>
            {children}
        </ProfileContainerStyled>
    );
}
