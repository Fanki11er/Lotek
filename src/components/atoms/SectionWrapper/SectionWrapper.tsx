import styled from 'styled-components';
const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 600px;
  width: 48%;
  height: 550px;
  border: 3px solid ${({ theme }) => theme.lottoYellow};
  border-radius: 15px;
  padding: 25px;
  margin-top: 30px;
`;

export default SectionWrapper;
