import { isMobile, isTablet } from "@/hooks/Media";
import styled from "styled-components";

export const Wrapper = styled.div`
 display: flex;
 flex-direction: column;
 gap: 70px;

 p {
  font: var(--HeadingLarge);
 }
`;

export const LogoWrapper = styled.div`
 display: flex;
 flex-direction: column;
 gap: 50px;
`;

export const Logos = styled.div`
 display: flex;
 flex-direction: row;
 align-items: flex-end;
 flex-wrap: wrap;
 padding: 20px;
 gap: 10px 50px;
 background-color: white;
 cursor: pinter;
 box-shadow: 10px 10px 12px -10px rgba(0, 0, 0, 0.3);

 &:hover {
  box-shadow: 10px 10px 12px var(--HoverPink);
 }

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

  ${isMobile} {
   font: var(--HeadingSmall);
  }
 }

 p {
  font: var(--ContentSmall);
  font-size: 12px;
  color: var(--Hover);
 }
`;
