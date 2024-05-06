import RecipeImageCarousel, { RecipeImage } from '@shared/components/shared/RecipeImageCarousel';
import chiaPudding from '../../../../public/recipes/chia-pudding.jpeg';
import codFillet from '../../../../public/recipes/cod-fillet.jpeg';
import hummus from '../../../../public/recipes/hummus.jpeg';
import smoothie from '../../../../public/recipes/smoothie.jpeg';

export default function NewestRecipes() {
  const newestRecipes: RecipeImage[] = [
    {
      id: 'test',
      src: hummus,
      alt: 'Hummus',
      description: 'Hummus',
    },
    {
      id: 'test',
      src: chiaPudding,
      alt: 'Chia pudding',
      description: 'Chia pudding',
    },
    {
      id: 'test',
      src: codFillet,
      alt: 'Cod fillet',
      description: 'Cod fillet',
    },
    {
      id: 'test',
      src: smoothie,
      alt: 'Smoothie',
      description: 'Smoothie',
    },
  ];

  return (
    <section>
      <h1 className="font-semibold text-xl">Newest recipes</h1>
      <RecipeImageCarousel images={newestRecipes} />
    </section>
  );
}
