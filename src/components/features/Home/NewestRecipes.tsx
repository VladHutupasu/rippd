import RecipeImageCarousel, { RecipeImage } from '@shared/components/shared/RecipeImageCarousel';
import chiaPudding from '../../../../public/recipes/chia-pudding.jpeg';
import codFillet from '../../../../public/recipes/cod-fillet.jpeg';
import hummus from '../../../../public/recipes/hummus.jpeg';
import pastaBolognese from '../../../../public/recipes/pasta-bolognese.jpeg';
import smoothie from '../../../../public/recipes/smoothie.jpeg';
import tunaSalad from '../../../../public/recipes/tuna-salad.jpeg';

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
    {
      id: 'test',
      src: tunaSalad,
      alt: 'Tuna salad',
      description: 'Tuna salad',
    },
    {
      id: 'test',
      src: pastaBolognese,
      alt: 'Pasta bolognese',
      description: 'Pasta bolognese',
    },
  ];

  return (
    <section>
      <h1 className="font-semibold text-xl">Newest recipes</h1>
      <RecipeImageCarousel images={newestRecipes} />
    </section>
  );
}
