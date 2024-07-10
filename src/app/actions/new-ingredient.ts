'use server';

import db from '@lib/prisma';
import { Unit } from '@prisma/client';

// TODO: Handle errors
export async function createNewIngredient(formData: FormData) {
  //TODO: Move this to admin
  if (process.env.NODE_ENV == 'production') {
    throw new Error('Not allowed');
  }

  await db.ingredient.create({
    data: {
      name: formData.get('name') as string,
      unit: formData.get('unit') as Unit,
      Macros: {
        create: {
          calories: Number(formData.get('calories')) as number,
          protein: Number(formData.get('protein')) as number,
          carbs: Number(formData.get('carbs')) as number,
          fats: Number(formData.get('fat')) as number,
        },
      },
    },
  });
}
