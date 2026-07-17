
import React, { useEffect, useState } from 'react';
import { removeBackground, loadImage } from '../utils/backgroundRemoval';

interface ProcessedImage {
  name: string;
  originalUrl: string;
  processedUrl: string | null;
  isProcessing: boolean;
  error: string | null;
}

interface BackgroundRemovalProcessorProps {
  images: { name: string; url: string }[];
  onProcessed: (results: { [key: string]: string }) => void;
}

const BackgroundRemovalProcessor: React.FC<BackgroundRemovalProcessorProps> = ({ images, onProcessed }) => {
  const [processedImages, setProcessedImages] = useState<ProcessedImage[]>([]);

  useEffect(() => {
    const initializeImages = () => {
      const initialized = images.map(img => ({
        name: img.name,
        originalUrl: img.url,
        processedUrl: null,
        isProcessing: false,
        error: null
      }));
      setProcessedImages(initialized);
    };

    initializeImages();
  }, [images]);

  const processImage = async (imageName: string, imageUrl: string) => {
    setProcessedImages(prev => 
      prev.map(img => 
        img.name === imageName 
          ? { ...img, isProcessing: true, error: null }
          : img
      )
    );

    try {
      // Fetch the image
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      
      // Load the image
      const imageElement = await loadImage(blob);
      
      // Remove background
      const processedBlob = await removeBackground(imageElement);
      const processedUrl = URL.createObjectURL(processedBlob);
      
      setProcessedImages(prev => 
        prev.map(img => 
          img.name === imageName 
            ? { ...img, processedUrl, isProcessing: false }
            : img
        )
      );
      
      return processedUrl;
    } catch (error) {
      console.error(`Error processing ${imageName}:`, error);
      setProcessedImages(prev => 
        prev.map(img => 
          img.name === imageName 
            ? { ...img, isProcessing: false, error: error instanceof Error ? error.message : 'Unknown error' }
            : img
        )
      );
      return null;
    }
  };

  const handleProcessAll = async () => {
    const results: { [key: string]: string } = {};
    
    for (const image of images) {
      const processedUrl = await processImage(image.name, image.url);
      if (processedUrl) {
        results[image.name] = processedUrl;
      }
    }
    
    onProcessed(results);
  };

  return (
    <div className="fixed inset-0 bg-navy/85 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-navy-800 border border-white/10 p-8 rounded-none max-w-md w-full mx-4 text-ink">
        <h3 className="font-display text-xl mb-4">Processing Team Photos</h3>
        <p className="text-ink-muted mb-6 text-sm">
          Removing backgrounds from T.V. Hall and Brandon Jarnigan's photos to create a consistent look.
        </p>
        
        <div className="space-y-3 mb-6">
          {processedImages.map((img) => (
            <div key={img.name} className="flex items-center justify-between">
              <span className="text-sm text-ink">{img.name}</span>
              <div className="flex items-center">
                {img.isProcessing && (
                  <div className="w-4 h-4 border-2 border-gold border-t-transparent rounded-full animate-spin mr-2"></div>
                )}
                {img.processedUrl && (
                  <span className="text-gold text-sm">✓ Done</span>
                )}
                {img.error && (
                  <span className="text-purple text-sm">✗ Error</span>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <button
          onClick={handleProcessAll}
          className="w-full bg-gold text-navy py-2 px-4 text-[11px] font-semibold uppercase tracking-[0.22em] hover:brightness-110 transition-all"
        >
          Process Images
        </button>
      </div>
    </div>
  );
};

export default BackgroundRemovalProcessor;
