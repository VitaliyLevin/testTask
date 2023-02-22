import React, { FC } from 'react';
import { CustomButtomStyles as Styled } from './custom-button.styles';
import { ICustomButton } from './custom-button.types';

export const CustomButton: FC<ICustomButton> = ({ 
  onPress, 
  height,
  width,
  color,
  style,
  title,
  textColor,
}) => {
  
  return (
    <Styled.Wrapper 
      onPress={onPress}
      width={width}
      height={height}
      style={style}
      color={color}
    >
    <Styled.Text textColor={textColor}>{title}</Styled.Text>
    </Styled.Wrapper>
  )
}
