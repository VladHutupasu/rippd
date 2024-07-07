import HeroImage from '@public/images/isometric/hero.png';
import Image from 'next/image';

export default function SubHero() {
  return (
    <div className="hero bg-base-200 p-8 rounded-md">
      <div className="hero-content p-0 flex-col lg:flex-row">
        <Image
          src={HeroImage}
          className="rounded-md w-[250px] h-[250px] lg:hidden"
          alt="Recipe description"
          width={250}
          height={250}
        />

        <Image
          src={HeroImage}
          className="rounded-md w-[400px] h-[400px] hidden lg:block"
          alt="Recipe description"
          width={500}
          height={500}
        />

        <div className="h-full">
          <h1 className="text-3xl lg:text-5xl xl:text-6xl font-bold">Eat healthy, stay strong</h1>
          <p className="py-4 md:py-6">
            We strive to provide high-protein meals designed to keep your body healthy and energized. Perfect for
            maintaining a strong, active lifestyle.
          </p>
        </div>
      </div>
    </div>
  );
}
