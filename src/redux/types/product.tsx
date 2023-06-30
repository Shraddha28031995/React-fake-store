export interface Product {
    id: number;
    title: string;
    price: number;
    category: string;
    image: string;
    rating: {
      count: number;
    };
    description: string;
  }
  