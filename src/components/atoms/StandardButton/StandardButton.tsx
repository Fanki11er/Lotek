import styled from 'styled-components';

const StandardButton = styled.button`
  border: 2px solid ${({ theme }) => theme.green};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.transparentGreen};
  color: ${({ theme }) => theme.green};
  width: 110px;
  height: 35px;
  font-size: ${({ theme }) => theme.fontSizeDesktop.normal};
`;

export default StandardButton;
