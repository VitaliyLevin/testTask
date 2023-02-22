import React, { FC } from 'react';
import { ICustomInput } from './custom-imput.types';
import { InputStyles as Styled } from './custom-input.style';

export const CustomInput: FC<ICustomInput> = ({
    placeholder,
    value,
    label,
    onChange,
  }) => {

  return (
    <Styled.Wrapper>
      <Styled.Label>{label}</Styled.Label>
      <Styled.Input 
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
      />
    </Styled.Wrapper>
  )
}
