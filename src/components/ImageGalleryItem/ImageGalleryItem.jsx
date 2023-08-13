import React from 'react';
import {
  ImageGalleryItemWrapper,
  ImageGalleryItemImage,
} from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  image: { id, webformatURL, largeImageURL },
  handleOpen,
}) => {
  return (
    <ImageGalleryItemWrapper>
      <ImageGalleryItemImage
        src={webformatURL}
        alt={largeImageURL}
        onClick={handleOpen}
      />
    </ImageGalleryItemWrapper>
  );
};
