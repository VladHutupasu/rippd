import {
  BoltIcon,
  ClockIcon,
  Cog8ToothIcon,
  FireIcon,
  RocketLaunchIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';
import db from '@shared/lib/prisma';
import Image from 'next/image';

export default async function RecipeDetails({ params }: { params: { id: string } }) {
  const recipeId = params.id;

  const recipe = await db.recipe.findUnique({
    where: {
      id: recipeId,
    },
    include: {
      Instructions: true,
      RecipeIngredient: {
        include: {
          Ingredient: {
            include: {
              Macros: true,
            },
          },
        },
      },
    },
  });

  //TODO: re-route to not found page
  if (!recipe) {
    return (
      <div className="flex flex-col flex-grow items-center justify-center h-screen -mt-28 sm:-mt-36 text-3xl">
        Recipe not found
      </div>
    );
  }

  console.log(recipe.Instructions?.steps);
  recipe.imageSrc = require(`../../../../public/recipes/${recipe.imageSrc}`).default;

  //Calculate total macros
  const macros = recipe.RecipeIngredient.reduce(
    (acc, curr) => {
      if (curr.Ingredient.Macros) {
        acc.carbs += curr.Ingredient.Macros.carbs;
        acc.protein += curr.Ingredient.Macros.protein;
        acc.fats += curr.Ingredient.Macros.fats;
      }
      return acc;
    },
    { carbs: 0, protein: 0, fats: 0 }
  );

  //TODO: Fix Ipad Pro <main> margins/padding
  return (
    <section>
      <div className="flex flex-col lg:flex-row gap-8">
        <Image
          src={recipe.imageSrc}
          className="h-80 w-full lg:h-96 lg:w-96 object-cover rounded-lg"
          alt="Cod fillet"
          width={192}
          height={192}
          priority
        />

        <div className="flex flex-col justify-between">
          <h1 className="text-3xl lg:text-6xl text-left font-bold text-base-content opacity-80 mb-4">{recipe.name}</h1>

          {/* Info */}
          <div className="stats stats-horizontal font-medium shadow h-20 sm:h-24 2xl:h-28 flex mb-2">
            <div className="stat px-3 sm:px-8 flex-1 min-w-24">
              <div className="stat-title text-xs sm:text-sm xl:text-base">
                Servings <UserGroupIcon className="h-4 w-4 inline-block" />
              </div>
              <div className="stat-value text-lg sm:text-xl xl:text-3xl">{recipe.servings}</div>
            </div>

            <div className="stat px-3 sm:px-8 flex-1 min-w-24">
              <div className="stat-title text-xs sm:text-sm xl:text-base">
                Time <ClockIcon className="h-4 w-4 inline-block" />
              </div>
              <div className="stat-value text-lg sm:text-xl xl:text-3xl">{recipe.cookTime}</div>
            </div>

            <div className="stat px-3 sm:px-8 flex-1 min-w-24">
              <div className="stat-title text-xs sm:text-sm xl:text-base">
                Complexity <Cog8ToothIcon className="h-4 w-4 inline-block" />
              </div>
              <div className="stat-value text-lg sm:text-xl xl:text-3xl">{recipe.complexity}</div>
            </div>
          </div>

          {/* Macros */}
          <div className="stats stats-horizontal font-medium shadow h-20 sm:h-24 2xl:h-28 flex">
            <div className="stat px-3 sm:px-8 flex-1 min-w-24">
              <div className="stat-title text-xs sm:text-sm xl:text-base">
                Carbs <BoltIcon className="h-4 w-4 inline-block" />
              </div>
              <div className="stat-value text-lg sm:text-xl xl:text-3xl">{macros.carbs}</div>
            </div>

            <div className="stat px-3 sm:px-8 flex-1 min-w-24">
              <div className="stat-title text-xs sm:text-sm xl:text-base">
                Protein <FireIcon className="h-4 w-4 inline-block" />
              </div>
              <div className="stat-value text-lg sm:text-xl xl:text-3xl">{macros.protein}</div>
            </div>

            <div className="stat px-3 sm:px-8 flex-1 min-w-24">
              <div className="stat-title text-xs sm:text-sm xl:text-base">
                Fats <RocketLaunchIcon className="h-4 w-4 inline-block" />
              </div>
              <div className="stat-value text-lg sm:text-xl xl:text-3xl">{macros.fats}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Ingredients */}
      <h1 className="font-semibold text-xl mt-8 mb-4">Ingredients</h1>
      <div className="flex flex-col">
        {recipe.RecipeIngredient.map(recipe => recipe.Ingredient).map(ingredient => (
          <label key={ingredient.id} className="label cursor-pointe justify-start gap-2">
            <input type="checkbox" className="checkbox checkbox-sm checkbox-primary" />
            <span className="label-text font-medium text-sm">{ingredient.name}</span>
          </label>
        ))}
      </div>

      <h1 className="font-semibold text-xl mt-8 mb-4">Instructions</h1>
      <div className="flex flex-col gap-2 sm:gap-4">
        {recipe.Instructions?.steps.map((step, index) => (
          <p key={index} className="font-medium text-sm">
            {index + 1}. {step}
          </p>
        ))}
      </div>

      <h1 className="font-semibold text-xl mt-8 mb-4">Tips</h1>
      <ul className="list-disc list-inside flex flex-col gap-2 sm:gap-4">
        {recipe.Instructions?.tips.map((tip, index) => (
          <li key={index} className="font-medium text-sm">
            {tip}
          </li>
        ))}
      </ul>
    </section>
  );
}
