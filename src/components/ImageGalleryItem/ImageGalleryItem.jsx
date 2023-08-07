import React from 'react';

export const ImageGalleryItem = ({
  image: { id, webformatURL, largeImageURL },
}) => {
  return (
    <li className="gallery-item">
      <img src={webformatURL} alt={largeImageURL} />
    </li>
  );
};
