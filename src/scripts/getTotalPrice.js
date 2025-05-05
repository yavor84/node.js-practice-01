import { PATH_DB } from '../constants/products.js';
import fs from 'node:fs/promises';

export const getTotalPrice = async () => {
  try {
    const productsData = await fs.readFile(PATH_DB, 'utf-8');
    const products = JSON.parse(productsData);
    return products.reduce((accum, { price }) => {
      return accum + parseFloat(price);
    }, 0);
  } catch (error) {
    console.log(error);
  }
};

console.log(await getTotalPrice());
