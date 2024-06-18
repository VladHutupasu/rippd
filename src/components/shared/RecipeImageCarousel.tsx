import { Recipe } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';

export default function RecipeImageCarousel({ recipes, title }: { recipes: Recipe[]; title: string }) {
  return (
    <section>
      <div className="flex justify-between">
        <h1 className="font-bold text-xl">{title}</h1>
        <Image className=" opacity-40" src="/images/swipe-left.svg" alt="swipe-left" width={20} height={20} />
      </div>
      <div className="carousel carousel-center max-w-full pt-2 space-x-4 bg-transparent">
        {recipes.map(recipe => (
          <div key={recipe.id} className="carousel-item">
            <Link href={`recipe/${recipe.id}`} className="flex flex-col items-start gap-1">
              <Image
                src={recipe.imageSrc}
                className="rounded-md object-cover h-44 sm:hidden"
                alt={recipe.description}
                placeholder="blur"
                width={176}
                height={176}
              />

              <Image
                src={recipe.imageSrc}
                className="rounded-md object-cover h-56 hidden sm:block"
                alt={recipe.description}
                placeholder="blur"
                height={224}
                width={224}
              />
              {/* TODO: Fix word wrap if this is too long */}
              <p className="font-medium text-center text-sm">{recipe.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
