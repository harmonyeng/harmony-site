"use client";
import Link from "next/link";

export function AmazonBoutique({ product }: { product: any }) {
  return (
    <div>
      <Link href="/boutique">
        Amazon My Love
      </Link>
      {product ? (
        <a href={product.amazonUrl} target="_blank" rel="noopener noreferrer">
          <span>📋</span>
          <div>
            <div>{product.name}</div>
            <div>{product.snippet}</div>
            <div>View on Amazon</div>
          </div>
        </a>
      ) : (
        <p>First product coming soon.</p>
      )}
    </div>
  );
}
