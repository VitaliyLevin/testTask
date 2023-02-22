import React, { FC } from 'react';
import { Modal } from 'react-native';
import { LoaderStyles as Styled } from './loader.styles';

export const Loader: FC<{isLoading: boolean}> = ({isLoading}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isLoading}
    >
    <Styled.Wrapper>
      <Styled.Text>LOADING...</Styled.Text>
    </Styled.Wrapper>
    </Modal>
  )
}
