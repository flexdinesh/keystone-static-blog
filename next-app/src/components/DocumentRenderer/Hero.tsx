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
    <figure className="not-prose flex items-center justify-center flex-col my-6">
      <div
        className="bg-center bg-cover min-h-[320px] w-full"
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
