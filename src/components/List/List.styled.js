import styled from "styled-components";

export const LoaderOverlay = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(2px);
  z-index: 999;
`;

export const List = styled.ul`
  width: 1160px;
  margin: 65px auto 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 320px);
  gap: 100px;
  list-style: none;
`;

export const ListItem = styled.li`
  flex-shrink: 0;
`;
