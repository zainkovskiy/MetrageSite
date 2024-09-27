import styled from 'styled-components';

export const AboutCompany = styled.div`
  margin-top: 2rem;
`;
export const AboutCompanyImage = styled.div`
  background-image: url('https://metragegroup.com/resources/about-main.webp');
  height: 700px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  @media (max-width: 768px) {
    height: 500px;
  }
  @media (max-width: 480px) {
    height: 300px;
  }
`;
export const AboutCompanyBlocks = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  transform: translate(0, 30%);
  @media (max-width: 768px) {
    gap: 1rem;
    grid-template-columns: 1fr;
    transform: translate(0, 0);
    margin-bottom: 40px;
  }
`;
export const AboutCompanyBlock = styled.div`
  padding: 28px;
  box-sizing: border-box;
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 0px 32px 0px 32px;
  height: 200px;
  background-color: #fff;
  @media (max-width: 768px) {
    padding: 1rem;
    height: 100px;
  }
`;
