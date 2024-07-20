import db from '@lib/prisma';
import RecipeImageCard from '@shared/RecipeImageCard';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'All recipes',
  description:
    'Discover all of our healthy and high protein recipes on Rippd. Stay updated with new additions to fuel your fitness journey with delicious and nutritious meals.',
  keywords: [
    'all recipes',
    'healthy recipes',
    'high-protein recipes',
    'fitness diet',
    'nutrition',
    'Rippd all recipes',
  ],
  alternates: {
    canonical: 'https://rippd.io/recipes/all',
  },
};

export default async function AllRecipes() {
  // TODO: Fetch all recipes from the database
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
          <li>All Recipes</li>
        </ul>
      </div>
      <h1 className="font-bold text-xl lg:text-2xl mb-4">All recipes</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {recipes.map(recipe => (
          <RecipeImageCard key={recipe.id} recipe={recipe} size="small" />
        ))}
      </div>
    </>
  );
}
