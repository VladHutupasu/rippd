'use client';

import { getIngredients } from '@actions/get-ingredients';
import { createNewRecipe } from '@actions/new-recipe';
import { Ingredient, Tag } from '@prisma/client';
import { ChangeEvent, useEffect, useRef, useState } from 'react';

export default function NewRecipe() {
  const [availableIngredients, setAvailableIngredients] = useState<Ingredient[]>([]);
  const [selectedIngredients, setSelectedIngredients] = useState([{ id: '', quantity: 0 }]);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    async function fetchData() {
      const ingredients = await getIngredients();
      setAvailableIngredients(ingredients);
    }
    fetchData();
  }, []);

  const handleIngredientChange = (index: number, event: ChangeEvent<HTMLSelectElement>) => {
    const values = [...selectedIngredients];
    values[index].id = event.target.value;
    setSelectedIngredients(values);
  };

  const handleQuantityChange = (index: number, event: ChangeEvent<HTMLInputElement>) => {
    const values = [...selectedIngredients];
    values[index].quantity = Number(event.target.value);
    setSelectedIngredients(values);
  };

  const handleAddClick = (event: any) => {
    event.preventDefault();
    setSelectedIngredients([...selectedIngredients, { id: '', quantity: 0 }]);
  };

  const handleRemoveClick = (index: number) => {
    const values = [...selectedIngredients];
    values.splice(index, 1);
    setSelectedIngredients(values);
  };

  return (
    <form
      id="new-recipe-form"
      ref={formRef}
      className="flex flex-col gap-2"
      action={async (formData: FormData) => {
        formData.delete('ingredients');
        selectedIngredients.map((selectedIngredient, index) => {
          formData.append('ingredients', JSON.stringify(selectedIngredient));
        });
        await createNewRecipe(formData);
        formRef.current?.reset();
      }}
    >
      <label className="form-control w-full max-w-sm">
        <div className="label">
          <span className="label-text">Recipe Name:</span>
        </div>
        <input type="text" id="name" name="name" className="input input-bordered w-full max-w-sm" />
      </label>

      <label className="form-control w-full max-w-sm">
        <div className="label">
          <span className="label-text">Description:</span>
        </div>
        <textarea id="description" name="description" className="textarea textarea-bordered" />
      </label>

      <label className="form-control w-full max-w-sm">
        <div className="label">
          <span className="label-text">Image URL:</span>
        </div>
        <input type="text" id="imageSrc" name="imageSrc" className="input input-bordered w-full max-w-sm" />
      </label>

      <label className="form-control w-full max-w-sm">
        <div className="label">
          <span className="label-text">Tags (comma separated):</span>
        </div>
        <select multiple={true} id="tags" name="tags" className="select select-bordered w-full max-w-sm">
          {Object.values(Tag).map((tag: string) => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </select>
      </label>

      <label className="form-control w-full max-w-sm">
        <div className="label">
          <span className="label-text">Cook Time (mins):</span>
        </div>
        <input type="number" id="cookTime" name="cookTime" className="input input-bordered w-full max-w-sm" />
      </label>

      <label className="form-control w-full max-w-sm">
        <div className="label">
          <span className="label-text">Servings:</span>
        </div>
        <input type="number" id="servings" name="servings" className="input input-bordered w-full max-w-sm" />
      </label>

      <label className="form-control w-full max-w-sm">
        <div className="label">
          <span className="label-text">Complexity:</span>
        </div>
        <input type="text" id="complexity" name="complexity" className="input input-bordered w-full max-w-sm" />
      </label>

      <label className="form-control w-full max-w-sm">
        <div className="label">
          <span className="label-text">Instructions (each step on a new line):</span>
        </div>
        <textarea id="instructions" name="instructions" className="textarea textarea-bordered" />
      </label>

      <label className="form-control w-full max-w-sm">
        <div className="label">
          <span className="label-text">Tips (each tip on a new line):</span>
        </div>
        <textarea id="tips" name="tips" className="textarea textarea-bordered" />
      </label>

      {selectedIngredients.map((selectedIngredient, index) => (
        <div key={index} className="form-control w-full max-w-sm">
          <div className="label">
            <span className="label-text">Ingredient {index + 1}:</span>
          </div>
          <select
            id="ingredients"
            name="ingredients"
            value={selectedIngredient.id}
            onChange={event => handleIngredientChange(index, event)}
            className="select select-bordered w-full max-w-sm"
          >
            <option value="">Select an ingredient</option>
            {availableIngredients.map((ingredient: Ingredient) => (
              <option key={ingredient.id} value={ingredient.id}>
                {ingredient.name + ` (${ingredient.unit})`}
              </option>
            ))}
          </select>
          <input
            type="number"
            step={0.01}
            value={selectedIngredient.quantity}
            onChange={event => handleQuantityChange(index, event)}
            className="input input-bordered w-full max-w-sm"
          />
          {selectedIngredients.length > 1 && <button onClick={() => handleRemoveClick(index)}>Remove</button>}
        </div>
      ))}
      <button onClick={handleAddClick}>Add Ingredient</button>

      <input type="submit" value="Submit" className="input input-bordered w-full max-w-sm" />
    </form>
  );
}
