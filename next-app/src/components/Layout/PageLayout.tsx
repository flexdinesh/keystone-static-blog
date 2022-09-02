import React from 'react';

type PageLayoutProps = JSX.IntrinsicElements['div'] & {
  className?: string;
  children: React.ReactNode;
};

export function PageLayout({ className = '', children, ...props }: PageLayoutProps) {
  return (
    <div className={`mx-auto px-4 sm:px-8 pb-8 min-h-screen ${className}`} {...props}>
      {children}
    </div>
  );
}
