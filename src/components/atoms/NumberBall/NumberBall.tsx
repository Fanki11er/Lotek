import styled from 'styled-components';
import { bidColorSchema } from '../../../utils/types';

interface Props {
  schema: bidColorSchema;
}

const NumberBall = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  color: ${(props: Props) => props.schema.secondColor};
  background-color: ${(props: Props) => props.schema.mainColor};
  border-radius: 50%;
  font-weight: 900;
  letter-spacing: 1px;
  font-size: ${({ theme }) => theme.fontSizeDesktop.smaller};
  margin-right: 5px;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
`;

export default NumberBall;
