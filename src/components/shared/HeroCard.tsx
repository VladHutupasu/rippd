import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

export type HeroCardProps = {
  image: StaticImageData;
  imagePosition: 'left' | 'right';
  imageAlt: string;
  title: string;
  titleHeadingNumber: 'h1' | 'h2';
  description: string;
  link?: string;
  linkText?: string;
};

export default function HeroCard({
  image,
  imagePosition,
  imageAlt,
  title,
  titleHeadingNumber,
  description,
  link,
  linkText,
}: HeroCardProps) {
  return (
    <div className="hero bg-base-200 p-8 rounded-md">
      <div
        className={`hero-content p-0 gap-0 flex-col ${
          imagePosition === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'
        }`}
      >
        <Image
          src={image}
          className="rounded-md w-[250px] h-[250px] lg:hidden"
          alt={imageAlt}
          width={250}
          height={250}
          // This is not working since it will download the image regardless of hidden attribute
          // priority={true}
        />

        <Image
          src={image}
          className="rounded-md w-[400px] h-[400px] hidden lg:block"
          alt={imageAlt}
          width={400}
          height={400}
          // This is not working since it will download the image regardless of hidden attribute
          // priority={true}
        />

        <div className="h-full">
          {titleHeadingNumber === 'h1' && <h1 className="text-3xl lg:text-5xl xl:text-6xl font-bold">{title}</h1>}
          {titleHeadingNumber === 'h2' && <h2 className="text-3xl lg:text-5xl xl:text-6xl font-bold">{title}</h2>}
          <p className="py-4 md:py-6">{description}</p>
          {link && linkText && (
            <Link href={link}>
              <button className="btn btn-neutral">{linkText}</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
