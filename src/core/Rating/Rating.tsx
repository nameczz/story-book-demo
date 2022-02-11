import React from 'react';
import Rating, { RatingProps } from '@mui/material/Rating';

/**
- Use an avatar for attributing actions or content to specific users.
- The user's name should always be present when using Avatar – either printed beside the avatar or in a tooltip.
**/
export const ZRating = (props: RatingProps) => {
  return <Rating {...props}></Rating>;
};
