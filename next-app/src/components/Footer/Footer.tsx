import React from 'react';
import Link from 'next/link';
import { A } from '../A';

export function Footer() {
  return (
    <footer className="flex items-center justify-center">
      <div>
        Built with{' '}
        <Link href="https://keystonejs.com/" target={'_blank'}>
          <A>Keystone</A>
        </Link>{' '}
        and{' '}
        <Link href="https://nextjs.org/" target={'_blank'}>
          <A>Next.js</A>
        </Link>{' '}
      </div>
    </footer>
  );
}
