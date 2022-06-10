export interface Product {
  product_id: string;
  name: string;
  price: number;
  image: string;
}

export interface ProductResponse {
  products: Product[];
}
