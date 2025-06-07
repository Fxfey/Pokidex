'use client';
import styled from 'styled-components';

export const PokedexContainerStyled = styled.div`
    display: grid;
    grid-template-columns: auto;
    padding: 32px;
    gap: 24px;

    @media screen and (min-width: 768px) {
        grid-template-columns: auto auto;
    }

    @media screen and (min-width: 1024px) {
        grid-template-columns: auto auto auto;
    }

    @media screen and (min-width: 1440px) {
        grid-template-columns: auto auto auto auto auto;
        padding: 32px 128px;
    }
`;
