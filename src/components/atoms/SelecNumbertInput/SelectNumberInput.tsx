import React from 'react';
import styled from 'styled-components';
import { Field } from 'formik';

const StyledLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 130px;
  height: 35px;
  border: 2px solid ${({ theme }) => theme.blue};
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  background-color: ${({ theme }) => theme.transparentBlue};
  color: ${({ theme }) => theme.blue};
`;

const StyledSelect = styled(Field)`
  border: 2px solid ${({ theme }) => theme.blue};
  background-color: ${({ theme }) => theme.transparentBlue};
  color: ${({ theme }) => theme.blue};
  width: 50px;
  height: 35px;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
  outline: none;
  padding: 4px;
  transition: border 1s, background-color 1s, color 1s, box-shadow 0.2s;

  &:focus {
    box-shadow: 0px 0px 3px 1px ${({ theme }) => theme.blue};
    outline: none;
  }
`;

const StyledSelectInput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  width: 100%;
`;

const StyledOptions = styled.option`
  border: 2px solid ${({ theme }) => theme.blue};
  background-color: ${({ theme }) => theme.primary};
  outline: none;
  color: ${({ theme }) => theme.blue};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

interface Props {
  name: string;
  numberOfOptions: number;
  label: string;
  handleChange: Function;
  value: number;
}

const SelectNumberInput = (props: Props) => {
  const { name, numberOfOptions, label, handleChange, value } = props;

  const renderOptions = (numberOfOptions: number) => {
    const optionsArr: number[] = [];
    for (let i = 1; i <= numberOfOptions; i++) {
      optionsArr.push(i);
    }
    return (
      optionsArr.length &&
      optionsArr.map((number) => {
        return <StyledOptions value={number} label={number.toString()} key={number} />;
      })
    );
  };
  return (
    <StyledSelectInput>
      <StyledLabel>{label}</StyledLabel>
      <StyledSelect
        as={'select'}
        name={name}
        onChange={(e: any) => handleChange(name, e.target?.value)}
        value={value}
        className={!numberOfOptions ? 'notActive' : undefined}
      >
        {renderOptions(numberOfOptions)}
      </StyledSelect>
    </StyledSelectInput>
  );
};

export default SelectNumberInput;
