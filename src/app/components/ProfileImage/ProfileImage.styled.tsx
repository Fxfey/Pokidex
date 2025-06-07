'use client';
import styled from 'styled-components';

export const ProfileImageStyled = styled.div`
    position: relative;
    margin: auto;
    margin-top: 25px;
    margin-bottom: 25px;
    height: 250px;

    @media screen and (min-width: 768px) {
        height: 300px;
        width: 300px;
    }

    @media screen and (min-width: 1024px) {
        height: 450px;
        width: 450px;
    }

    @media screen and (min-width: 1440px) {
        height: 550px;
        width: 550px;
    }
`;
