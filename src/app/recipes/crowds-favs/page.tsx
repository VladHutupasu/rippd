import db from '@lib/prisma';
import RecipeImageCard from '@shared/RecipeImageCard';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Crowd's favourite recipes",
  description:
    'Explore the most popular healthy and high protein recipes on Rippd. Discover crowd favourites that are delicious and nutritious, perfect for fueling your fitness journey.',
  keywords: [
    'popular recipes',
    'favourite healthy recipes',
    'top high-protein recipes',
    'fitness diet',
    'nutrition',
    'Rippd popular recipes',
  ],
};

export default async function CrowdsFavsrecipes() {
  // TODO: Fetch the crowds favs recipes from the database
  const recipes = await db.recipe.findMany({
    take: 10,
    orderBy: {
      createdAt: 'desc',
    },
  });

  recipes.map(recipe => (recipe.imageSrc = require(`@public/images/recipes/${recipe.imageSrc}`).default));

  return (
    <>
      <div className="text-xs font-light opacity-60 breadcrumbs sm:mb-4">
        <ul>
          <li>
            <Link href={'/'}>Home</Link>
          </li>
          <li>
            <Link href={'/'}>Recipes</Link>
          </li>
          <li>Crowd&apos;s favs</li>
        </ul>
      </div>
      <h1 className="font-bold text-xl lg:text-2xl mb-4">Crowd&apos;s favs</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {recipes.map(recipe => (
          <RecipeImageCard key={recipe.id} recipe={recipe} size="small" />
        ))}
      </div>
    </>
  );
}
