import React from 'react';
import { LoadMoreButton } from './Button.styled';

export const Button = ({ onNextPage }) => {
  return <LoadMoreButton onClick={onNextPage}>Load more</LoadMoreButton>;
};
