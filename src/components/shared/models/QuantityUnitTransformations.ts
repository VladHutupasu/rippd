import { Unit } from '@prisma/client';

const fractionMap: { [key: number]: string } = {
  0.125: '⅛',
  0.25: '¼',
  0.333: '⅓',
  0.5: '½',
  0.75: '¾',
};

const unitMap: { [key in Unit]: string } = {
  TEASPOONS: 'tsp',
  TABLESPOONS: 'tbsp',
  PIECES: 'pcs',
  LITERS: 'l',
  MILLILITERS_100: 'ml',
  GRAMS_100: 'g',
  KILOGRAMS: 'kg',
  CUPS: 'cup',
};

export const formatQuantity = (quantity: number, unit: Unit): string => {
  // let fraction = 0;
  if (['GRAMS_100', 'MILLILITERS_100'].includes(unit)) {
    quantity *= 100;
  }
  let fraction = fractionMap[quantity] || quantity;
  const abbreviation = unitMap[unit] || unit;

  return `${fraction} ${abbreviation}`;
};
