import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 80px;
  padding-bottom: 50px;
`;

export const Title = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 20px;
  margin: 0 0 40px;
`;

export const SliderWrapper = styled.div`
  padding: 0 100px;

  .swiper {
    width: 100%;
  }

  .swiper-slide {
    width: 500px;
    height: 200px;
  }

  .swiper-slide-active {
    transform: scale(1.1);
  }
`;

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
  width: 100%;
  max-width: 1140px;
  margin: 40px auto 0;
  padding: 0 15px;
  list-style: none;
  box-sizing: border-box;
  display: grid;
  gap: 30px;
  justify-content: center;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr) !important;
  }

  @media (min-width: 680px) and (max-width: 1023px) {
    grid-template-columns: repeat(2, 1fr) !important;
  }

  @media (max-width: 679px) {
    grid-template-columns: 1fr !important;
  }
`;

export const ListItem = styled.li`
  width: 100%;
  max-width: 320px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;

export const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
