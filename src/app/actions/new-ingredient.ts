'use server';

import { Unit } from '@prisma/client';
import db from '@shared/lib/prisma';

// TODO: Handle errors
export async function createNewIngredient(formData: FormData) {
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
