import { simplePokemonView } from '@/app/types/simplePokemonView';
import { SimpleViewStyled } from './SimpleView.styled';
import SimplePokemonImage from '../PokemonImages/Simple/SimplePokemonImage';
import SimplePokemonTitle from '../PokemonTitles/Simple/SimplePokemonTitle';

export default function SimplePokemonView({
    data,
}: Readonly<{ data: simplePokemonView }>) {
    const { id, name, type, image } = data;
    console.log(type);
    return (
        <SimpleViewStyled>
            <SimplePokemonTitle name={name} />
            {/* Image Component */}
            <SimplePokemonImage image={image} name={name} />
            {/* Name Component */}
            {/* id Component */}
            {/* Type Component */}
        </SimpleViewStyled>
    );
}
