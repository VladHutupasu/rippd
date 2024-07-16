'use server';

import db from '@lib/prisma';
import { Complexity, Tag } from '@prisma/client';

export async function createNewRecipe(formData: FormData) {
  //TODO: Move this to admin
  if (process.env.NODE_ENV == 'production') {
    throw new Error('Not allowed');
  }
  const ingredients = formData.getAll('ingredients').map(ingredient => JSON.parse(ingredient as string));

  await db.recipe.create({
    data: {
      name: formData.get('name') as string,
      slug: formData.get('slug') as string,
      description: formData.get('description') as string,
      imageSrc: formData.get('imageSrc') as string,
      tags: formData.getAll('tags') as Tag[],
      cookTime: Number(formData.get('cookTime')),
      servings: Number(formData.get('servings')) as number,
      complexity: formData.get('complexity') as Complexity,
      Instructions: {
        create: {
          steps: formData.get('instructions')?.toString().split('\r\n') as string[],
          tips: formData.get('tips')?.toString().split('\r\n') as string[],
        },
      },
      RecipeIngredient: {
        create: ingredients.map(ingredient => ({
          quantity: ingredient.quantity,
          ingredientId: ingredient.id,
        })),
      },
    },
  });
}
