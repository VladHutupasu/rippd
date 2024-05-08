import { Recipe } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';

export default function RecipeImageCarousel({ recipes }: { recipes: Recipe[] }) {
  console.log('IMAGE SRC', recipes[0].imageSrc);

  return (
    <>
      <div className="carousel carousel-center max-w-full p-4 pl-0 space-x-4 bg-transparent rounded-box">
        {recipes.map(recipe => (
          <div key={recipe.id} className="carousel-item ">
            {/* TODO: Use image id here */}
            <Link href={`recipe/${recipe.id}`} className="flex flex-col gap-1">
              <Image
                src={recipe.imageSrc}
                className="rounded-box object-cover w-44 sm:w-56 h-full"
                alt={recipe.description}
                placeholder="blur"
                height={299}
                width={224}
              />
              {/* TODO: Fix word wrap if this is too long */}
              <p className="font-semibold text-center text-sm">{recipe.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
