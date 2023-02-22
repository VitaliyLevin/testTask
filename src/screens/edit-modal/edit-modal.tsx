import React, { FC, useState } from 'react';
import { Modal } from 'react-native';
import { CustomButton } from '../../components/atoms/custom-button/custom-button';
import { CustomInput } from '../../components/atoms/custom-input/custom-input';
import { EditModalStyles as Styled } from './edit-modal.styles';
import { IEditModal } from './edit-modal.type';

export const EditModal: FC<IEditModal> = ({isOpen, id, onEdit, closeModal}) => {
  const [title, setTitle] = useState<string | null>(null);
  const [text, setText] = useState<string | null>(null);
  const [url, setUrl] = useState<string | null>(null);

  const onSubmit = () => {    
    onEdit(id, {
      ...(title ? {title} : {}),
      ...(text ? {text} : {}),
      ...(url ? {url} : {}),
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
          <CustomButton 
            title="edit"
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