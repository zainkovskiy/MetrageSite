import styled from 'styled-components';

export const ContactsOffice = styled.div`
  padding: 1rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: ${({ theme }) => theme.palette.white};
  transition: background-color 0.3s;
  margin-right: 1.5rem;
  cursor: pointer;
  @media (hover: hover) {
    &:hover {
      background-color: ${({ theme }) => theme.palette.grey};
    }
    &:active {
      background-color: ${({ theme }) => theme.palette.white};
    }
  }
  @media (hover: hover) {
    &:active {
      background-color: ${({ theme }) => theme.palette.grey};
    }
  }
`;
