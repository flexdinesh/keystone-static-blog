import React from 'react';

type AProps = React.HTMLAttributes<HTMLAnchorElement> & {
  children: React.ReactNode;
};

export const A = React.forwardRef<HTMLAnchorElement, AProps>(
  ({ className = '', children, ...props }, ref) => {
    const cx = className ? ' ' + className : '';
    return (
      <a
        ref={ref}
        className={`cursor-pointer no-underline ${cx}`}
        {...props}
      >
        {children}
      </a>
    );
  }
);
