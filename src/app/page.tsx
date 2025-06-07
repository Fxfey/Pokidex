'use client';

import { useEffect, useState } from 'react';
import { getAllPokemon } from './lib/pokemon/fetchAll';
import { getSimpleView } from './lib/pokemon/fetchSimpleView';
import { simplePokemonView } from './types/simplePokemonView';

import Title from './components/PageTitle/PageTitle';
import SimplePokemonView from './components/SimpleView/SimpleView';
import PokedexContainer from './components/PokedexContainer/PokedexContainer';
import SkeletonLoader from './components/SkeletonLoader/SkeletonLoader';

export type allPokemon = {
    name: string;
    url: string;
};

export default function Pokedex() {
    const [pokemonViews, setPokemonViews] = useState<
        simplePokemonView[] | null
    >(null);

    useEffect(() => {
        async function fetchPokemon() {
            const allPokemon = await getAllPokemon();

            const constructSimpleView = await Promise.all(
                allPokemon.map((thePokemon) => getSimpleView(thePokemon.name)),
            );
            setPokemonViews(constructSimpleView);
        }

        fetchPokemon();
    }, []);

    return (
        <div>
            <Title>Pokedex</Title>

            {/* Pokedex grid */}
            <PokedexContainer>
                {pokemonViews ? (
                    pokemonViews.map((thePokemon) => (
                        <a
                            href={`/pokemon/${thePokemon.name}`}
                            key={thePokemon.name}
                        >
                            <SimplePokemonView data={thePokemon} />
                        </a>
                    ))
                ) : (
                    <SkeletonLoader />
                )}
            </PokedexContainer>
        </div>
    );
}
