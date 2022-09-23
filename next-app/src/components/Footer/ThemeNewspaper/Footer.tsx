import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="flex items-center justify-center mt-12 py-4 border-t-[1px] border-current">
      <div className=" text-sm font-medium">
        Built with{' '}
        <Link href="https://keystonejs.com/" target={'_blank'}>
          <a className="animated-underline tracking-wider font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white to-white hover:after:bg-gradient-to-r hover:after:from-white hover:after:to-white">
            Keystone
          </a>
        </Link>{' '}
        and{' '}
        <Link href="https://nextjs.org/" target={'_blank'}>
          <a className="animated-underline tracking-wider font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white to-white hover:after:bg-gradient-to-r hover:after:from-white hover:after:to-white">
            Next.js
          </a>
        </Link>{' '}
      </div>
    </footer>
  );
}
