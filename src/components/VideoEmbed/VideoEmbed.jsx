import React from 'react';

function VideoEmbed({ videoId }) {
  if (!videoId) return null;

  // Get the current origin, defaulting to hoopersbeta.com in production
  const origin = typeof window !== 'undefined' 
    ? window.location.origin 
    : 'https://www.hoopersbeta.com';

  // Convert standard YouTube URL to privacy-enhanced version
  const videoUrl = videoId.replace(
    'youtube.com/embed/',
    'youtube-nocookie.com/embed/'
  ) + `&origin=${encodeURIComponent(origin)}&enablejsapi=0&modestbranding=1&controls=1&disablekb=1`;

  return (
    <div className="aspect-w-16 aspect-h-9 mb-6">
      <iframe
        className="w-full rounded-lg"
        style={{ aspectRatio: '16/9' }}
        src={videoUrl}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
}

export default VideoEmbed; 