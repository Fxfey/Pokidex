import { PokemonType } from 'pokenode-ts';
import { SimplePokemonTypesStyled } from './SimplePokemonTypes.styled';
import SimpleType from './SimpleType';

export default function SimplePokemonTypes({
    types,
    name,
}: Readonly<{ types: PokemonType[] | null; name: string | null }>) {
    return (
        <SimplePokemonTypesStyled>
            {types?.map((type) => (
                <SimpleType
                    key={`${name}-type-${type.type.name}`}
                    type={type.type.name}
                />
            ))}
        </SimplePokemonTypesStyled>
    );
}
