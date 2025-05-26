import { Product, CartItem } from './types';
import { ask } from './utils';

export const customerMenu = async (products: Product[]) => {
  const cart: CartItem[] = [];

  const loop = async () => {
    console.log('\nCustomer Menu:\n1. Search Products\n2. Filter Products\n3. Add to Cart\n4. View Cart\n5. Back');
    const choice = await ask('Select an option (1-5): ');

    switch (choice) {
      case '1': {
        const keyword = await ask('Enter keyword: ');
        const found = products.filter(p => p.title.toLowerCase().includes(keyword.toLowerCase()));
        console.table(found);
        break;
      }
      case '2': {
        const filterType = await ask('Filter by (price/category/rating): ');
        if (filterType === 'price') {
          const max = parseFloat(await ask('Enter max price: '));
          console.table(products.filter(p => p.price <= max));
        } 
        else if (filterType === 'category') {
          const category = await ask('Enter category: ');
          console.table(products.filter(p => p.category.toLowerCase() === category.toLowerCase()));
        } 
        else if (filterType === 'rating') {
          const min = parseFloat(await ask('Enter min rating: '));
          console.table(products.filter(p => p.rating >= min));
        } 
        else {
          console.log('Invalid filter type.');
        }
        break;
      }
      case '3': {
        const name = await ask('Enter product name to add: ');
        const product = products.find(p => p.title.toLowerCase().includes(name.toLowerCase()));
        if (product) {
          const existing = cart.find(c => c.id === product.id);
          if (existing) existing.quantity++;
          else cart.push({ ...product, quantity: 1 });
          console.log('Added to cart.');
        } 
        else {
          console.log('Product not found.');
        }
        break;
      }
      case '4': {
        console.table(cart);
        break;
      }
      case '5':
        return;
      default:
        console.log('Invalid choice.');
    }
    await loop();
  };
  await loop();
};
