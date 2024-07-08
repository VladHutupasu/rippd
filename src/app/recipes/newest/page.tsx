import db from '@lib/prisma';
import RecipeImageCard from '@shared/RecipeImageCard';
import Link from 'next/link';

export default async function NewestRecipes() {
  // TODO: Fetch the newest recipes from the database
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
          <li>Newest Recipes</li>
        </ul>
      </div>
      <h1 className="font-bold text-xl lg:text-2xl mb-4">Newest recipes</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {recipes.map(recipe => (
          <RecipeImageCard key={recipe.id} recipe={recipe} size="small" />
        ))}
      </div>
    </>
  );
}
