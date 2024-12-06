import React, { useState } from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';

function ImageViewer({ imageUrls }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageError, setImageError] = useState(false);
  
  if (!imageUrls || imageUrls.length === 0) return null;
  
  const urls = Array.isArray(imageUrls) ? imageUrls : [imageUrls];

  const handleImageError = () => {
    console.error('Failed to load image:', urls[currentImageIndex]);
    setImageError(true);
  };

  if (imageError) {
    return <div className="text-red-500">Failed to load image</div>;
  }

  return (
    <div className="mb-6 space-y-2">
      <div className="border rounded-lg overflow-hidden bg-white relative">
        <TransformWrapper
          initialScale={1}
          minScale={1}
          maxScale={4}
          centerOnInit={true}
        >
          {({ zoomIn, zoomOut, resetTransform }) => (
            <>
              <div className="absolute top-2 right-2 z-10 flex gap-2">
                <button
                  onClick={() => zoomIn()}
                  className="p-2 bg-white/90 rounded-lg shadow-md hover:bg-white transition-colors"
                  title="Zoom In"
                >
                  <ZoomIn className="w-5 h-5" />
                </button>
                <button
                  onClick={() => zoomOut()}
                  className="p-2 bg-white/90 rounded-lg shadow-md hover:bg-white transition-colors"
                  title="Zoom Out"
                >
                  <ZoomOut className="w-5 h-5" />
                </button>
                <button
                  onClick={() => resetTransform()}
                  className="p-2 bg-white/90 rounded-lg shadow-md hover:bg-white transition-colors"
                  title="Reset Zoom"
                >
                  <RotateCcw className="w-5 h-5" />
                </button>
              </div>
              <TransformComponent>
                <img
                  src={urls[currentImageIndex]}
                  alt={`Question reference ${currentImageIndex + 1}`}
                  className="w-full h-auto"
                  style={{ maxHeight: '400px', objectFit: 'contain' }}
                  onError={handleImageError}
                />
              </TransformComponent>
            </>
          )}
        </TransformWrapper>
      </div>
      
      {urls.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2">
          {urls.map((url, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`flex-shrink-0 border-2 rounded overflow-hidden 
                ${currentImageIndex === index 
                  ? 'border-primary' 
                  : 'border-transparent hover:border-gray-300'
                }`}
            >
              <img
                src={url}
                alt={`Thumbnail ${index + 1}`}
                className="w-16 h-16 object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default ImageViewer; 