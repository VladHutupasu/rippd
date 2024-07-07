import db from '@lib/prisma';
import LatestArticleHeroImage from '@public/images/isometric/heart.png';
import LatestRecipeHeroImage from '@public/images/isometric/hero.png';
import HeroCard, { HeroCardProps } from '@shared/HeroCard';
import RecipeImageCarousel from '@shared/RecipeImageCarousel';

// Revalidate HOME PAGE every 5 minutes
export const revalidate = 300;

export default async function Home() {
  const recipes = await db.recipe.findMany({
    take: 10,
    orderBy: {
      createdAt: 'desc',
    },
  });
  recipes.map(recipe => (recipe.imageSrc = require(`@public/images/recipes/${recipe.imageSrc}`).default));

  const latestRecipeHero: HeroCardProps = {
    image: LatestRecipeHeroImage,
    imagePosition: 'right',
    title: 'Protein packed healthy recipes',
    description:
      'Discover delicious, high-protein meals that support your healthy lifestyle. Perfect for fueling your day and achieving your fitness goals.',
    link: `recipe/${recipes[0].id}`,
    linkText: 'Check out our latest recipe',
  };

  const latestArticleHero: HeroCardProps = {
    image: LatestArticleHeroImage,
    imagePosition: 'left',
    title: 'The benefits of a high-protein diet',
    description:
      'Learn how a high-protein diet can help you lose weight, build muscle, and improve your overall health. Discover the benefits and how to get started.',
    link: '/blog/why-is-protein-important',
    linkText: 'Read more',
  };

  return (
    <section className="flex flex-col gap-8 md:gap-14">
      <HeroCard {...latestRecipeHero} />

      <RecipeImageCarousel title="Newest recipes" recipes={recipes} />

      <HeroCard {...latestArticleHero} />

      <RecipeImageCarousel
        title="Crowd's favs"
        recipes={[...recipes].sort((a, b) => a.createdAt.getMilliseconds() - b.createdAt.getMilliseconds())}
      />
    </section>
  );
}
