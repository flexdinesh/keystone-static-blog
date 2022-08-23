import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="flex items-center justify-center">
      <div>
        Built with{' '}
        <Link href="https://keystonejs.com/" target={'_blank'}>
          <a className="no-underline hover:border-b-2 border-blue-500">Keystone</a>
        </Link>{' '}
        and{' '}
        <Link href="https://nextjs.org/" target={'_blank'}>
          <a className="no-underline hover:border-b-2 border-blue-500">Next.js</a>
        </Link>{' '}
      </div>
    </footer>
  );
}
