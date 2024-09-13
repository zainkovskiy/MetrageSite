import styled from 'styled-components';

export const MainBackTop = styled.div`
  background-image: url('https://metragegroup.com/resources/main-banner.webp');
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 720px;
  position: relative;
  @media (max-width: 480px) {
    min-height: 80vh;
  }
`;
