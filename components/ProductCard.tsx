import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/lib/api';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/product/${product.id}`} className="card overflow-hidden flex flex-col hover:shadow-soft transition">
      <div className="relative aspect-[4/3] bg-ivory">
        <Image src={product.image} alt={product.title} fill className="object-contain p-6" sizes="(max-width: 768px) 100vw, 33vw"/>
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="font-medium tracking-tight line-clamp-2 mb-2">{product.title}</h3>
        <div className="mt-auto flex items-center justify-between">
          <span className="text-gold font-semibold text-lg">${product.price.toFixed(2)}</span>
          <span className="badge">{product.category}</span>
        </div>
      </div>
    </Link>
  );
}
