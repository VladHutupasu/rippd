import Hero from '@shared/components/shared/Hero';
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
      <Hero recipe={recipes[0]} />

      <RecipeImageCarousel title="Newest recipes" recipes={recipes} />

      <RecipeImageCarousel title="Crowd's favs" recipes={recipes} />
    </section>
  );
}
