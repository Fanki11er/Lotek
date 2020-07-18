import styled from 'styled-components';

const StyledBidRow = styled.li`
  display: flex;
  justify-content: space-around;
  width: 95%;
  height: 30px;
  padding: 3px 0;
  margin-top: 5px;
  border: 1px solid ${({ theme }) => theme.green};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.transparentGreen};
  animation-name: show;
  animation-duration: 0.7s;

  @keyframes show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export default StyledBidRow;
