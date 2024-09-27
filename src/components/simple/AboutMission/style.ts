import styled from 'styled-components';

export const AboutMission = styled.div`
  display: grid;
  grid-template-columns: 1fr 40%;
  gap: 1rem;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;
