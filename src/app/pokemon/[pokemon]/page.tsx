'use client';

import { getAdvancedView } from '@/app/lib/pokemon/fetchAdvancedView';
import { advancedPokemonView } from '@/app/types/advancedPokemonView';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import ProfileTitle from '@/app/components/ProfileTitle/ProfileTitle';
import ProfileContainer from '@/app/components/ProfileContainer/ProfileContainer';
import ProfileImage from '@/app/components/ProfileImage/ProfileImage';
import ProfileStats from '@/app/components/ProfileStats/ProfileStats';
import Link from 'next/link';

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

    async function getPokemonInformation() {
        if (!pokemonName) return;

        const data = await getAdvancedView(pokemonName);
        setPokemonData(data);
    }

    getPokemonInformation();

    console.log(pokemonData);

    const styledName =
        (pokemonName ?? '').charAt(0).toUpperCase() +
        (pokemonName ?? '').slice(1);

    return (
        <>
            {pokemonData ? (
                <ProfileContainer types={pokemonData.type}>
                    <ProfileTitle>{styledName}</ProfileTitle>
                    <div className="flex h-[90%] items-center flex-col sm:flex-row">
                        <span
                            style={{
                                width: '65%',
                            }}
                        >
                            <ProfileImage
                                image={pokemonData.image}
                                name={pokemonData.name}
                            />
                        </span>
                        <ProfileStats
                            weight={pokemonData.weight}
                            height={pokemonData.height}
                            id={pokemonData.id}
                            name={pokemonData.name}
                            type={pokemonData.type}
                            image={null}
                            stats={pokemonData.stats}
                        />
                    </div>

                    <Link
                        href={'/'}
                        style={{
                            marginLeft: '15px',
                            backgroundColor: '#222222',
                            padding: '5px 10px',
                            borderRadius: '5px',
                        }}
                    >
                        Take me back!
                    </Link>
                </ProfileContainer>
            ) : (
                <p>Loading...</p>
            )}
        </>
    );
}
