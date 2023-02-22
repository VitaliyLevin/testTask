import React, { FC } from 'react';
import { CustomImageStyles as Styled } from './custom-image.styles';
import { ICustomImage } from './custom-image.types';

export const CustomImage: FC<ICustomImage> = ({
  url,
  width,
  height,
  style
}) => {

  return (
    <Styled.Image 
      source={{uri: url}}
      width={width}
      height={height}
      style={style}
    />
  )
}
