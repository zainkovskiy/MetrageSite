import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const RieltorObject = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const RieltorObjectImgLink = styled(Link)`
  display: flex;
`;
export const RieltorObjectImg = styled.img`
  border-radius: 40px 0;
  height: 280px;
  width: 100%;
  object-fit: cover;
  box-shadow: 0px 2.77px 2.21px 0px rgba(0, 0, 0, 0.02),
    0px 6.65px 5.32px 0px rgba(0, 0, 0, 0.03),
    0px 12.52px 10.02px 0px rgba(0, 0, 0, 0.04),
    0px 22.34px 17.87px 0px rgba(0, 0, 0, 0.04),
    0px 41.78px 33.42px 0px rgba(0, 0, 0, 0.05),
    0px 100px 80px 0px rgba(0, 0, 0, 0.07), 0px 0px 21px 0px rgba(0, 0, 0, 0.05);
`;
