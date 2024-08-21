import styled from 'styled-components';

export const CheckboxCustomInput = styled.span`
  background-image: url(checkboxIconUrl);
  background-position: center;
  background-repeat: no-repeat;
  width: 16px;
  height: 16px;
  border-radius: 2px;
  border: 1px solid;
  border-color: ${({ theme }) => theme.palette.greyDark};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  transition: border-color 0.3s, background-color 0.3s;
`;
export const CheckboxInput = styled.input`
  display: none;
  &:checked + ${CheckboxCustomInput} {
    background-color: ${({ theme }) => theme.palette.black};
    border-color: ${({ theme }) => theme.palette.black};
  }
`;
export const Checkbox = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  font-size: 16px;
  font-family: ${({ theme }) => theme.font.regular};
  color: ${({ theme }) => theme.palette.black};
  transition: color 0.3s;
  &:has(${CheckboxInput}:disabled) {
    color: ${({ theme }) => theme.palette.greyDark};
    opacity: 0.7;
    pointer-events: none;
  }
  &:has(${CheckboxInput}:disabled) > ${CheckboxCustomInput} {
    border-color: ${({ theme }) => theme.palette.greyDark};
  }
  &:has(${CheckboxInput}:disabled:checked) > ${CheckboxCustomInput} {
    background-color: ${({ theme }) => theme.palette.greyDark};
  }
  @media (hover: hover) {
    &:hover {
      color: ${({ theme }) => theme.palette.primaryLite};
    }
    &:hover > ${CheckboxCustomInput} {
      border-color: ${({ theme }) => theme.palette.primaryLite};
    }
    &:hover:has(${CheckboxInput}:checked) > ${CheckboxCustomInput} {
      background-color: ${({ theme }) => theme.palette.primaryLite};
    }
  }
`;
