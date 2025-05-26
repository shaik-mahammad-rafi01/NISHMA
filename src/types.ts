export interface Product {
    id: number;
    title: string;
    price: number;
    category: string;
    rating: number;
  }
  
  export interface CartItem extends Product {
    quantity: number;
  }
  
  // export type Role = 'Admin' | 'Customer';