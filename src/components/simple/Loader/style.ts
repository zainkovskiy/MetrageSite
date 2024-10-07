import styled from 'styled-components';
import { ReactComponent as LoaderIcon } from '../../../assets/images/metrage-loader.svg';

export const LoaderContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Loader = styled(LoaderIcon)`
  width: 500px;
  @media (max-width: 480px) {
    width: 300px;
  }
`;
