import * as S from "./style";
import Image from "next/image";
import { Experiences } from "@/dummies/Experiences";
import { Techs } from "@/dummies/Techniques";
import { Travels } from "@/dummies/Travels";
import MyImg from "@/public/common/me.png";
import Likes from "@/public/mypage/Likes.svg";
import Bubble from "@/public/common/Bubble.svg";
import Link from "next/link";

export default function Me() {
  return (
    <S.Wrapper>
      <S.TopWrapper>
        <Image src={MyImg} alt="my-img" />
        <S.BubbleWrapper>
          <Image src={Bubble} alt="bubble-img" />
          <S.BubbleContent>
            <p>안녕하세요!<br /> 개발자 김소연 입니다👩‍💻🤗</p>
            <Link href='https://github.com/kimssoyeon'>{`-> Github`}</Link><br />
            <Link href='https://blog.naver.com/soyeon03__'>{`-> Blog`}</Link>
          </S.BubbleContent>
        </S.BubbleWrapper>
      </S.TopWrapper>
      <S.FromWrapper>
        <p>학력</p>
        <S.Schools>
          {Experiences.map((item, _) => (
            <div key={item.title}>
              <b>{item.title} :</b>
              {item.contents.map((contant, _) => (
                <p>{contant}</p>
              ))}
            </div>
          ))}
        </S.Schools>
      </S.FromWrapper>
      <S.FromWrapper>
        <p>Techs</p>
        <S.Lists>
          {Techs.map((tech, _) => (
            <S.List key={tech.name}>
              <Image src={tech.src} alt={tech.alert} />
              <p>{tech.name}</p>
            </S.List>
          ))}
        </S.Lists>
      </S.FromWrapper>
      <S.FromWrapper>
        <p>Travels</p>
        <S.Lists>
          {Travels.map((travel, _) => (
            <S.List key={travel.name}>
              <Image src={travel.src} alt={travel.alert} />
              <p>{travel.name}</p>
            </S.List>
          ))}
          {/* 클릭에 따라 연도 및 내용추가 예정 */}
        </S.Lists>
      </S.FromWrapper>
      <S.FromWrapper>
        <p>Likes</p>
        <S.LikeImg>
          <Image src={Likes} alt="like-img" />
        </S.LikeImg>
      </S.FromWrapper>
    </S.Wrapper>
  )
}