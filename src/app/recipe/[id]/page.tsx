import {
  BeakerIcon,
  BoltIcon,
  ClockIcon,
  Cog8ToothIcon,
  FireIcon,
  LightBulbIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline';
import { formatQuantity } from '@shared/components/shared/models/QuantityUnitTransformations';
import db from '@shared/lib/prisma';
import Image from 'next/image';
import Link from 'next/link';

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

  recipe.imageSrc = require(`../../../../public/recipes/${recipe.imageSrc}`).default;

  // Calculate total macros
  const macros = recipe.RecipeIngredient.reduce(
    (acc, curr) => {
      if (curr.Ingredient.Macros) {
        acc.calories += curr.Ingredient.Macros.calories * curr.quantity;
        acc.carbs += curr.Ingredient.Macros.carbs * curr.quantity;
        acc.protein += curr.Ingredient.Macros.protein * curr.quantity;
        acc.fats += curr.Ingredient.Macros.fats * curr.quantity;
        // console.log(curr.Ingredient.name + ' ' + curr.Ingredient.Macros.calories * curr.quantity);
      }
      return acc;
    },
    { calories: 0, carbs: 0, protein: 0, fats: 0 }
  );

  return (
    <section>
      <div className="text-xs font-light opacity-60 breadcrumbs sm:mb-4">
        <ul>
          <li>
            <Link href={'/'}>Home</Link>
          </li>
          <li>
            <Link href={'/'}>Recipes</Link>
          </li>
          <li>{recipe.name}</li>
        </ul>
      </div>
      <div className="flex flex-col lg:flex-row gap-8">
        <Image
          src={recipe.imageSrc}
          className="h-72 w-full object-cover absolute inset-0 mt-[8.7rem] sm:hidden"
          alt="Cod fillet"
          height={288}
          width={414}
          placeholder="blur"
        />

        <Image
          src={recipe.imageSrc}
          className="h-96 w-full lg:w-80 min-w-80 object-cover rounded-md hidden sm:block"
          alt="Cod fillet"
          height={384}
          width={320}
          placeholder="blur"
        />

        <div className="flex flex-col max-sm:pt-[20rem] justify-between gap-2">
          <h1 className="text-3xl lg:text-6xl text-left font-bold text-base-content mb-2">{recipe.name}</h1>

          <div className="flex flex-col gap-3 sm:gap-4 xl:gap-8">
            {/* Info */}
            <div className="stats stats-horizontal font-light shadow h-20 sm:h-24 2xl:h-28 flex">
              <div className="stat px-3 sm:px-8 flex-1 min-w-24">
                <div className="stat-title text-xs sm:text-sm xl:text-base">
                  Calories <BeakerIcon className="h-4 w-4 inline-block" />
                </div>
                <div className="stat-value font-bold text-lg sm:text-xl xl:text-3xl">
                  {Math.ceil(macros.calories / recipe.servings)}
                </div>
              </div>

              <div className="stat px-3 sm:px-8 flex-1 min-w-24">
                <div className="stat-title text-xs sm:text-sm xl:text-base">
                  Time <ClockIcon className="h-4 w-4 inline-block" />
                </div>
                <div className="stat-value font-bold text-lg sm:text-xl xl:text-3xl">{recipe.cookTime}</div>
              </div>

              <div className="stat px-3 sm:px-8 flex-1 min-w-24">
                <div className="stat-title text-xs sm:text-sm xl:text-base">
                  Complexity <Cog8ToothIcon className="h-4 w-4 inline-block" />
                </div>
                <div className="stat-value font-bold text-lg sm:text-xl xl:text-3xl">{recipe.complexity}</div>
              </div>
            </div>

            {/* Macros */}
            <div className="stats stats-horizontal font-light shadow h-20 sm:h-24 2xl:h-28 flex">
              <div className="stat px-3 sm:px-8 flex-1 min-w-24">
                <div className="stat-title text-xs sm:text-sm xl:text-base">
                  Carbs <BoltIcon className="h-4 w-4 inline-block" />
                </div>
                <div className="stat-value font-bold text-lg sm:text-xl xl:text-3xl">
                  {Math.ceil(macros.carbs / recipe.servings)}
                </div>
              </div>

              <div className="stat px-3 sm:px-8 flex-1 min-w-24">
                <div className="stat-title text-xs sm:text-sm xl:text-base">
                  Protein <FireIcon className="h-4 w-4 inline-block" />
                </div>
                <div className="stat-value font-bold text-lg sm:text-xl xl:text-3xl">
                  {Math.ceil(macros.protein / recipe.servings)}
                </div>
              </div>

              <div className="stat px-3 sm:px-8 flex-1 min-w-24">
                <div className="stat-title text-xs sm:text-sm xl:text-base">
                  Fats <RocketLaunchIcon className="h-4 w-4 inline-block" />
                </div>
                <div className="stat-value font-bold text-lg sm:text-xl xl:text-3xl">
                  {Math.ceil(macros.fats / recipe.servings)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tags */}
      <div className="mt-4">
        {recipe.tags.map(tag => (
          <div key={tag} className="badge badge-sm badge-primary text-base-100 mr-2">
            {tag.toLowerCase().replace(/_/g, ' ')}
          </div>
        ))}
      </div>

      {/* Ingredients */}
      <div className="flex flex-col gap-1 font-bold mt-8 mb-4">
        <h1 className="text-lg sm:text-xl xl:text-3xl">Ingredients</h1>
        <h1 className="opacity-60 text-sm font-light">{recipe.servings} serving(s)</h1>
      </div>
      <div className="flex flex-col">
        {recipe.RecipeIngredient.map(recipe => {
          return { ...recipe.Ingredient, quantityAndUnit: formatQuantity(recipe.quantity, recipe.Ingredient.unit) };
        }).map(ingredient => (
          <label key={ingredient.id} className="label cursor-pointer justify-between px-0">
            <div className="flex gap-2 font-light text-sm">
              <input type="checkbox" className="checkbox checkbox-sm checkbox-primary" />
              <span className="opacity-60">{ingredient.quantityAndUnit}</span>
              <span>{ingredient.name}</span>
            </div>
          </label>
        ))}
      </div>

      <h1 className="font-bold text-lg sm:text-xl xl:text-3xl mt-8 mb-4">Instructions</h1>
      <div className="flex flex-col gap-2 sm:gap-4">
        {recipe.Instructions?.steps.map((step, index) => (
          <p key={index} className="font-light text-sm">
            {index + 1}. {step}
          </p>
        ))}
      </div>

      <h1 className="font-bold text-lg sm:text-xl xl:text-3xl mt-8 mb-4">Tips</h1>
      <ul className="flex flex-col gap-2 sm:gap-4">
        {recipe.Instructions?.tips.map((tip, index) => (
          <li key={index} className="flex gap-2 font-light text-sm">
            <LightBulbIcon className="h-4 w-4 pt-1 inline-block" />
            {tip}
          </li>
        ))}
      </ul>
    </section>
  );
}
