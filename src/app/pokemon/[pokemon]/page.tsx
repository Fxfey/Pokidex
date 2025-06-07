'use client';

import { getAdvancedView } from '@/app/lib/pokemon/fetchAdvancedView';
import { advancedPokemonView } from '@/app/types/advancedPokemonView';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import ProfileTitle from '@/app/components/ProfileTitle/ProfileTitle';
import ProfileContainer from '@/app/components/ProfileContainer/ProfileContainer';
import ProfileImage from '@/app/components/ProfileImage/ProfileImage';

export default function PokemonPage() {
    const params = useParams();

    const [pokemonData, setPokemonData] = useState<advancedPokemonView | null>(
        null,
    );

    const parsedPokemonName = params.pokemon;
    const pokemonName =
        typeof parsedPokemonName === 'string'
            ? parsedPokemonName
            : parsedPokemonName?.[0];

    useEffect(() => {
        async function getPokemonInformation() {
            if (!pokemonName) return;

            const data = await getAdvancedView(pokemonName);
            setPokemonData(data);
        }

        getPokemonInformation();
    }, [pokemonName]);

    console.log(pokemonData);

    const styledName =
        (pokemonName ?? '').charAt(0).toUpperCase() +
        (pokemonName ?? '').slice(1);

    return (
        <>
            {pokemonData ? (
                <ProfileContainer types={pokemonData.type}>
                    <ProfileTitle>{styledName}</ProfileTitle>
                    <div
                        style={{
                            display: 'flex',
                            height: '100%',
                            alignItems: 'center',
                        }}
                    >
                        <span
                            style={{
                                width: '50%',
                            }}
                        >
                            <ProfileImage
                                image={pokemonData.image}
                                name={pokemonData.name}
                            />
                        </span>
                        {/* <ProfileStats /> */}
                    </div>
                </ProfileContainer>
            ) : (
                <p>loading</p>
            )}
        </>
    );
}
