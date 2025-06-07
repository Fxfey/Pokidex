import Image from 'next/image';
import { ProfileImageStyled } from './ProfileImage.styledd';

export default function ProfileImage({
    image,
    name,
}: Readonly<{ image: string | null | undefined; name: string | null }>) {
    return (
        <ProfileImageStyled>
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
        </ProfileImageStyled>
    );
}
