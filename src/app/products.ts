export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
    image: "https://openmoji.org/data/color/svg/260E.svg"
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    image: "https://openmoji.org/data/color/svg/1F4DE.svg"
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: '',
    image: "https://openmoji.org/data/color/svg/1F4F1.svg"
  }
];
