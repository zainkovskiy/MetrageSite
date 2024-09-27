import styled from 'styled-components';
export const IconDzen = styled.img`
  width: 20px;
  height: 20px;
  object-fit: contain;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0;
  gap: 4rem;
`;
export const FooterLinksWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 769px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export const FooterWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
export const FooterSubscribe = styled.form`
  max-width: 215px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;
