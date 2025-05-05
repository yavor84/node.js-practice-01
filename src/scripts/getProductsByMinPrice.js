import { PATH_DB } from '../constants/products.js';
import fs from 'node:fs/promises';

export const getProductsByMinPrice = async (minPrice) => {
  try {
    const productsData = await fs.readFile(PATH_DB, 'utf-8');
    const products = JSON.parse(productsData);
    return products.filter(({ price }) => price >= minPrice);
  } catch (error) {
    console.log(error);
  }
};

console.log(await getProductsByMinPrice(900));
