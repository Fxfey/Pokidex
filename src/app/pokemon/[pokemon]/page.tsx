'use client';

import { getAdvancedView } from '@/app/lib/pokemon/fetchAdvancedView';
import { advancedPokemonView } from '@/app/types/advancedPokemonView';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import ProfileTitle from '@/app/components/ProfileTitle/ProfileTitle';
import ProfileContainer from '@/app/components/ProfileContainer/ProfileContainer';
import ProfileImage from '@/app/components/ProfileImage/ProfileImage';
import ProfileStats from '@/app/components/ProfileStats/ProfileStats';
import ProfileType from '@/app/components/ProfileType/ProfileType';
import Link from 'next/link';

export default function PokemonPage() {
    const params = useParams();

    const [pokemonData, setPokemonData] = useState<advancedPokemonView | null>(
        null,
    );

    const parsedPokemonName = params.pokemon;

    // Check the type of pokemon name param
    // If string assign, otherwise access array index
    const pokemonName =
        typeof parsedPokemonName === 'string'
            ? parsedPokemonName
            : parsedPokemonName?.[0];

    // Get advanced Pokemon view
    useEffect(() => {
        async function fetchData() {
            if (!pokemonName) return;
            const data = await getAdvancedView(pokemonName);
            setPokemonData(data);
        }

        fetchData();
        // Dependency of the name since its fetched from the URL
    }, [pokemonName]);

    // Capitalise the first letter
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
                        <div>
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-around   ',
                                    gap: '15px',
                                    marginBottom: '15px',
                                }}
                            >
                                {pokemonData.type?.map((currentType) => (
                                    <ProfileType
                                        key={currentType.type.name}
                                        pokemonType={currentType.type.name}
                                    />
                                ))}
                            </div>
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
                    </div>

                    <Link
                        href={'/'}
                        style={{
                            marginLeft: '15px',
                            backgroundColor: '#222222',
                            padding: '10px 15px',
                            fontSize: '16px',
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
