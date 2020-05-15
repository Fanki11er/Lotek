import styled from 'styled-components';
import { bidColorSchema } from '../../../utils/types';

const NumberBall = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  color: ${(props: { schema: bidColorSchema }) => props.schema.secondColor};
  background-color: ${(props: { schema: bidColorSchema }) => props.schema.mainColor};
  border-radius: 50%;
  font-weight: 900;
  letter-spacing: 1.5px;
  font-size: ${({ theme }) => theme.fontSizeDesktop.smaller};
  margin-right: 5px;
`;

export default NumberBall;
