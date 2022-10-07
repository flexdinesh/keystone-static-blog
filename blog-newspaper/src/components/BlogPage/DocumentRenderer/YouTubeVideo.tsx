import React from 'react';

type YouTubeVideoProps = {
  url: string;
  altText: string;
};

export function YouTubeVideo({ url, altText = 'Embedded YouTube video' }: YouTubeVideoProps) {
  const embedId = getYouTubeEmbedId(url);

  return (
    <div className="w-full">
      <div className="overflow-hidden pb-[56.25%] relative">
        <iframe
          className="absolute left-0 top-0 h-full w-full"
          width="100%"
          height="480"
          src={`https://www.youtube.com/embed/${embedId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={altText}
        />
      </div>
    </div>
  );
}

function getYouTubeEmbedId(url: string) {
  let embedId = '';
  const parsedUrl = url.replace(/(>|<)/gi, '').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
  if (parsedUrl[2] !== undefined) {
    // eslint-disable-next-line no-useless-escape
    const parsedId = parsedUrl[2].split(/[^0-9a-z_\-]/i);
    embedId = parsedId[0];
  } else {
    embedId = url;
  }
  return embedId;
}
