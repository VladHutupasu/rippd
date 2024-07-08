'use client';

import { ArrowPathRoundedSquareIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

type ProteinIntake = {
  ADA: string;
  WHO: string;
};

export default function ProteinCalculator() {
  const [proteinIntake, setProteinIntake] = useState<ProteinIntake | null>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const activityLevel = formData.get('activity') as string;
    const age = formData.get('age') as unknown as number;
    const weight = formData.get('weight') as unknown as number;
    const gender = formData.get('gender') as string; // Assuming gender is part of the form data

    const proteinIntake = calculateProteinIntake(age, weight, activityLevel, gender);
    setProteinIntake(proteinIntake);
    console.log('Protein Intake', proteinIntake);
  };

  const calculateProteinIntake = (age: number, weight: number, activityLevel: string, gender: string) => {
    const adaIntake = calculateADA(weight, activityLevel, gender, age);
    const whoIntake = calculateWHO(weight, gender, age);

    return {
      ADA: adaIntake,
      WHO: whoIntake,
    };
  };

  const calculateADA = (weight: number, activityLevel: string, gender: string, age: number): string => {
    let minADA, maxADA;

    if (gender === 'male') {
      if (activityLevel === 'sedentary') {
        minADA = weight * 1.0;
        maxADA = weight * 1.2;
      } else if (activityLevel === 'moderate') {
        minADA = weight * 1.2;
        maxADA = weight * 1.4;
      } else if (activityLevel === 'active') {
        minADA = weight * 1.4;
        maxADA = weight * 1.6;
      } else {
        minADA = weight * 1.6;
        maxADA = weight * 1.8;
      }
    } else {
      if (activityLevel === 'sedentary') {
        minADA = weight * 0.8;
        maxADA = weight * 1.0;
      } else if (activityLevel === 'moderate') {
        minADA = weight * 1.0;
        maxADA = weight * 1.2;
      } else if (activityLevel === 'active') {
        minADA = weight * 1.2;
        maxADA = weight * 1.4;
      } else {
        minADA = weight * 1.4;
        maxADA = weight * 1.6;
      }
    }

    if (age >= 65) {
      minADA = weight * 1.2;
      maxADA = weight * 1.2;
    }

    return `${minADA.toFixed(1)} - ${maxADA.toFixed(1)} grams/day`;
  };

  const calculateWHO = (weight: number, gender: string, age: number): string => {
    let whoIntake = 0.83 * weight; // minimum WHO guidelines use 0.83 grams per kg
    if (age >= 65) {
      whoIntake *= 1.2;
    }
    return `${whoIntake.toFixed(1)} grams/day`;
  };

  return (
    <div className="bg-base-200 rounded-md p-2 md:p-6">
      <h3 className="mt-0">Calculate Your Protein Needs 📊</h3>
      <p>
        Use our protein calculator below to get a personalized recommendation for how much protein you may want to
        consume daily based on your age, weight, and activity level:
      </p>

      {!proteinIntake && (
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
              value="moderate"
              aria-label="Moderate (exercise 1-3 days a week)"
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
              aria-label="Very Active (exercise 5-7 days a week)"
              required
            />
          </div>

          <div className="join">
            <input
              className="join-item btn btn-outline flex-1"
              type="radio"
              name="gender"
              value="male"
              aria-label="Male"
              required
            />
            <input
              className="join-item btn btn-outline flex-1"
              type="radio"
              name="gender"
              value="female"
              aria-label="Female"
              required
            />
          </div>

          <button className="btn btn-primary" type="submit">
            Calculate
          </button>
        </form>
      )}

      {proteinIntake && (
        <div className="max-w-md flex flex-col mx-auto mt-3">
          <div className="text-md text-center">
            <p>
              American Dietetic Association (ADA) recommends <span className="font-semibold">{proteinIntake.ADA}</span>
            </p>
            <p>
              World Health Organization (WHO) safe lower limit:{' '}
              <span className="font-semibold">{proteinIntake.WHO}</span>
            </p>
          </div>

          <button
            className="btn btn-primary mt-3"
            onClick={() => {
              setProteinIntake(null);
            }}
          >
            <ArrowPathRoundedSquareIcon className="h-5 w-5 " />
            Re-calculate
          </button>
        </div>
      )}
      <p className="italic text-sm">
        <strong>Disclaimer:</strong> Please note that the results from this calculator are for general guidance only and
        should not be considered medical advice. Consult a healthcare professional for personalized dietary
        recommendations.
      </p>
    </div>
  );
}
