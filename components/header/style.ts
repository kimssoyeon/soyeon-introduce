import styled from "styled-components";
import { isTablet } from "@/hooks/Media";

export const Wrapper = styled.div`
 display: flex;
 flex-direction: column;
 width: 100%;
`;

export const TrickyWrapper = styled.div`
 height: 98px;

 ${isTablet} {
  height: 56px;
 }
`;

export const HeaderWrapper = styled.div`
 width: 100%;
 box-sizing: border-box;
 position: fixed;
 display: flex;
 justify-content: space-between;
 align-items: center;
 z-index: 1000;
 padding: 30px 50px;
 background-color: white;
 box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
 font: var(--HeadingMedium);
 transition:
  padding 0.3s ease-in-out,
  font-size 0.3s ease-in-out;

 a {
  display: flex;
 }

 img {
  ${isTablet} {
   width: 24px;
  }
 }

 ${isTablet} {
  padding: 10px 20px;
  font: var(--HeadingSmall);
 }
`;

export const Lists = styled.div`
 display: flex;
 gap: 40px;

 a {
  color: var(--MainColor);
  &:hover {
   color: var(--Hover);
  }
 }

 ${isTablet} {
  gap: 20px;
 }
`;

export const ContactTrigger = styled.button`
 border: none;
 background: none;
 padding: 0;
 font: inherit;
 cursor: pointer;
 color: var(--MainColor);

 &:hover {
  color: var(--Hover);
 }
`;

export const Contacts = styled.div`
 display: flex;
 flex-direction: column;
 background-color: white;
 padding: 10px 20px;
 border-radius: 10px;
 margin-top: 10px;
 font: var(--HeadingMedium);
 box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);

 ${isTablet} {
  font: var(--HeadingSmall);
 }

 p,
 a {
  margin: 5px 0;
  cursor: pointer;
  color: black !important;

  &:hover {
   color: var(--Hover) !important;
  }
 }
`;
