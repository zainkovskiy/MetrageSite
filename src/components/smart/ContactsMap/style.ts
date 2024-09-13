import styled from 'styled-components';

export const ContactsMap = styled.div`
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 1.5rem;
  height: 750px;
`;
export const ContactsMapListWrap = styled.div`
  display: flex;
  overflow: hidden;
`;
export const ContactsMapList = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  overflow: auto;
`;
