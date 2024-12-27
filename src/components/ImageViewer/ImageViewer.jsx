import React, { useState, useEffect } from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';

function ImageViewer({ imageUrls }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageError, setImageError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const MAX_RETRIES = 3;
  
  if (!imageUrls || imageUrls.length === 0) return null;
  
  const urls = Array.isArray(imageUrls) ? imageUrls : [imageUrls];

  const handleImageError = () => {
    console.error('Failed to load image:', urls[currentImageIndex]);
    if (retryCount < MAX_RETRIES) {
      // Retry loading after a short delay
      setTimeout(() => {
        setRetryCount(prev => prev + 1);
        // Force reload by appending a timestamp
        const img = document.querySelector(`img[src="${urls[currentImageIndex]}"]`);
        if (img) {
          img.src = `${urls[currentImageIndex]}${urls[currentImageIndex].includes('?') ? '&' : '?'}t=${Date.now()}`;
        }
      }, 1000);
    } else {
      setImageError(true);
    }
  };

  useEffect(() => {
    // Reset retry count when changing images
    setRetryCount(0);
    setImageError(false);
  }, [currentImageIndex]);

  if (imageError) {
    return (
      <div className="text-red-500 text-center p-4">
        <p>Failed to load image after {MAX_RETRIES} attempts.</p>
        <button 
          onClick={() => {
            setRetryCount(0);
            setImageError(false);
          }}
          className="mt-2 px-4 py-2 bg-primary text-white rounded hover:bg-primary/90"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="mb-6 space-y-2">
      <div className="border rounded-lg overflow-hidden bg-white">
        <div className="relative w-full h-[400px]">
          <TransformWrapper
            initialScale={1}
            minScale={0.1}
            maxScale={4}
            centerOnInit={true}
            wheel={{ disabled: true }}
            limitToBounds={true}
            initialPositionX={0}
            initialPositionY={0}
            alignmentAnimation={{ disabled: true }}
            panning={{ disabled: false }}
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
                <TransformComponent
                  wrapperStyle={{
                    width: "100%",
                    height: "100%"
                  }}
                  contentStyle={{
                    width: "100%",
                    height: "100%"
                  }}
                >
                  <img
                    key={`${urls[currentImageIndex]}?t=${retryCount}`}
                    src={urls[currentImageIndex]}
                    alt={`Question reference ${currentImageIndex + 1}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain"
                    }}
                    onError={handleImageError}
                  />
                </TransformComponent>
              </>
            )}
          </TransformWrapper>
        </div>
      </div>
      
      {urls.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2 justify-center">
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
                onError={(e) => {
                  e.target.src = url;
                }}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default ImageViewer; 