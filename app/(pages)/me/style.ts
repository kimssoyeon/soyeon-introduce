import styled from "styled-components";
import { isMobile, isTablet } from "@/hooks/Media";

export const Wrapper = styled.div`
 display: flex;
 flex-direction: column;
 gap: 100px;
`;

export const TopWrapper = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: space-between;

 img {
  height: 500px;
  width: 120px;
  object-fit: contain;
  transition: height 0.5s ease-in-out 0.2s;

  ${isTablet} {
   height: 400px;
  }

  ${isMobile} {
   height: 200px;
   width: 70px;
  }
 }
`;

export const BubbleWrapper = styled.div`
 display: flex;
 position: relative;
 height: 100%;

 img {
  height: 100%;
  width: 100%;
 }
`;

export const BubbleContent = styled.div`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%);
 font: var(--ContentMedium);
 font-size: 24px;

 a {
  font: var(--HeadingMedium);
  &:hover {
   color: var(--Hover);
  }

  ${isMobile} {
   font-size: 12px;
  }
 }

 ${isMobile} {
  font-size: 12px;
 }
`;

export const Schools = styled.div`
 display: flex;
 flex-direction: column;
 gap: 10px;
 div {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0 10px;
 }

 b {
  font: var(--HeadingMedium);
  color: var(--MainColor);
  margin: 0;

  ${isTablet} {
   font-size: 18px;
  }
 }

 p {
  font: var(--ContentMedium);

  ${isTablet} {
   font-size: 16px;
  }
 }
`;

export const FromWrapper = styled.div`
 display: flex;
 flex-direction: column;
 gap: 20px;
 p {
  font: var(--HeadingLarge);
 }
`;

export const Lists = styled.div`
 display: flex;
 flex-direction: row;
 flex-wrap: wrap;
 gap: 20px 50px;
`;

export const List = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 gap: 10px;
 /* cursor: pointer; */
 p {
  font: var(--ContentSmall);
  line-height: 1;
 }

 img {
  height: 70px;
  width: 100px;
 }
`;

export const LikeImg = styled.div`
 width: 100%;

 img {
  width: 100%;
  height: auto;
 }
`;
