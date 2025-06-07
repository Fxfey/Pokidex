import { advancedPokemonView } from '@/app/types/advancedPokemonView';
import { ProfileStatsStyled } from './ProfileStats.styled';
import { ProfileStatStyled } from './ProfileStat.styled';
import { Heart, Rabbit, Sword, Shield, Weight, Ruler } from 'lucide-react';

export default function ProfileStats({
    weight,
    height,
    stats,
}: Readonly<advancedPokemonView>) {
    return (
        <ProfileStatsStyled>
            <ProfileStatStyled>
                <span>HP: {stats?.hp}</span>
                <Heart />
            </ProfileStatStyled>
            <ProfileStatStyled>
                <span>Speed: {stats?.speed}</span>
                <Rabbit />
            </ProfileStatStyled>
            <ProfileStatStyled>
                <span>Attack: {stats?.attack}</span>
                <Sword />
            </ProfileStatStyled>
            <ProfileStatStyled>
                <span>Defense: {stats?.defense}</span>
                <Shield />
            </ProfileStatStyled>
            <ProfileStatStyled>
                <span>Weight: {weight ? weight / 10 : 'N/A'}kg</span>
                <Weight />
            </ProfileStatStyled>
            <ProfileStatStyled>
                <span>Weight: {height ? height / 10 : 'N/A'}m</span>
                <Ruler />
            </ProfileStatStyled>
        </ProfileStatsStyled>
    );
}
