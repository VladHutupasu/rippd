import { ArrowPathRoundedSquareIcon, LightBulbIcon } from '@heroicons/react/24/outline';
import { Instructions } from '@prisma/client';

export default function InstructionsTipsAndSwaps({ recipeInstructions }: { recipeInstructions: Instructions | null }) {
  return (
    <>
      <h1 className="relative z-10 font-bold text-lg sm:text-xl xl:text-3xl mt-8 mb-4">
        <span className="absolute left-[25px] xl:left-[40px] bottom-[5px] w-[60px] xl:w-[90px] h-[7px] transform -skew-x-12 -translate-x-1/2 bg-primary bg-opacity-50 z-[-1]" />
        Instructions
      </h1>
      <div className="flex flex-col gap-2 sm:gap-4">
        {recipeInstructions?.steps.map((step, index) => (
          <p key={index} className="font-light text-sm">
            {index + 1}. {step}
          </p>
        ))}
      </div>

      {recipeInstructions?.tips && recipeInstructions.tips.length > 0 && (
        <>
          <h1 className="font-bold text-accent text-lg sm:text-xl xl:text-3xl mt-8 mb-4">Tips</h1>
          <ul className="flex flex-col gap-2 sm:gap-4">
            {recipeInstructions?.tips.map((tip, index) => (
              <li key={index} className="flex gap-2 font-light text-sm">
                <LightBulbIcon strokeWidth={2} className="h-5 w-5 text-accent inline-block" />
                {tip}
              </li>
            ))}
          </ul>
        </>
      )}

      {recipeInstructions?.swaps && recipeInstructions.swaps.length > 0 && (
        <>
          <h1 className="font-bold text-secondary text-lg sm:text-xl xl:text-3xl mt-8 mb-4">Swap this</h1>
          <ul className="flex flex-col gap-2 sm:gap-4">
            {recipeInstructions?.swaps.map((swap, index) => (
              <li key={index} className="flex gap-2 font-light text-sm">
                <ArrowPathRoundedSquareIcon strokeWidth={2} className="h-5 w-5 text-secondary inline-block" />
                {swap}
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}
