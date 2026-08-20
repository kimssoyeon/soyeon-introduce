import Link from "next/link";
import * as S from "./style";
import Contacts from "./Contacts";
import Image from "next/image";
import Home from "@/public/common/Home.svg";

export default function header() {
  return (
    <S.Wrapper>
      <S.HeaderWrapper>
        <Link href='/'>
          <Image src={Home} alt='home-img' height={36} />
        </Link>
        <S.Lists>
          <Link href='/projects'>Projects</Link>
          <Link href='/me'>Me</Link>
          <Contacts />
        </S.Lists>
      </S.HeaderWrapper>
      <S.TrickyWrapper />
    </S.Wrapper>
  )
}
