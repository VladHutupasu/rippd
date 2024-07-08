import { Recipe } from '@prisma/client';
import SwipeLeftIcon from '@public/images/swipe-left.svg';
import Image from 'next/image';
import RecipeImageCard from './RecipeImageCard';

export default function RecipeImageCarousel({ recipes, title }: { recipes: Recipe[]; title: string }) {
  return (
    <section>
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-xl lg:text-2xl">{title}</h1>
        <Image className="h-5 w-5 opacity-40" src={SwipeLeftIcon} alt="swipe-left" width={20} height={20} />
      </div>
      <div className="carousel carousel-center max-w-full pt-2 space-x-4 bg-transparent">
        {recipes.map(recipe => (
          <div key={recipe.id} className="carousel-item">
            <RecipeImageCard recipe={recipe} size="normal" />
          </div>
        ))}
      </div>
    </section>
  );
}
