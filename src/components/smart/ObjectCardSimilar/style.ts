import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ObjectCardSimilar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const ObjectCardImgWrap = styled(Link)`
  display: flex;
`;
export const ObjectCardImg = styled.img`
  height: 270px;
  width: 100%;
  object-fit: cover;
  border-radius: 40px 0;
  background-color: #c0c0c0;
  box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.01),
    0px 6px 5px 0px rgba(0, 0, 0, 0.03), 0px 12px 10px 0px rgba(0, 0, 0, 0.04),
    0px 22px 16px 0px rgba(0, 0, 0, 0.04), 0px 40px 32px 0px rgba(0, 0, 0, 0.05),
    0px 100px 80px 0px rgba(0, 0, 0, 0.06), 0px 0px 20px 0px rgba(0, 0, 0, 0.05);
`;
