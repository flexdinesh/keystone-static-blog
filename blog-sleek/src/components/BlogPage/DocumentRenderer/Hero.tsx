import React from 'react';

type HeroProps = {
  imageSrc: string;
  caption:
    | {
        discriminant: false;
      }
    | {
        discriminant: true;
        value: React.ReactNode;
      };
};

export function Hero({ imageSrc, caption }: HeroProps) {
  return (
    <figure className="not-prose my-6">
      <div
        className="bg-center bg-cover bg-no-repeat h-0 pt-[56.25%] w-full"
        style={{ backgroundImage: `url(${imageSrc})` }}
      />
      {caption.discriminant ? (
        <figcaption className="text-sm mt-2 italic" style={{ textAlign: 'center' }}>
          {caption.value}
        </figcaption>
      ) : null}
    </figure>
  );
}
