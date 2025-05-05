import { PATH_DB } from '../constants/products.js';
import fs from 'node:fs/promises';

export const modifyProducts = async () => {
  try {
    const productsData = await fs.readFile(PATH_DB, 'utf-8');
    const products = JSON.parse(productsData);
    const modifyProducts = products.map((product) => {
      const { description, ...restOfProduct } = product;
      return { ...restOfProduct };
    });
    const dataWrite = JSON.stringify(modifyProducts, null, 2);
    await fs.writeFile(PATH_DB, dataWrite, 'utf-8');
    return dataWrite;
  } catch (error) {
    console.log(error);
  }
};

console.log(await modifyProducts());
