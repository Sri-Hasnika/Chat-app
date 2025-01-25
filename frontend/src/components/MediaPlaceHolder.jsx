import React, { useEffect } from 'react';
import { useMediaStore } from '../store/useMediaStore';

const MediaPlaceHolder = () => {
  const { getMediaFiles, mediaFiles } = useMediaStore();

  useEffect(() => {
    getMediaFiles();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 min-h-screen py-12 px-4">
      <div className="w-full max-w-4xl text-center">
        {/* Header with Tailwind CSS animation */}
        <h2 className="text-3xl font-bold text-gray-800 mb-8 animate-fade-in-down">
          Your Recent Shared Media
        </h2>

        {/* Conditional Rendering for Media Files */}
        {mediaFiles?.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 animate-fade-in">
            {mediaFiles.map((file, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg shadow-lg bg-white transform hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                <a href={file.image} target="_blank" rel="noopener noreferrer">
                  <img
                    src={file.image}
                    alt={`Media ${index + 1}`}
                    className="w-full h-48 object-cover"
                  />
                </a>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600 text-lg animate-fade-in">
            No media files shared yet. Start sharing to see them here!
          </p>
        )}
      </div>
    </div>
  );
};

export default MediaPlaceHolder;
