import { Recipe } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';

export default function RecipeImageCarousel({ recipes }: { recipes: Recipe[] }) {
  return (
    <>
      <div className="carousel carousel-center max-w-full p-4 pl-0 space-x-4 bg-transparent rounded-box">
        {recipes.map(recipe => (
          <div key={recipe.id} className="carousel-item ">
            <Link href={`recipe/${recipe.id}`} className="flex flex-col gap-1">
              <Image
                src={recipe.imageSrc}
                className="rounded-box object-cover h-44 sm:hidden"
                alt={recipe.description}
                placeholder="blur"
                width={176}
                height={176}
              />

              <Image
                src={recipe.imageSrc}
                className="rounded-box object-cover h-56 hidden sm:block"
                alt={recipe.description}
                placeholder="blur"
                height={224}
                width={224}
              />
              {/* TODO: Fix word wrap if this is too long */}
              <p className="font-normal text-center text-sm">{recipe.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
