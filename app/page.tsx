import { fetchProducts } from '@/lib/api';
import ProductCard from '@/components/ProductCard';

export const revalidate = 60;

export default async function HomePage() {
  const products = await fetchProducts();
  return (
    <div className="container-narrow py-8">
      <div className="mb-6">
        <h2 className="text-sm tracking-[0.2em] uppercase opacity-70">Explore Our Collection</h2>
        <h1 className="text-2xl font-semibold">Products</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p, i) => (
          <div key={p.id} style={{ animationDelay: `${i * 40}ms` }} className="fade-up">
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </div>
  );
}
