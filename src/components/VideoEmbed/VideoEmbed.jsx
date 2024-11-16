import React from 'react';

function VideoEmbed({ videoId }) {
  if (!videoId) return null;

  return (
    <div className="aspect-w-16 aspect-h-9 mb-6">
      <iframe
        className="w-full rounded-lg"
        style={{ aspectRatio: '16/9' }}
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

export default VideoEmbed; 