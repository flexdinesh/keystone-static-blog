import React from 'react';

export function PageLayout({
  className = '',
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={`mx-auto px-8 lg:px-0 py-8 min-h-screen ${className}`}>{children}</div>;
}
