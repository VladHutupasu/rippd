import { Recipe } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';
import HeroImage from '../../../public/isometric/hero.png';

export default function Hero({ recipe }: { recipe: Recipe }) {
  return (
    <div className="hero bg-transparent">
      <div className="hero-content p-0 flex-col lg:flex-row-reverse">
        <Image
          src={HeroImage}
          className="rounded-md w-[300px] h-[300px] lg:hidden"
          alt="Recipe description"
          width={300}
          height={300}
        />

        <Image
          src={HeroImage}
          className="rounded-md w-[400px] h-[400px] hidden lg:block"
          alt="Recipe description"
          width={500}
          height={500}
        />

        <div className="h-full">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold">Protein packed healthy recipes</h1>
          <p className="py-4 md:py-6">
            Discover delicious, high-protein meals that support your healthy lifestyle. Perfect for fueling your day and
            achieving your fitness goals.
          </p>
          <Link href={`recipe/${recipe.id}`}>
            <button className="btn btn-primary mt-auto">Check out our latest recipe</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
