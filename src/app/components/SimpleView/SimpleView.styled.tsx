'use client';
import styled from 'styled-components';

export const SimpleViewStyled = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background-color: var(--black-2);
    border: 2px solid var(--white-2);
    border-radius: 6px;

    @media (prefers-color-scheme: light) {
        background-color: var(--white-2);
        border: 2px solid var(--grey-1);
    }
`;
