import React, { FC, useState } from 'react';
import { Modal } from 'react-native';
import { CustomButton } from '../../components/atoms/custom-button/custom-button';
import { CustomInput } from '../../components/atoms/custom-input/custom-input';
import { CreateModalStyles as Styled } from './create-modal.styles';
import { ICreateModal } from './create-modal.types';

export const CreateModal: FC<ICreateModal> = ({isOpen, add, closeModal}) => {
  const [title, setTitle] = useState<string | null>(null);
  const [text, setText] = useState<string | null>(null);
  const [url, setUrl] = useState<string | null>(null);
  const [image, setImage] = useState<string | null>(null);

  const onSubmit = () => {    
    add({
      ...(title ? {title} : {}),
      ...(text ? {text} : {}),
      ...(url ? {url} : {}),
      ...(image ? {image} : {}),
    })
    closeModal(!isOpen);
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isOpen}
    >
      <Styled.Wrapper>
        <Styled.ModalWrapper>
          <CustomInput 
            value={title || ''}
            onChange={setTitle} 
            label="Title"
          />
          <CustomInput 
            value={text || ''}
            onChange={setText}
            label="Text"
          />
          <CustomInput 
            value={url || ''}
            onChange={setUrl} 
            label="URL"
          />
          <CustomInput 
            value={image || ''}
            onChange={setImage} 
            label="Image"
          />
          <CustomButton 
            title="add"
            height={30}
            width={160}
            textColor="white"
            onPress={onSubmit}
            color="#888DBD"
          />
        </Styled.ModalWrapper>
      </Styled.Wrapper>
    </Modal>
  )
}