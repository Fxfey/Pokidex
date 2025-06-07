import { simplePokemonView } from '@/app/types/simplePokemonView';
import { SimpleViewStyled } from './SimpleView.styled';
import SimplePokemonImage from '../PokemonImages/Simple/SimplePokemonImage';
import SimplePokemonTitle from '../PokemonTitles/Simple/SimplePokemonTitle';

export default function SimplePokemonView({
    data,
}: Readonly<{ data: simplePokemonView }>) {
    const { id, name, type, image } = data;
    console.log(type);

    const styledName =
        (name ?? '').charAt(0).toUpperCase() + (name ?? '').slice(1);
    return (
        <SimpleViewStyled>
            {/* Title Component */}
            <SimplePokemonTitle name={styledName} id={id} />
            {/* Image Component */}
            <SimplePokemonImage image={image} name={name} />

            {/* Type Component */}
        </SimpleViewStyled>
    );
}
