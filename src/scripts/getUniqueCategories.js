import { PATH_DB } from '../constants/products.js';
import fs from 'node:fs/promises';

export const getUniqueCategories = async () => {
  try {
    const productsData = await fs.readFile(PATH_DB, 'utf-8');
    const products = JSON.parse(productsData);
    return products.reduce((acc, { category }) => {
      if (!acc.includes(category)) {
        acc.push(category);
      }
      return acc;
    }, []);
  } catch (error) {
    console.log(error);
  }
};

console.log(await getUniqueCategories());
