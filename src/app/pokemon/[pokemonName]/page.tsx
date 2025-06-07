'use client';

import { useParams } from 'next/navigation';

export default function PokemonPage() {
    const params = useParams();
    const name = params.pokemonName;

    return (
        <div>
            <h1>Pokemon: {name}</h1>
        </div>
    );
}
