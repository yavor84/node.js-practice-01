import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';
import { createFakeProduct } from '../utils/createFakeProduct.js';

export const generateProducts = async (number) => {
  try {
    const dataRead = await fs.readFile(PATH_DB, 'utf-8');
    const products = JSON.parse(dataRead);
    const newProducts = [];
    for (let i = 0; i < number; i++) {
      const fakeProduct = createFakeProduct();
      newProducts.push(fakeProduct);
    }

    const updatedProduct = [...products, ...newProducts];
    const dataWrite = JSON.stringify(updatedProduct, null, 2);
    await fs.writeFile(PATH_DB, dataWrite, 'utf-8');
  } catch (error) {
    console.log(error);
  }
};

generateProducts(5);
