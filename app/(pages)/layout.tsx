import { isTablet } from "@/hooks/Media";
import styled from "styled-components";

export default function PagesLayout({ children, }: {
  children: React.ReactNode;
}) {
  return <Wrapper>{children}</Wrapper>;
}

export const Wrapper = styled.div`
 display: flex;
 flex-direction: column;
 padding: 100px 25%;
 gap: 100px;

 ${isTablet} {
  padding: 50px 20%;
 }
`