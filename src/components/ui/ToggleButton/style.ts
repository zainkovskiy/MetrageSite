import styled from 'styled-components';

export const ToggleButtonInput = styled.input`
  display: none;
`;

export const ToggleButton = styled.label`
  cursor: pointer;
  font-family: ${({ theme }) => theme.font.regular};
  font-size: 14px;
  color: ${({ theme }) => theme.palette.black};
  padding: 13px 16px;
  box-sizing: border-box;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.palette.grey};
  transition: background-color 0.3s, color 0.3s;
  &:has(${ToggleButtonInput}:checked) {
    background-color: ${({ theme }) => theme.palette.black};
    color: ${({ theme }) => theme.palette.white};
  }
  @media (hover: hover) {
    &:hover {
      background-color: ${({ theme }) => theme.palette.primaryLite};
      color: ${({ theme }) => theme.palette.white};
    }
  }
`;
