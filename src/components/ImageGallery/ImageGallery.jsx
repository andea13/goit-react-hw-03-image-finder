import React from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryList } from './ImageGallery.styled';

export const ImageGallery = ({ images, handleModal }) => {
  return (
    <ImageGalleryList>
      {images.map(image => (
        <ImageGalleryItem image={image} key={image.id} handleOpen={()=>handleModal(image) }/>
      ))}
    </ImageGalleryList>
  );
};
