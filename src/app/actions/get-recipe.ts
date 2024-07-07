'use server';

import db from '@lib/prisma';

export async function getRecipeByName(searchValue: string) {
  const recipes = await db.recipe.findMany({
    where: {
      name: {
        contains: searchValue,
        mode: 'insensitive',
      },
    },
  });
  return recipes;
}
