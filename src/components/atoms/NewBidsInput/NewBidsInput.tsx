import styled from 'styled-components';

const NewBidsInput = styled.textarea`
  border: 2px solid ${({ theme }) => theme.blue};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.transparentBlue};
  width: 185px;
  height: 150px;
  font-size: ${({ theme }) => theme.fontSizeDesktop.normal};
  text-align: center;
  padding-top: 65px;
  resize: none;
  color: ${({ theme }) => theme.blue};
  caret-color: ${({ theme }) => theme.orange};
  overflow: hidden;
  &::placeholder {
    color: ${({ theme }) => theme.blue};
    transition: color 0.5s;
  }
  &:focus {
    &::placeholder {
      color: transparent;
    }
  }
`;

export default NewBidsInput;
