import React from 'react';
// import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem'

export const ImageGallery = (images) => {
  console.log(images);
  return <ul className="gallery">{images}
    
    


    {/* <ImageGalleryItem id={id} webformatURL={webformatURL} largeImageURL={largeImageURL} /> */}
  </ul>;
};
