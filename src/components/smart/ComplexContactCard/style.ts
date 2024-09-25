import styled from 'styled-components';

export const ComplexContactCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.palette.grey};
  border-radius: 40px 0;
  min-width: 300px;
`;
export const ComplexContactCardImg = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 40px;
`;
