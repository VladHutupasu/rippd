import LatestRecipeCard from '@shared/components/shared/LatestRecipeCard';
import RecipeImageCarousel from '@shared/components/shared/RecipeImageCarousel';
import db from '@shared/lib/prisma';

// Revalidate HOME PAGE every 5 minutes
export const revalidate = 300;

export default async function Home() {
  const recipes = await db.recipe.findMany({
    take: 10,
    orderBy: {
      createdAt: 'desc',
    },
  });
  recipes.map(recipe => (recipe.imageSrc = require(`../../public/recipes/${recipe.imageSrc}`).default));

  return (
    <section className="flex flex-col gap-8 md:gap-14">
      <section className="absolute inset-x-0 bg-primary text-base-100 px-3 py-5">
        <h1 className="text-xl font-semibold">Welcome 👋</h1>
        <p className="text-sm pt-2 font-medium">Discover healthy recipes for your everyday life</p>
      </section>

      <section className="pt-32">
        <LatestRecipeCard recipe={recipes[0]} />
      </section>

      <section>
        <h1 className="font-bold text-xl">Newest recipes</h1>
        <RecipeImageCarousel recipes={recipes} />
      </section>

      <section>
        <h1 className="font-bold text-xl">Crowd&apos;s favs</h1>
        <RecipeImageCarousel recipes={recipes} />
      </section>
    </section>
  );
}
