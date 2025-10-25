'use client';
import { useCart } from '@/store/cartStore';
import toast from 'react-hot-toast';

type Props = { id:number; title:string; price:number; image:string };

export default function AddToCartButton(props: Props) {
  const addItem = useCart(s => s.addItem);
  return (
    <button
      onClick={() => { addItem(props); toast.success('Added to cart ✅', { duration: 1800 }); }}
      className="btn-gold"
    >
      Add to Cart
    </button>
  );
}
