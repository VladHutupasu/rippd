import { BoltIcon, FireIcon, InformationCircleIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';
import { RecipeDetails } from '../../../app/recipe/[slug]/page';

export default function InfoAndMacros({
  recipe,
  macrosPerServing,
}: {
  recipe: RecipeDetails;
  macrosPerServing: { calories: number; carbs: number; protein: number; fats: number };
}) {
  return (
    <div className="flex flex-col max-sm:pt-[20rem] justify-between gap-2 w-full">
      <h1 className="text-3xl lg:text-6xl text-left font-bold text-base-content mb-2">{recipe.name}</h1>

      <div className="flex flex-col gap-3 sm:gap-4 xl:gap-8">
        {/* Info */}
        <div className="stats stats-horizontal font-light shadow h-20 sm:h-24 2xl:h-28 flex">
          <div className="stat px-3 sm:px-8 flex-1 min-w-24">
            <div className="stat-figure text-primary-content">
              <button
                className="btn tooltip tooltip-right btn-xs btn-circle btn-ghost z-50 max-sm:-ml-2 flex items-center justify-center"
                data-tip="Calories per serving"
              >
                <InformationCircleIcon strokeWidth={2} className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </div>
            <div className="stat-title font-medium text-xs sm:text-sm xl:text-base">Calories</div>
            <div className="stat-value font-bold text-lg sm:text-xl xl:text-3xl">{macrosPerServing.calories} kcal</div>
          </div>

          <div className="stat px-3 sm:px-8 flex-1 min-w-24">
            <div className="stat-title font-medium text-xs sm:text-sm xl:text-base">Time</div>
            <div className="stat-value font-bold text-lg sm:text-xl xl:text-3xl">{recipe.cookTime} min</div>
          </div>

          <div className="stat px-3 sm:px-8 flex-1 min-w-24">
            <div className="stat-title font-medium text-xs sm:text-sm xl:text-base">Complexity</div>
            <div className="stat-value font-bold text-lg sm:text-xl xl:text-3xl">{recipe.complexity}</div>
          </div>
        </div>

        {/* Macros */}
        <div className="stats stats-horizontal font-light shadow h-20 sm:h-24 2xl:h-28 flex">
          <div className="stat px-3 sm:px-8 flex-1 min-w-24">
            <div className="stat-title font-medium text-xs sm:text-sm xl:text-base">
              Carbs <BoltIcon strokeWidth={2} className="h-4 w-4 inline-block" />
            </div>
            <div className="stat-value font-bold text-lg sm:text-xl xl:text-3xl">{macrosPerServing.carbs}g</div>
          </div>

          <div className="stat px-3 sm:px-8 flex-1 min-w-24">
            <div className="stat-title font-medium text-xs sm:text-sm xl:text-base">
              Protein <FireIcon strokeWidth={2} className="h-4 w-4 inline-block" />
            </div>
            <div className="stat-value font-bold text-lg sm:text-xl xl:text-3xl">{macrosPerServing.protein}g</div>
          </div>

          <div className="stat px-3 sm:px-8 flex-1 min-w-24">
            <div className="stat-title font-medium text-xs sm:text-sm xl:text-base">
              Fats <RocketLaunchIcon strokeWidth={2} className="h-4 w-4 inline-block" />
            </div>
            <div className="stat-value font-bold text-lg sm:text-xl xl:text-3xl">{macrosPerServing.fats}g</div>
          </div>
        </div>
      </div>

      {/* <div className="flex gap-5">
        <div className="flex flex-col items-center">
          <p>Carbs</p>
          <div
            className="radial-progress text-primary"
            style={{ '--value': 70 } as React.CSSProperties}
            role="progressbar"
          >
            {(
              ((macrosPerServing.carbs * 4) /
                (macrosPerServing.carbs * 4 + macrosPerServing.protein * 4 + macrosPerServing.fats * 9)) *
              100
            ).toFixed(0)}
            %
          </div>
        </div>

        <div className="flex flex-col items-center">
          <p>Protein</p>
          <div
            className="radial-progress text-secondary"
            style={{ '--value': 70 } as React.CSSProperties}
            role="progressbar"
          >
            {(
              ((macrosPerServing.protein * 4) /
                (macrosPerServing.carbs * 4 + macrosPerServing.protein * 4 + macrosPerServing.fats * 9)) *
              100
            ).toFixed(0)}
            %
          </div>
        </div>

        <div className="flex flex-col items-center">
          <p>Fats</p>
          <div
            className="radial-progress text-accent"
            style={{ '--value': 70 } as React.CSSProperties}
            role="progressbar"
          >
            {(
              ((macrosPerServing.fats * 9) /
                (macrosPerServing.carbs * 4 + macrosPerServing.protein * 4 + macrosPerServing.fats * 9)) *
              100
            ).toFixed(0)}
            %
          </div>
        </div>
      </div> */}
    </div>
  );
}
