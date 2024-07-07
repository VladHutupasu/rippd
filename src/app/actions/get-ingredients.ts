'use server';

import db from '@lib/prisma';

export async function getIngredients() {
  const ingredients = await db.ingredient.findMany();
  return ingredients;
}
