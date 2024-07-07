'use client';

import { useState } from 'react';

export default function ProteinCalculator() {
  const [proteinNeeded, setProteinNeeded] = useState<number | null>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const activityLevel = formData.get('activity') as string;
    const age = formData.get('age') as unknown as number;
    const weight = formData.get('weight') as unknown as number;

    let proteinPerKg;

    if (age < 18) {
      proteinPerKg = 1.0;
    } else if (age <= 65) {
      proteinPerKg = 0.8;
    } else {
      proteinPerKg = 1.0;
    }

    switch (activityLevel) {
      case 'sedentary':
        proteinPerKg *= 1.0;
        break;
      case 'active':
        proteinPerKg *= 1.2;
        break;
      case 'very-active':
        proteinPerKg *= 1.5;
        break;
      default:
        console.error('Invalid activity level');
        return null;
    }
    setProteinNeeded(proteinPerKg * weight);
    console.log('Calculate', activityLevel, age, weight, proteinNeeded);
  };

  return (
    <div className="bg-base-200 rounded-md p-6">
      <form className="flex flex-col gap-3 max-w-md mx-auto" onSubmit={onSubmit}>
        <label className="input input-primary input-bordered flex items-center">
          <input type="number" name="age" min="1" max="100" className="flex-1" placeholder="Age" required />
        </label>

        <label className="input input-primary input-bordered flex items-center gap-2">
          <input type="number" name="weight" min="10" max="200" className="flex-1" placeholder="Weight" required />
          <span className="font-semibold">kg</span>
        </label>

        <div className="join join-vertical">
          <input
            className="join-item btn btn-outline"
            type="radio"
            name="activity"
            value="sedentary"
            aria-label="Sedentary (little or no exercise)"
            required
          />
          <input
            className="join-item btn btn-outline"
            type="radio"
            name="activity"
            value="active"
            aria-label="Active (exercise 3-5 days a week)"
            required
          />
          <input
            className="join-item btn btn-outline"
            type="radio"
            name="activity"
            value="very-active"
            aria-label="Very Active (exercise 6-7 days a week)"
            required
          />
        </div>

        <button className="btn btn-primary" type="submit">
          Calculate
        </button>
      </form>

      {proteinNeeded && (
        <div className="max-w-md mx-auto mt-3">
          <p className="text-lg text-center">
            You need <span className="font-semibold">{Math.round(proteinNeeded)}</span> grams of protein per day 💪
          </p>
        </div>
      )}
    </div>
  );
}
