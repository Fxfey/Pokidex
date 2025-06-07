import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
    0% {
        background-position: -200% 0;
    }
    100% {
        background-position: 400% 0;
    }
`;

export const SkeltonLoaderStyled = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 6px;

    background-color: var(--black-2);
    border: 2px solid var(--white-2);

    background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.12) 50%,
        rgba(255, 255, 255, 0) 100%
    );
    background-size: 200% 100%;
    background-repeat: no-repeat;

    @media (prefers-color-scheme: light) {
        background-color: var(--white-2);
        border: 2px solid var(--grey-1);

        background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(40, 40, 40, 0.12) 50%,
            rgba(255, 255, 255, 0) 100%
        );
        background-size: 200% 100%;
        background-repeat: no-repeat;
    }

    animation: ${shimmer} 1.5s linear infinite;
`;

export const SkeltonLoaderTitle = styled.div`
    height: 40px;
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

export const SkeltonLoaderImage = styled.div`
    height: 200px;
`;

export default function SkeletonLoader() {
    return (
        <>
            {Array.from({ length: 25 }).map((_, index) => (
                <SkeltonLoaderStyled key={index}>
                    <SkeltonLoaderTitle />
                    <SkeltonLoaderImage />
                </SkeltonLoaderStyled>
            ))}
        </>
    );
}
