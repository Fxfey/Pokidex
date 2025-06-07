import { SimplePokemonTitleStyle } from './SimplePokemonTitle.styled';

export default function SimplePokemonTitle({
    name,
    id,
}: Readonly<{ name: string | null; id: number | null }>) {
    return (
        <SimplePokemonTitleStyle>
            <span>{name}</span>
            <span>#{id}</span>
        </SimplePokemonTitleStyle>
    );
}
