'use client';
import styled from 'styled-components';

type SimpleTypeStyledProps = {
    type?: string;
};

export const SimpleTypeStyled = styled.div<SimpleTypeStyledProps>`
    /* Perform a switch case for the type to return that color */
    background-color: ${({ type }) => {
        switch (type) {
            case 'fire':
                return '#F78E6B';
            case 'water':
                return '#7AC7E3';
            case 'grass':
                return '#7ECD7C';
            case 'electric':
                return '#FFF176';
            case 'psychic':
                return '#F5A6C4';
            case 'dragon':
                return '#9C8FF3';
            case 'bug':
                return '#A8D5A3';
            case 'fighting':
                return '#F48C8C';
            case 'flying':
                return '#92B6F4';
            case 'ghost':
                return '#9F91D6';
            case 'ground':
                return '#D6B98A';
            case 'ice':
                return '#A6D8E7';
            case 'normal':
                return '#C2BEB5';
            case 'poison':
                return '#B28DD9';
            case 'rock':
                return '#C6B280';
            default:
                return 'white'; // fallback color
        }
    }};

    border-radius: 0 5px 5px 0;
    padding: 2px;
    padding-right: 5px;
    margin-bottom: 6px;
    height: 35px;
    width: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--black-1);
    box-shadow: rgba(0, 0, 0, 0.4) 2px 0px 4px,
        rgba(0, 0, 0, 0.3) 7px 0px 13px -3px,
        rgba(0, 0, 0, 0.2) -3px 0px 0px inset;

    /* Add contrast to the type icon */
    svg {
        fill: rgba(0, 0, 0, 0.2);
    }
`;
