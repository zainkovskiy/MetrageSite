import styled from 'styled-components';

export const MainProfTeam = styled.div`
  background-color: ${({ theme }) => theme.palette.primaryDark};
  border-radius: 0 64px;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr;
  transform: translate(0, -2rem);
`;
export const MainProfTeamLink = styled.div`
  margin-top: 1rem;
`;
export const MainProfTeamWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px 48px;
  gap: 0.5rem;
`;
export const MainProfTeamImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
