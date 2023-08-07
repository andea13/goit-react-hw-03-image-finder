import React, { Component } from 'react';
import { fetchImagesByQuery } from 'service/utils';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images }) => {
  return (
    <ul className="gallery">
      {images.map(image => (
        <ImageGalleryItem image={image} key={image.id} />
      ))}
    </ul>
  );
};
