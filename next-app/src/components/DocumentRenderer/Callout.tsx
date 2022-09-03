import React, { ReactNode } from 'react';

type CalloutProps = {
  intent: 'info' | 'warning' | 'error' | 'success';
  content: ReactNode;
};

export function Callout({ intent, content }: CalloutProps) {
  let bgColor = 'transparent';
  let borderColor = 'current';
  switch (intent) {
    case 'info': {
      bgColor = 'bg-blue-100 dark:bg-blue-900/50';
      borderColor = 'border-blue-700 dark:border-blue-300';
      break;
    }
    case 'warning': {
      bgColor = 'bg-orange-100 dark:bg-orange-900/50';
      borderColor = 'border-orange-700 dark:border-orange-300';
      break;
    }
    case 'error': {
      bgColor = 'bg-red-100 dark:bg-red-900/50';
      borderColor = 'border-red-700 dark:border-red-300';
      break;
    }
    case 'success': {
      bgColor = 'bg-green-100 dark:bg-green-900/50';
      borderColor = 'border-green-700 dark:border-green-300';
      break;
    }
  }

  return (
    <div
      className={`not-prose dark:text-white border-l-4 rounded-sm my-8 px-6 py-4 ${bgColor} ${borderColor}`}
    >
      <div style={{ flex: 1 }}>{content}</div>
    </div>
  );
}
