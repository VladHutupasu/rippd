'use client';

import { Unit } from '@prisma/client';
import { useRef } from 'react';
import { createNewIngredient } from '../actions/new-ingredient';

export default function NewIngredient() {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form
      id="new-ingredient-form"
      ref={formRef}
      className="flex flex-col gap-2"
      action={async (formData: FormData) => {
        await createNewIngredient(formData);
        formRef.current?.reset();
      }}
    >
      <label className="form-control w-full max-w-sm">
        <div className="label">
          <span className="label-text">Ingredient Name:</span>
        </div>
        <input type="text" id="name" name="name" className="input input-bordered w-full max-w-sm" />
      </label>

      <label className="form-control w-full max-w-sm">
        <div className="label">
          <span className="label-text">Unit:</span>
        </div>
        <select id="unit" name="unit" className="select select-bordered w-full max-w-sm">
          {Object.values(Unit).map(unit => (
            <option key={unit} value={unit}>
              {unit}
            </option>
          ))}
        </select>
      </label>

      <label className="form-control w-full max-w-sm">
        <div className="label">
          <span className="label-text">Calories:</span>
        </div>
        <input type="number" id="calories" name="calories" className="input input-bordered w-full max-w-sm" />
      </label>

      <label className="form-control w-full max-w-sm">
        <div className="label">
          <span className="label-text">Protein:</span>
        </div>
        <input type="number" id="protein" name="protein" className="input input-bordered w-full max-w-sm" />
      </label>

      <label className="form-control w-full max-w-sm">
        <div className="label">
          <span className="label-text">Carbs:</span>
        </div>
        <input type="number" id="carbs" name="carbs" className="input input-bordered w-full max-w-sm" />
      </label>

      <label className="form-control w-full max-w-sm">
        <div className="label">
          <span className="label-text">Fat:</span>
        </div>
        <input type="number" id="fat" name="fat" className="input input-bordered w-full max-w-sm" />
      </label>

      <input type="submit" value="Submit" className="input input-bordered w-full max-w-sm" />
    </form>
  );
}
