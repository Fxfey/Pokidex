import { simplePokemonView } from '@/app/types/simplePokemonView';
import { SimpleViewStyled } from './SimpleView.styled';
import SimplePokemonImage from '../PokemonImages/Simple/SimplePokemonImage';
import SimplePokemonTitle from '../PokemonTitles/Simple/SimplePokemonTitle';
import SimplePokemonTypes from '../PokemonTypes/Simple/SimplePokemonTypes';

export default function SimplePokemonView({
    data,
}: Readonly<{ data: simplePokemonView }>) {
    const { id, name, type, image } = data;

    const styledName =
        (name ?? '').charAt(0).toUpperCase() + (name ?? '').slice(1);
    return (
        <SimpleViewStyled>
            {/* Title Component */}
            <SimplePokemonTitle name={styledName} id={id} />
            {/* Image Component */}
            <SimplePokemonImage image={image} name={name} />
            {/* Type Component */}
            <SimplePokemonTypes types={type} />
        </SimpleViewStyled>
    );
}
