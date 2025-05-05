import { PATH_DB } from '../constants/products.js';
import fs from 'node:fs/promises';

export const groupProductsByCategories = async () => {
  try {
    const productsData = await fs.readFile(PATH_DB, 'utf-8');
    const products = JSON.parse(productsData);
    return products.reduce((acc, { name, category }) => {
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(name);
      return acc;
    }, {});
  } catch (error) {
    console.log(error);
  }
};

console.log(await groupProductsByCategories());
