import { create } from "zustand";
import {
  AddressDetails,
  ProductDetails,
  SubmitDetailsResponse,
} from "../types";
import api from "../service/api";

interface CheckoutState {
  selectedProducts: Map<number, ProductDetails>;
  addressDetails: null | AddressDetails;
  handleSelectProduct: (product: ProductDetails) => void;
  setAddressDetails: (addressDetails: AddressDetails) => void;
  handleSubmitDetails: () => Promise<SubmitDetailsResponse>;
  clearStore: () => void;
}

export const useCheckoutStore = create<CheckoutState>((set, get) => ({
  selectedProducts: new Map(),
  addressDetails: null,
  handleSelectProduct: (product: ProductDetails) => {
    const { selectedProducts } = get();
    if (selectedProducts.has(product.id)) {
      selectedProducts.delete(product.id);
    } else {
      selectedProducts.set(product.id, product);
    }
    set({ selectedProducts: new Map(selectedProducts) });
  },
  setAddressDetails: (addressDetails: AddressDetails) => {
    set({ addressDetails });
  },
  handleSubmitDetails: async () => {
    try {
      const { selectedProducts } = get();
      const finalProducts = [];
      selectedProducts.forEach((value) => {
        finalProducts.push({ productId: value.id, quantity: 1 });
      });
      const resp = await api.post<SubmitDetailsResponse, SubmitDetailsResponse>(
        "/carts",
        {
          userId: 5,
          date: new Date(),
          products: [
            { productId: 5, quantity: 1 },
            { productId: 1, quantity: 5 },
          ],
        }
      );
      return resp;
    } catch (error) {
      console.log("Error in handleSubmitDetails");
      throw error;
    }
  },
  clearStore: () => {
    set({ selectedProducts: new Map(), addressDetails: null });
  },
}));
