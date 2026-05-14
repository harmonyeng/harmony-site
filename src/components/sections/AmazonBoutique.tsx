'use client'
import Link from 'next/link'
import type { Product } from '@/lib/types'

interface AmazonBoutiqueProps {
  product: Product | null
}

export function AmazonBoutique({ product }: AmazonBoutiqueProps) {
  return (
    <div>
      <Link
        href="/boutique"
        className="font-mono text-[9px] tracking-[0.24em] text-muted uppercase mb-4 flex items-center gap-2.5 opacity-75 hover:opacity-100 transition-opacity cursor-pointer"
      >
        Amazon My Love
      </Link>
      {product ? (
        
          href={product.amazonUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{ background: 'rgba(255,255,255,0.22)', textDecoration: 'none', display: 'flex', gap: '14px', alignItems: 'flex-start', border: '1px solid rgba(26,79,173,0.13)', borderRadius: '10px', padding: '14px' }}
        >
          <div style={{ width: '56px', height: '56px', flexShrink: 0, borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg,rgba(26,79,173,0.07),rgba(196,144,106,0.10))' }}>
            <span style={{ fontSize: '22px' }}>📋</span>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: 'serif', fontSize: '13.5px', marginBottom: '6px' }}>{product.name}</div>
            <div style={{ fontFamily: 'serif', fontSize: '12px', fontStyle: 'italic', marginBottom: '6px' }}>{product.snippet}</div>
            <div style={{ fontFamily: 'monospace', fontSize: '8px', color: '#C8A96E', textTransform: 'uppercase', letterSpacing: '0.15em' }}>View on Amazon</div>
          </div>
        </a>
      ) : (
        <p style={{ fontFamily: 'serif', fontSize: '13px', fontStyle: 'italic', opacity: 0.6 }}>First product coming soon.</p>
      )}
    </div>
  )
}