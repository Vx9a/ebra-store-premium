'use client';
import Image from 'next/image';
import { useCart, selectTotal } from '@/store/cartStore';

export default function CartPage() {
  const items = useCart(s => s.items);
  const removeItem = useCart(s => s.removeItem);
  const clear = useCart(s => s.clear);
  const total = useCart(selectTotal);

  return (
    <div className="container-narrow py-8">
      <h1 className="text-2xl font-semibold mb-6">Your Cart</h1>
      {items.length === 0 ? (
        <p className="opacity-70">Your cart is empty.</p>
      ) : (
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 card divide-y">
            {items.map((item) => (
              <div key={item.id} className="p-4 flex items-center gap-4">
                <div className="relative w-20 h-20 bg-ivory rounded-xl overflow-hidden">
                  <Image src={item.image} alt={item.title} fill className="object-contain p-2" />
                </div>
                <div className="flex-1">
                  <div className="font-medium line-clamp-1">{item.title}</div>
                  <div className="text-sm opacity-70">${item.price.toFixed(2)} x {item.quantity}</div>
                </div>
                <button onClick={() => removeItem(item.id)} className="rounded-xl border px-3 py-1.5 hover:bg-ivory">
                  Remove
                </button>
              </div>
            ))}
          </div>

          <aside className="card p-6 h-fit">
            <div className="flex items-center justify-between mb-4">
              <span className="opacity-70">Subtotal</span>
              <span className="font-semibold">${total.toFixed(2)}</span>
            </div>
            <button onClick={clear} className="btn-gold w-full">Checkout</button>
            <p className="text-xs opacity-70 mt-2">* This is a demo. No real checkout.</p>
          </aside>
        </div>
      )}
    </div>
  );
}
