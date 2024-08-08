import { LightBulbIcon } from '@heroicons/react/24/outline';
import { Instructions } from '@prisma/client';

export default function InstructionsAndTips({ recipeInstructions }: { recipeInstructions: Instructions | null }) {
  return (
    <>
      <h1 className="font-bold text-lg sm:text-xl xl:text-3xl mt-8 mb-4">Instructions</h1>
      <div className="flex flex-col gap-2 sm:gap-4">
        {recipeInstructions?.steps.map((step, index) => (
          <p key={index} className="font-light text-sm">
            {index + 1}. {step}
          </p>
        ))}
      </div>

      <h1 className="font-bold text-lg sm:text-xl xl:text-3xl mt-8 mb-4">Tips</h1>
      <ul className="flex flex-col gap-2 sm:gap-4">
        {recipeInstructions?.tips.map((tip, index) => (
          <li key={index} className="flex gap-2 font-light text-sm">
            <LightBulbIcon className="h-4 w-4 pt-1 inline-block" />
            {tip}
          </li>
        ))}
      </ul>
    </>
  );
}
