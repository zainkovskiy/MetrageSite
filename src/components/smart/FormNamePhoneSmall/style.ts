import styled, { css } from 'styled-components';

export const FormNamePhone = styled.form<{ $back: boolean }>`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 0.5rem;
  border-radius: 64px 0px;
  padding: 2rem 1rem 1rem 1rem;
  box-sizing: border-box;
  max-width: 20rem;
  ${({ $back }) =>
    $back &&
    css`
      background-color: #f6f7f7;
      box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.1);
    `}
`;
export const InputsWrap = styled.form`
  grid-column-start: 2;
  grid-column-end: 4;
  display: flex;
  gap: 0.5rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
