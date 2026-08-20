import Link from "next/link";
import styled from "styled-components"
import { isMobile } from "./Media";

interface ButtonProps {
  content: string;
  src: string;
}

export default function Button({ content, src }: ButtonProps) {
  return (
    <BtnWrapper>
      <Link href={src}>
        <p>{content}</p>
      </Link>
    </BtnWrapper>
  );
}

const BtnWrapper = styled.div`
  background-color: var(--MainColor);
  padding: 8px 16px;
  width: fit-content;
  border-radius: 4px;
  cursor: pointer;

  p{
    font: var(--ContentMedium);
    color: white;

  ${isMobile}{
    font: var(--ContentSmall);
  }
  }

  &:hover{
    background-color: var(--HoverPink);
  }

  ${isMobile}{
    padding: 5px 10px;
  }
`;