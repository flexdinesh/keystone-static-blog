import React from 'react';

type Props = {
  forPage: 'home' | 'blog';
};

export function Header({ forPage = 'home' }: Props) {
  // semantically correct tags for SEO in home vs other pages
  const HeaderTag = forPage === 'home' ? 'h1' : 'h3';

  return (
    <header className="pb-8">
      <HeaderTag>Dinesh Pandiyan</HeaderTag>
      <div>I talk and write about code.</div>
    </header>
  );
}
