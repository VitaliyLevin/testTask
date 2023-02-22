import React, { FC, useState } from 'react';
import { Text } from 'react-native';
import { EditModal } from '../../../screens/edit-modal/edit-modal';
import { CustomButton } from '../../atoms/custom-button/custom-button';
import { CardStyles as Styled } from './card.styles';
import { ICard } from './card.types';

export const Card: FC<ICard> = ({
  image,
  title,
  url,
  imageWidth,
  imageHeight,
  style,
  text,
  id,
  onEdit,
  deleteCard
}) => {
  const [isOpenEditModal, setIsOpenEditModal] = useState<boolean>(false);

  return (
    <>
    <EditModal 
      isOpen={isOpenEditModal}
      onEdit={onEdit}
      closeModal={setIsOpenEditModal}
      id={id}
    />
    <Styled.Wrapper style={style}>
      <Styled.Image url={image} width={imageWidth} height={imageHeight} />
      <Styled.InfoWrapper>
        <Text>{title}</Text>
        <Text>{url}</Text>
        <Text>{text}</Text>
        <Styled.Buttons>
          <Styled.Button 
            onPress={() => setIsOpenEditModal(true)}
            width={100}
            height={25}
            color='#888DBD'
            title='edit'
            textColor='white'
          />
          <CustomButton 
            onPress={() => deleteCard(id)}
            width={100}
            height={25}
            color='#888DBD'
            title='delete'
            textColor='white'
          />
        </Styled.Buttons>
      </Styled.InfoWrapper>
    </Styled.Wrapper>
    </>
  )
}
