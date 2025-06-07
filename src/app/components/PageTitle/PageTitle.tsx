import { ReactNode } from 'react';
import { StyledTitle } from './PageTitle.styled';

type TitleProps = {
    children: ReactNode;
};

export default function Title({ children }: Readonly<TitleProps>) {
    return <StyledTitle>{children}</StyledTitle>;
}
