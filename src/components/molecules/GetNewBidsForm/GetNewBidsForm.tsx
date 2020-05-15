import React, { useRef, FormEvent, RefObject } from 'react';
import styled from 'styled-components';
import NewBidsInput from '../../atoms/NewBidsInput/NewBidsInput';
import StandardButton from '../../atoms/StandardButton/StandardButton';

const StyledForm = styled.form`
  display: flex;
  height: 150px;
`;

const StyledButton = styled(StandardButton)`
  color: ${({ theme }) => theme.lottoYellow};
  border: 2px solid ${({ theme }) => theme.lottoYellow};
  background-color: ${({ theme }) => theme.transparentLottoYellow};
`;

const StyledButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
  justify-content: space-between;
  min-height: 100%;
`;

const GetNewBidsForm = (props: { getList: Function }) => {
  const { getList } = props;
  const plainInput = useRef<HTMLTextAreaElement>(null);

  const handleForm = (event: FormEvent, plainInput: RefObject<HTMLTextAreaElement>) => {
    event.preventDefault();
    const plainInputValue = plainInput.current ? plainInput.current.value : '';
    getList(plainInputValue);
    if (plainInput.current) plainInput.current.value = '';
  };
  return (
    <StyledForm
      onSubmit={(event) => {
        handleForm(event, plainInput);
      }}
    >
      <NewBidsInput rows={5} placeholder={'Podaj dane do analizy'} ref={plainInput} />
      <StyledButtonsWrapper>
        <StandardButton type={'submit'}>Analizuj</StandardButton>
        <StyledButton type={'reset'}>Resetuj</StyledButton>
      </StyledButtonsWrapper>
    </StyledForm>
  );
};

export default GetNewBidsForm;
