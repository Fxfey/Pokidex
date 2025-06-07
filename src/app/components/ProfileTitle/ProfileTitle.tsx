import { ReactNode } from 'react';
import { ProfileTitleStyled } from './ProfileTitle.styled';

type TitleProps = {
    children: ReactNode;
};

export default function ProfileTitle({ children }: Readonly<TitleProps>) {
    return <ProfileTitleStyled>{children}</ProfileTitleStyled>;
}
