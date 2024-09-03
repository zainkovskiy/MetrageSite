import styled from 'styled-components';

export const RealtorInfoSmall = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 0.5rem;
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.1);
  border-radius: 64px 0px;
  padding: 2rem 1rem 1rem 1rem;
  box-sizing: border-box;
  max-width: 20rem;
  width: 100%;
  background-color: #f6f7f7;
`;
export const RealtorInfoSmallNetwork = styled.a<{ $image: string }>`
  width: 28px;
  height: 28px;
  display: block;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 40px;
  background-image: url(${({ $image }) => $image && $image});
`;
