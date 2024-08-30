import { Recipe } from '@prisma/client';
import SwipeLeftIcon from '@public/images/swipe-left.svg';
import Image from 'next/image';
import RecipeImageCard from './RecipeImageCard';

export default function RecipeImageCarousel({ recipes, title }: { recipes: Recipe[]; title: string }) {
  return (
    <section>
      <div className="flex justify-between items-center">
        <h2 className="relative z-10 font-bold text-xl lg:text-2xl">
          <span className="absolute left-[25px] xl:left-[40px] bottom-[5px] w-[60px] xl:w-[90px] h-[7px] transform -skew-x-12 -translate-x-1/2 bg-primary bg-opacity-50 z-[-1]" />
          {title}
        </h2>
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
