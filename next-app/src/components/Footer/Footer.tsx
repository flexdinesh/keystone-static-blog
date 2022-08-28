import React from 'react';
import Link from 'next/link';
import { A } from '../A';

export function Footer() {
  return (
    <footer className="flex items-center justify-center">
      <div className="text-footer-gray tracking-wider text-sm font-medium">
        Built with{' '}
        <Link href="https://keystonejs.com/" target={'_blank'}>
          <A className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#1476ff] to-[#00abda]">Keystone</A>
        </Link>{' '}
        and{' '}
        <Link href="https://nextjs.org/" target={'_blank'}>
          <A className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#7928ca] to-[#ff0080]">Next.js</A>
        </Link>{' '}
      </div>
    </footer>
  );
}
