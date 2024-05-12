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

  let wholeNumber = Math.floor(quantity);
  let fraction = quantity % 1;
  let fractionString = fractionMap[fraction] || fraction;

  const abbreviation = unitMap[unit] || unit;

  if (wholeNumber === 0) {
    return `${fractionString} ${abbreviation}`;
  } else if (fraction === 0) {
    return `${wholeNumber} ${abbreviation}`;
  } else {
    return `${wholeNumber} ${fractionString} ${abbreviation}`;
  }
};
