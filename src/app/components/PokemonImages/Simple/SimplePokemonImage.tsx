import Image from 'next/image';
import { SimplePokemonImageStyle } from './SimplePokemonImage.styled';

export default function SimplePokemonImage({
    image,
    name,
}: Readonly<{ image: string; name: string }>) {
    return (
        <SimplePokemonImageStyle>
            <Image
                src={image}
                alt={`A front facing view of the Pokemon ${name}`}
                fill
            />
        </SimplePokemonImageStyle>
    );
}
