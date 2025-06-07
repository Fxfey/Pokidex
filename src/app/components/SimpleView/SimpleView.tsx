import { simplePokemonView } from '@/app/types/simplePokemonView';
import { SimpleViewStyled } from './SimpleView.styled';
import SimplePokemonImage from '../PokemonImages/Simple/SimplePokemonImage';

export default function SimplePokemonView({
    data,
}: Readonly<{ data: simplePokemonView }>) {
    const { id, name, type, image } = data;
    console.log(type);
    return (
        <SimpleViewStyled>
            <SimplePokemonImage image={image} name={name} />
            {/* Image Component */}
            {name}
            {/* Name Component */}
            {/* id Component */}
            {/* Type Component */}
        </SimpleViewStyled>
    );
}
