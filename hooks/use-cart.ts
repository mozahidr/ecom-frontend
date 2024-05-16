import { Product } from "@/types";
import toast from "react-hot-toast";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface CartStore {
  items: Product[]; // array of products
  addItem: (data: Product) => void; // add single product to cart
  removeItem: (id: string) => void; // remove single product from cart
  removeAll: () => void; // remove all products from cart
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: Product) => {
        const currentItems = get().items;
        const existingItemIndex = currentItems.find((item) => item.id === data.id);

        if (existingItemIndex) {
          return toast("Item already exists in the cart");
        }
        set({ items: [...get().items, data]});
        toast("Item added to cart");
      },
      removeItem: (id: string) => {
        set({ items: [...get().items.filter((item) => item.id !== id)] });
        toast.success("Item removed from the cart");
      },
      removeAll: () => set({ items: [] }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
