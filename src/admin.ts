import { Product } from './types';
import { ask } from './utils';

export const adminMenu = async (products: Product[]): Promise<Product[]> => {
  console.log('\nAdmin Menu:\n1. Add Product\n2. Remove Product\n3. Back');
  const choice = await ask('Select an option (1-3): ');

  switch (choice) {
    case '1':
      const title = await ask('Product Name: ');
      const price = parseFloat(await ask('Price: '));
      const category = await ask('Category: ');
      const rating = parseFloat(await ask('Rating (0-5): '));
      const id = products.length + 1;
      products.push({ id, title, price, category, rating });
      console.log('Product added!');
      return adminMenu(products);

    case '2':
      console.log('Current Products:');
      products.forEach(p => console.table(`${p.id}. ${p.title}`));
   
      const removeId = parseInt(await ask('Enter Product ID to remove: '));
      const updated = products.filter(p => p.id !== removeId);
      console.log('Product removed!');
      return adminMenu(updated);

    case '3':
      return products;

    default:
      console.log('Invalid choice.');
      return adminMenu(products);
  }
};
