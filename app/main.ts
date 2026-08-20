import { isMobile, isTablet } from "@/hooks/Media";
import styled from "styled-components";

export const Page = styled.div`
 display: flex;
 position: relative;
 flex: 1;
 min-height: 800px;
`;

export const Logos = styled.div<{ $direction: string }>`
 display: flex;
 flex-direction: column;
 justify-content: space-between;
 position: absolute;

 top: 10%;
 bottom: 10%;
 left: ${(props) => (props.$direction == "left" ? "10%" : `calc(90% - 400px)`)};

 ${isTablet} {
  left: ${(props) =>
   props.$direction == "left" ? "10%" : `calc(90% - 250px)`};
 }
 ${isMobile} {
  display: none;
 }
`;

export const Logo = styled.div`
 display: flex;
 position: relative;
 img {
  width: 400px;
  height: fit-content;
  transition: width 0.5s ease-in-out 0.2s;

  ${isTablet} {
   width: 250px;
   height: 250px;
  }
 }
`;

export const BubbleImg = styled.div`
 display: flex;
 position: absolute;
 left: 20%;
 top: 17%;

 img {
  width: 200px;
  height: 200px;

  &:hover {
   width: 230px;
  }

  ${isTablet} {
   width: 150px;
   height: 150px;

   &:hover {
    width: 180px;
   }
  }
 }

 ${isTablet} {
  left: 15%;
  top: 23%;
 }
`;

export const Wrapper = styled.div`
 display: flex;
 margin: auto;
 z-index: 1;

 img {
  cursor: pointer;
  object-fit: contain;
  transition: height 0.5s ease-in-out 0.2s;

  ${isTablet} {
   height: 350px;
  }
 }
`;

export const Click = styled.div`
 position: absolute;
 color: var(--Hover);
 top: calc(50% - 350px);
 left: calc(50% + 50px);
 transform: translate(-50%, -50%);

 animation: clickFloat 1.5s ease-in-out infinite;
 @keyframes clickFloat {
  0%,
  100% {
   transform: translate((-50%, 0));
  }
  50% {
   transform: translate(-50%, 8px);
  }
 }

 ${isTablet} {
  top: calc(50% - 250px);
  left: calc(50% + 25px);
 }

 img {
  width: 90px;
  height: fit-content;
  position: absolute;

  ${isTablet} {
   width: 60px;
  }
 }

 p {
  position: absolute;
  top: 30px;
  left: 5px;
  font: var(--HeadingMedium);

  ${isTablet} {
   top: 20px;
   left: 5px;
   font: var(--ContentSmall);
  }
 }
`;
