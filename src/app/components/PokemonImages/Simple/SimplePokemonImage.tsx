import Image from 'next/image';
import { SimplePokemonImageStyle } from './SimplePokemonImage.styled';

export default function SimplePokemonImage({
    image,
    name,
}: Readonly<{ image: string | null | undefined; name: string | null }>) {
    return (
        <SimplePokemonImageStyle>
            {image ? (
                <Image
                    src={image}
                    alt={`A front facing view of the Pokemon ${name}`}
                    fill
                />
            ) : (
                // No image URL
                <p>Sorry, no image exists</p>
            )}
        </SimplePokemonImageStyle>
    );
}
