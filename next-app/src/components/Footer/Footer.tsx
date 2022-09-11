import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="flex items-center justify-center mt-12 py-4">
      <div className=" text-sm font-medium">
        Built with{' '}
        <Link href="https://keystonejs.com/" target={'_blank'}>
          <a className="animate-link  tracking-wider font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#1476ff] to-[#00abda] hover:after:bg-gradient-to-r hover:after:from-[#1476ff] hover:after:to-[#00abda]">
            Keystone
          </a>
        </Link>{' '}
        and{' '}
        <Link href="https://nextjs.org/" target={'_blank'}>
          <a className="animate-link tracking-wider font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#7928ca] to-[#ff0080] hover:after:bg-gradient-to-r hover:after:from-[#7928ca] hover:after:to-[#ff0080]">
            Next.js
          </a>
        </Link>{' '}
      </div>
    </footer>
  );
}
