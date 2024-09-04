import styled from 'styled-components';

export const MainRealtorCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
export const MainRealtorCardImgWrap = styled.div`
  display: flex;
  position: relative;
`;
export const MainRealtorCardImg = styled.img`
  width: 100%;
  height: 16rem;
  object-fit: cover;
  border-radius: 40px 0;
  cursor: pointer;
  background-color: #c0c0c0;
`;
export const MainRealtorCardWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: space-between;
  flex-grow: 1;
`;
export const MainRealtorCardWrapText = styled.div`
  display: flex;
  flex-direction: column;
`;
export const MainRealtorCardWrapButton = styled.div`
  white-space: nowrap;
`;
export const MainRealtorCardSpeciality = styled.div`
  width: 60%;
  background-color: ${({ theme }) => theme.palette.black};
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 0.25rem 0.5rem;
  box-sizing: border-box;
  white-space: nowrap;
`;
