'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useCart, selectCount } from '@/store/cartStore';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const count = useCart(selectCount);
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <header className="sticky top-0 z-40 nav-blur">
      <div className="container-narrow flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.svg" width={140} height={40} alt="Ebra Store" className="h-8 w-auto object-contain" />
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/" className="hover:text-gold">Home</Link>
          <Link href="/cart" className="relative hover:text-gold">
            Cart
            {mounted && count > 0 && (
              <span className="ml-2 inline-flex items-center justify-center min-w-6 h-6 text-xs rounded-full bg-gold text-white px-2">
                {count}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}
