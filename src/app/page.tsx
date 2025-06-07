'use client';

import { useEffect, useState } from 'react';
import { getAllPokemon } from './lib/pokemon/fetchAll';
import { getSimpleView } from './lib/pokemon/fetchSimpleView';
import { simplePokemonView } from './types/simplePokemonView';

export type allPokemon = {
    name: string;
    url: string;
};

export default function Pokedex() {
    const [pokemon, setPokemon] = useState<allPokemon[] | null>(null);
    const [pokemonViews, setPokemonViews] = useState<
        simplePokemonView[] | null
    >(null);

    useEffect(() => {
        async function fetchPokemon() {
            const allPokemon = await getAllPokemon();
            setPokemon(allPokemon);

            const constructSimpleView = await Promise.all(
                allPokemon.map((thePokemon) => getSimpleView(thePokemon.name)),
            );
            setPokemonViews(constructSimpleView);
        }

        fetchPokemon();
    }, []);

    // Perform loading view here
    if (!pokemon || !pokemonViews) return <p>Loading...</p>;

    return (
        <div>
            {pokemonViews.map((view) => (
                <p key={view.id}>
                    {view.name} - #{view.id}
                </p>
            ))}
        </div>
    );
}
