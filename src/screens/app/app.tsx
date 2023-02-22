import React, { useEffect, useMemo, useState } from 'react';
import { CustomStatusBar } from '../../components/atoms/custom-status-bar/custom-status-bar';
import { Loader } from '../../components/molecules/loader/loader';
import { addDataEntry, deleteDataEntry, getAllDataEntries, updateDataEntry } from '../../services/api/client';
import { IDataEntryInput } from '../../services/model/types';
import { CreateModal } from '../create-modal/create-modal';
import { ModalWindow } from '../modal-window/modal-window';
import { AppStyles as Styled } from './app.styles';

export const App = () => {
  const [data, setData] = useState<IDataEntryInput[]>([]);
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpenCreateModal, setIsOpenCreateModal] = useState<boolean>(false);
  const [isPendingReq, setIsPendingReq] = useState<boolean>(false);

  const addCard = (body: Partial<Omit<IDataEntryInput, 'id'>>) => {
    setIsLoading(true);
    setIsPendingReq(true);
    addDataEntry(body)
      .catch(() => setIsError(true))
      .finally(() => { 
        setIsPendingReq(false);
      })
  };

  const updateData = (id: number, input: Partial<IDataEntryInput>) => {    
    setIsLoading(true);
    setIsPendingReq(true);
    updateDataEntry(id, input)
      .catch(() => setIsError(true))
      .finally(() => { 
        setIsPendingReq(false);
      })
  };

  const deleteCard = (id: number) => {
    setIsLoading(true);
    setIsPendingReq(true);
    deleteDataEntry(id)
      .catch(() => setIsError(true))
      .finally(() => { 
        setIsPendingReq(false);
      })
  };

  const getInfo = async () => {
    try {
      const data = await getAllDataEntries();  
      setData(data.reverse());   
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
      if (data.length !== 0)
      setIsOpen(true);
    }
  }

  useEffect(() => {
    
    if ((isPendingReq === false && data.length !== 0) || data.length === 0){
      setIsLoading(true);
      getInfo()
    }
  }, [isPendingReq]);  
    
  const dataEntries = useMemo(() => {
    return data.map((card, i) => (
          <Styled.Card
            key={card.id}
            id={card.id}
            text={card.text}
            image={card.image}
            imageHeight={100}
            imageWidth={100}
            title={card.title}
            url={card.url}
            onEdit={updateData}
            deleteCard={deleteCard}
          />)
        )
  }, [data])
  
  return (
    <>
    <Loader isLoading={isLoading} />
    <ModalWindow 
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      setIsError={setIsError}
      isError={isError}
    />
    <CreateModal 
      isOpen={isOpenCreateModal}
      add={addCard}
      closeModal={setIsOpenCreateModal}
    />
    <Styled.Wrapper>
      <CustomStatusBar background='#888DBD' barStyle='light-content' />
      <Styled.CardsWrapper >
        {data.length !== 0 ? dataEntries : null}
      </Styled.CardsWrapper>
      <Styled.Add onPress={() => setIsOpenCreateModal(true)}>
        <Styled.Text>+</Styled.Text>
      </Styled.Add>
    </Styled.Wrapper>
    </>
  );
};
