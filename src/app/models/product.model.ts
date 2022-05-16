export interface Data {
  employee: string;
  reviews: string[];
  title: string;
  description: string;
  category: string;
  price: string;
}

export interface Product {
  id: string;
  data: Data;
}
