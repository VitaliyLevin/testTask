import React, { FC } from 'react';
import { Modal } from 'react-native';
import { CustomButton } from '../../components/atoms/custom-button/custom-button';
import { IModalWindow } from './madal-window.types';
import { ModalWindowStyles as Styled } from './modal-window.styles';

export const ModalWindow: FC<IModalWindow> = ({ 
  isOpen,
  setIsOpen,
  setIsError,
  isError
}) => {

  const closeModal = () => {
    setIsOpen(false);
    if (isError) {
      setIsError(false);
    } 
  }

  return (
    <Modal
        animationType="fade"
        transparent={true}
        visible={isOpen}
    >
      <Styled.Wrapper>
        <Styled.ModalWrapper>
          <Styled.Text>
            {isError ? "Something went wrong" : "successful"}
          </Styled.Text>
          <CustomButton 
            onPress={closeModal}
            width={50}
            height={20}
            title="close"
            textColor="white"
            color="#888DBD"
          />
        </Styled.ModalWrapper>
      </Styled.Wrapper>
    </Modal>
  )
}
