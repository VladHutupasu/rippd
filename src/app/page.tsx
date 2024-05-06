import CrowdFavoriteRecipes from '@shared/components/features/Home/CrowdFavoriteRecipes';
import NewestRecipes from '@shared/components/features/Home/NewestRecipes';

export default async function Home() {
  return (
    <section className="flex flex-col gap-8 md:gap-14">
      <NewestRecipes />
      <CrowdFavoriteRecipes />
    </section>
  );
}
