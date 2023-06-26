export type AddressDetails = {
  firstName: string;
  lastName: string;
  streetAddress: string;
  city: string;
  zip: string;
  state: string;
};

export type ProductDetails = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
};

export type SubmitDetailsResponse = {
  userId: number;
  date: Date;
  products: { productId: number; quantity: number }[];
};

export {};
