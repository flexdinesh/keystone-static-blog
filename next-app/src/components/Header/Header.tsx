import React from 'react';

type Props = {
  forPage: 'home' | 'blog';
};

export function Header({ forPage = 'home' }: Props) {
  // semantically correct tags for SEO in home vs other pages
  const HeaderTag = forPage === 'home' ? 'h1' : 'h3';

  return (
    <header className="pb-8 text-center pt-14">
      {/* Add an avatar if needed */}
      <HeaderTag 
          className="mb-3 text-5xl text-typography-primary leading-4 inline bg-no-repeat relative after:content-[''] after:absolute after:h-4 after:left-0 after:right-0 after:bottom-1 after:-left-1 after:-z-10 after:bg-primary after:w-11/12"
      >
        Dinesh Pandiyan
      </HeaderTag>
      <p className="m-0 text-typography-tertiary font-medium text-sm tracking-wider mt-1.5">I talk and write about code.</p>
    </header>
  );
}
