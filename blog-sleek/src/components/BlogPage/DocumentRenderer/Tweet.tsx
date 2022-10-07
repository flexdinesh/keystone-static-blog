import React from 'react';

type TweetProps = {
  url: string;
};

export function Tweet({ url }: TweetProps) {
  const wrapper = React.useRef<HTMLQuoteElement>(null);
  // won't update when the website's theme toggle is flipped
  // because the website uses css based theming but
  // twitter embed uses js based theming
  // and we can't rerender this component when website theme changes
  const [tweetTheme, setTweetTheme] = React.useState<'light' | 'dark'>('light');

  React.useEffect(() => {
    const isDarkSetInHTML = document.documentElement.classList.contains('dark');
    if (isDarkSetInHTML) {
      setTweetTheme('dark');
    }
    const script = document.createElement('script');
    script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
    wrapper.current!.appendChild(script);
  }, []);

  return (
    <div className="flex items-center justify-center">
      <blockquote
        ref={wrapper}
        className="twitter-tweet"
        data-conversation="none"
        data-theme={tweetTheme}
      >
        <a href={url}>Loading tweet...</a>
      </blockquote>
    </div>
  );
}
