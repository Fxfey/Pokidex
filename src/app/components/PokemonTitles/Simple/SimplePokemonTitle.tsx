import { SimplePokemonTitleStyle } from './SimplePokemonTitle.styled';

export default function SimplePokemonTitle({
    name,
}: Readonly<{ name: string | null }>) {
    return <SimplePokemonTitleStyle>{name}</SimplePokemonTitleStyle>;
}
