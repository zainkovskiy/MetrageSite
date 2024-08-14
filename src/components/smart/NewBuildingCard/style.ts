import styled from 'styled-components';

export const NewBuildingCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.palette.grey};
  border-radius: 2px;
  overflow: hidden;
`;
export const NewBuildingCardImage = styled.img`
  height: 20rem;
  width: 100%;
  object-fit: cover;
`;
export const NewBuildingCardWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  box-sizing: border-box;
  flex-grow: 1;
  gap: 1rem;
`;
export const NewBuildingCardTextWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
export const NewBuildingDescriptionText = styled.span`
  font-size: 16px;
  font-family: ${({ theme }) => theme.font.regular};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  margin-top: 1rem;
`;
