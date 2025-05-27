import { Product } from "../Types/types";

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch('https://fakestoreapi.com/products');
  const data = await response.json();
  return data.map((item: any) => ({
    id: item.id,
    title: item.title,
    price: item.price,
    category: item.category,
    rating: item.rating.rate,
  }));
};
