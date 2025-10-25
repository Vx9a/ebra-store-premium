'use client';
import { create } from 'zustand';

export type CartItem = { id:number; title:string; price:number; image:string; quantity:number };

type CartState = {
  items: CartItem[];
  addItem: (item: Omit<CartItem,'quantity'>) => void;
  removeItem: (id:number) => void;
  clear: () => void;
};

export const useCart = create<CartState>((set, get) => ({
  items: [],
  addItem: (item) => {
    const exists = get().items.find(i => i.id === item.id);
    if (exists) {
      set({ items: get().items.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i) });
    } else {
      set({ items: [...get().items, { ...item, quantity: 1 }] });
    }
  },
  removeItem: (id) => {
    const exists = get().items.find(i => i.id === id);
    if (!exists) return;
    const updated = exists.quantity > 1
      ? get().items.map(i => i.id === id ? { ...i, quantity: i.quantity - 1 } : i)
      : get().items.filter(i => i.id !== id);
    set({ items: updated });
  },
  clear: () => set({ items: [] }),
}));

export const selectCount = (s: CartState) => s.items.reduce((a,c)=>a+c.quantity,0);
export const selectTotal = (s: CartState) => s.items.reduce((a,c)=>a+c.price*c.quantity,0);
