import { PokedexContainerStyled } from './PokedexContainer.styled';
import { ReactNode } from 'react';

type PokedexContainerProps = {
    children: ReactNode;
};

export default function PokedexContainer({
    children,
}: Readonly<PokedexContainerProps>) {
    return <PokedexContainerStyled>{children}</PokedexContainerStyled>;
}
