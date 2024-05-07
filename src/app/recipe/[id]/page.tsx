import {
  BoltIcon,
  ClockIcon,
  Cog8ToothIcon,
  FireIcon,
  RocketLaunchIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import cod from '../../../../public/recipes/cod-fillet.jpeg';

export default function RecipeDetails({ params }: { params: { id: string } }) {
  const recipeId = params.id;
  const recipe = {
    id: recipeId,
    name: 'Cod fillet with veggies',
    description: 'A delicious and healthy meal that is easy to make and perfect for a weeknight dinner.',
    imageSrc: '/recipes/cod-fillet.jpeg',
    tags: ['Fish', 'Healthy', 'Dinner'],
    ingredients: [
      { id: '1', name: 'Cod fillet', quantity: '1', unit: 'fillet' },
      { id: '2', name: 'Salt', quantity: '1', unit: 'tsp' },
      { id: '3', name: 'Pepper', quantity: '1', unit: 'tsp' },
      { id: '4', name: 'Lemon', quantity: '1' },
      { id: '5', name: 'Olive oil', quantity: '1', unit: 'tbsp' },
      { id: '6', name: 'Quinoa', quantity: '1', unit: 'cup' },
      { id: '7', name: 'Oven vegetables', quantity: '1', unit: 'cup' },
    ],
    cookTime: '30 min',
    servings: 4,
    complexity: 'Medium',
    calories: 423,
    macros: {
      carbs: '130g',
      protein: '38g',
      fats: '10g',
    },
    instructions: {
      steps: [
        'Preheat the oven to 180°C.',
        'Season the cod fillet with salt, pepper, and lemon juice.',
        'Place the fillet on a baking tray and drizzle with olive oil.',
        'Bake for 20 minutes or until the fish is cooked through.',
        'Serve with quinoa and oven vegetables.',
      ],
      tips: [
        'You can use any white fish fillet for this recipe.',
        'Feel free to add your favorite herbs and spices to the fish.',
        'You can substitute the quinoa with rice or couscous.',
      ],
    },
  };

  return (
    <section>
      <div className="flex flex-col sm:flex-row gap-10">
        <Image
          src={cod}
          className="h-80 w-full sm:h-96 sm:w-96 object-cover rounded-lg"
          alt="Cod fillet"
          width={192}
          height={192}
          priority
        />

        <div className="flex flex-col justify-between gap-2 sm:gap-4">
          <h1 className="text-3xl sm:text-6xl text-left font-bold text-base-content opacity-80">{recipe.name}</h1>

          {/* Info */}
          <div className="stats stats-horizontal font-medium shadow h-22 sm:h-28 flex">
            <div className="stat px-3 sm:px-8 flex-1 min-w-24">
              <div className="stat-title text-sm sm:text-base">
                Servings <UserGroupIcon className="h-5 w-6 inline-block" />
              </div>
              <div className="stat-value text-lg sm:text-3xl">{recipe.servings}</div>
            </div>

            <div className="stat px-3 sm:px-8 flex-1 min-w-24">
              <div className="stat-title text-sm sm:text-base">
                Time <ClockIcon className="h-5 w-6 inline-block" />
              </div>
              <div className="stat-value text-lg sm:text-3xl">{recipe.cookTime}</div>
            </div>

            <div className="stat px-3 sm:px-8 flex-1 min-w-24">
              <div className="stat-title text-sm sm:text-base">
                Complexity <Cog8ToothIcon className="h-5 w-6 inline-block" />
              </div>
              <div className="stat-value text-lg sm:text-3xl">{recipe.complexity}</div>
            </div>
          </div>

          {/* Macros */}
          <div className="stats stats-horizontal font-medium shadow h-22 sm:h-28 flex">
            <div className="stat px-3 sm:px-8 flex-1 min-w-24">
              <div className="stat-title">
                Carbs <BoltIcon className="h-5 w-6 inline-block" />
              </div>
              <div className="stat-value text-lg sm:text-3xl">{recipe.macros.carbs}</div>
            </div>

            <div className="stat px-3 sm:px-8 flex-1 min-w-24">
              <div className="stat-title">
                Protein <FireIcon className="h-5 w-6 inline-block" />
              </div>
              <div className="stat-value text-lg sm:text-3xl">{recipe.macros.protein}</div>
            </div>

            <div className="stat px-3 sm:px-8 flex-1 min-w-24">
              <div className="stat-title">
                Fats <RocketLaunchIcon className="h-5 w-6 inline-block" />
              </div>
              <div className="stat-value text-lg sm:text-3xl">{recipe.macros.fats}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Ingredients */}
      <h1 className="font-semibold text-xl mt-8 mb-4">Ingredients</h1>
      <div className="flex flex-col">
        {recipe.ingredients.map(ingredient => (
          <label key={ingredient.id} className="label cursor-pointe justify-start gap-2">
            <input type="checkbox" className="checkbox checkbox-sm checkbox-primary" />
            <span className="label-text font-medium text-sm">{ingredient.name}</span>
          </label>
        ))}
      </div>

      <h1 className="font-semibold text-xl mt-8 mb-4">Instructions</h1>
      <div className="flex flex-col gap-2 sm:gap-4 mb-10">
        {recipe.instructions.steps.map((step, index) => (
          <p key={index} className="font-medium text-sm">
            {index + 1}. {step}
          </p>
        ))}
      </div>
    </section>
  );
}
