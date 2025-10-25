import Image from 'next/image';
import { fetchProduct } from '@/lib/api';
import AddToCartButton from '@/components/AddToCartButton';

type Params = { params: { id: string } };

export default async function ProductPage({ params }: Params) {
  const product = await fetchProduct(params.id);

  return (
    <div className="container-narrow py-8">
      <div className="grid md:grid-cols-2 gap-8 card p-6">
        <div className="relative aspect-square bg-ivory rounded-2xl">
          <Image src={product.image} alt={product.title} fill className="object-contain p-6" sizes="(max-width: 768px) 100vw, 50vw"/>
        </div>
        <div>
          <h1 className="text-2xl font-semibold mb-3">{product.title}</h1>
          <p className="text-xl text-gold font-bold mb-4">${product.price.toFixed(2)}</p>
          <p className="opacity-80 leading-relaxed mb-6">{product.description}</p>
          <div className="mb-8">
            <span className="badge">{product.category}</span>
          </div>
          <AddToCartButton id={product.id} title={product.title} price={product.price} image={product.image} />
        </div>
      </div>
    </div>
  );
}
