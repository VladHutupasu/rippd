import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

export interface RecipeImage {
  id: string;
  src: StaticImageData;
  alt: string;
  description: string;
}

export default function RecipeImageCarousel({ images }: { images: RecipeImage[] }) {
  return (
    <>
      <div className="carousel carousel-center max-w-full p-4 space-x-4 bg-transparent rounded-box">
        {images.map((image, index) => (
          <div key={index} className="carousel-item ">
            {/* TODO: Use image id here */}
            <Link href={`recipe/${image.id}`} className="flex flex-col gap-1">
              <Image
                src={image.src}
                className="rounded-box object-cover w-44 sm:w-56 h-full"
                alt={image.alt}
                placeholder="blur"
                width={224}
              />
              <p className="font-semibold text-center text-sm">{image.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
