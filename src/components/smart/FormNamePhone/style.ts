import styled from 'styled-components';

export const FormNamePhone = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    gap: 0;
    margin-bottom: 2rem;
  }
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
export const ButtonWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-left: 0.5rem;
  @media (max-width: 768px) {
    margin-left: 0;
  }
`;
export const ButtonTextWrapper = styled.div`
  position: absolute;
  top: 100%;
`;
