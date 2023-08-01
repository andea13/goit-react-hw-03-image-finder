import React from 'react';

export const ImageGalleryItem = (id, webformatURL, largeImageURL) => {
  return (
    <li className="gallery-item" key={id}>
      <img src={webformatURL} alt={largeImageURL} />
    </li>
  );
};
