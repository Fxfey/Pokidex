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

    return (
        <div>
            <h1>Pokedex</h1>

            {/* Pokedex grid */}
            <section>
                {pokemonViews ? (
                    pokemonViews.map((view) => (
                        <p key={view.id}>
                            {view.name} - #{view.id}
                        </p>
                    ))
                ) : (
                    // Perform loading
                    <p>Loading Pokémon...</p>
                )}
            </section>
        </div>
    );
}
