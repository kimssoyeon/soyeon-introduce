import styled from "styled-components";
import { isMobile, isTablet } from "../Media";

export const Wrapper = styled.div`
 display: flex;
 flex-direction: column;
 gap: 100px;
`;

export const LogoWrapper = styled.div`
 display: flex;
 flex-direction: row;
 align-items: flex-end;
 flex-wrap: wrap;
 padding: 20px;
 gap: 10px 20px;
 box-shadow: 0 10px 12px -10px rgba(0, 0, 0, 0.3);

 img {
  height: 80px;
  width: fit-content;
  max-width: 100%;
  transition: height 0.5s ease-in-out 0.2s;

  ${isTablet} {
   height: 50px;
  }
 }

 b {
  font: var(--HeadingLarge);
  ${isTablet} {
   font: var(--HeadingMedium);
  }
 }

 p {
  font: var(--ContentSmall);
  font-size: 12px;
  color: var(--Hover);
 }
`;

export const LinkWrapper = styled.div`
 display: flex;
 flex-direction: column;
 margin-top: -50px;
 gap: 10px;
 p {
  font: var(--ContentSmall);
  color: var(--Hover);
 }
`;

export const Buttons = styled.div`
 display: flex;
 flex-direction: row;
 flex-wrap: wrap;
 gap: 20px;

 ${isMobile} {
  gap: 10px;
 }
`;

export const FormWrapper = styled.div`
 display: flex;
 flex-direction: column;
 gap: 20px;

 b {
  font: var(--HeadingLarge);
 }

 p {
  font: var(--ContentMedium);

  ${isMobile} {
   font: var(--ContentSmall);
  }
 }
`;

export const Lists = styled.div`
 display: flex;
 flex-direction: row;
 flex-wrap: wrap;
 gap: 20px 50px;

 ${isMobile} {
  gap: 20px 20px;
 }
`;

export const List = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 gap: 10px;

 p {
  font: var(--ContentSmall);
  line-height: 1;
 }

 img {
  height: 70px;
  width: 100px;
  transition: height 0.5s ease-in-out 0.2s;

  ${isMobile} {
   height: 50px;
   width: 70px;
  }
 }
`;

export const OwnTechs = styled.div`
 display: flex;
 flex-direction: column;
 flex-wrap: wrap;
 gap: 50px;
`;

export const OwnTech = styled.div<{ $reverse: boolean }>`
 display: flex;
 ${({ $reverse }) => $reverse && `flex-direction: row-reverse;`}

 align-items: center;
 width: 100%;
 justify-content: space-between;

 p {
  font: var(--ContentMedium);
  width: 30%;

  ${isMobile} {
   font: var(--ContentSmall);
  }
 }

 ${isMobile} {
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
 }

 img {
  width: 60%;
  height: auto;
  max-height: 400px;
  object-fit: cover;
  object-position: top;
  transition: height 0.5s ease-in-out 0.2s;

  ${isMobile} {
   width: 100%;
   max-height: 300px;
  }
 }
`;
