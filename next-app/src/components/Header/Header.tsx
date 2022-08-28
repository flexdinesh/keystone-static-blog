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
      <HeaderTag className="mb-3 text-5xl text-typography-primary leading-4 inline bg-no-repeat"
      style={{
        lineHeight: 1,
        display: "inline",
        backgroundImage: "linear-gradient(transparent 50%,#F1C2C0 50%,#F1C2C0 85%,transparent 85%,transparent 100%)",
        backgroundRepeat: 'no-repeat',
      }}>Dinesh Pandiyan</HeaderTag>
      <p className="m-0 text-typography-tertiary">I talk and write about code.</p>
    </header>
  );
}
