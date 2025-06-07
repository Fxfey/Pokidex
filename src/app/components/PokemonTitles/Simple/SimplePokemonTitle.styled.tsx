'use client';
import styled from 'styled-components';

export const SimplePokemonTitleStyle = styled.h2`
    background-color: var(--white-2);
    color: var(--black-1);
    font-weight: bold;
    text-align: center;
    margin: 0 12px;
    padding: 8px 0px;
    border-radius: 0 0 5px 5px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
        rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
        rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

    display: flex;
    justify-content: space-around;

    @media (prefers-color-scheme: light) {
        background-color: var(--grey-1);
    }
`;
