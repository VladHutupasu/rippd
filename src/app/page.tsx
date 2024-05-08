import RecipeImageCarousel from '@shared/components/shared/RecipeImageCarousel';
import db from '@shared/lib/prisma';

export default async function Home() {
  const recipes = await db.recipe.findMany();
  recipes.map(recipe => (recipe.imageSrc = require(`../../public/recipes/${recipe.imageSrc}`).default));

  return (
    <section className="flex flex-col gap-8 md:gap-14">
      <section>
        <h1 className="font-semibold text-xl">Newest recipes</h1>
        <RecipeImageCarousel recipes={recipes} />
      </section>

      <section>
        <h1 className="font-semibold text-xl">Crowd&apos; favs</h1>
        <RecipeImageCarousel recipes={recipes} />
      </section>
    </section>
  );
}
