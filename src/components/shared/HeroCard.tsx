import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

export type HeroCardProps = {
  image: StaticImageData;
  imagePosition: 'left' | 'right';
  title: string;
  description: string;
  link?: string;
  linkText?: string;
};

export default function HeroCard({ image, imagePosition, title, description, link, linkText }: HeroCardProps) {
  return (
    <div className="hero bg-base-200 p-8 rounded-md">
      <div className={`hero-content p-0 gap-0 flex-col lg:flex-row${imagePosition === 'right' ? '-reverse' : ''}`}>
        <Image
          src={image}
          className="rounded-md w-[250px] h-[250px] lg:hidden"
          alt="Recipe description"
          width={250}
          height={250}
        />

        <Image
          src={image}
          className="rounded-md w-[400px] h-[400px] hidden lg:block"
          alt="Recipe description"
          width={400}
          height={400}
        />

        <div className="h-full">
          <h1 className="text-3xl lg:text-5xl xl:text-6xl font-bold">{title}</h1>
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
