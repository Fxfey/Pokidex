import { getAllPokemon } from './lib/pokemon/fetchAll';

export default function Pokedex() {
    getAllPokemon();

    return <h1>hi</h1>;
}
