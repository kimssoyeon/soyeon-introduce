import * as S from './style';
import Image from 'next/image';
import Button from '@/components/button';
import type { ProjectInfo } from '@/dummies/ProjectsInfo';

interface ProjectProps {
  project: ProjectInfo;
}

export default function ProjectDetail({ project }: ProjectProps) {
  const {
    id,
    name,
    logo,
    date,
    service,
    github,
    maintain,
    info,
    stacks,
    ownTechs,
  } = project;
  return (
    <S.Wrapper>
      <S.LogoWrapper>
        <Image src={logo} alt='logo-img' />
        <div>
          <b>{name}</b>
          <p>{date}</p>
        </div>
      </S.LogoWrapper>
      <S.FormWrapper>
        <b>프로젝트 소개</b>
        <p>{info}</p>
      </S.FormWrapper>
      <S.LinkWrapper>
        <S.Buttons>
          {service.map((item, idx) => (
            <Button key={idx} content={`서비스 링크${service.length >= 2 ? idx + 1 : ""}`} src={item} />
          ))}
          {github.map((item, idx) => (
            <Button key={idx} content={`깃허브 링크${github.length >= 2 ? idx + 1 : ""}`} src={item} />
          ))}
        </S.Buttons>
        {!maintain && <p>서비스가 종료되었습니다.</p>}
      </S.LinkWrapper>
      <S.FormWrapper>
        <b>Stacks/Tools</b>
        <S.Lists>
          {stacks.map((stack, _) => (
            <S.List key={stack.name}>
              <Image src={stack.icon} alt={stack.name} />
              <p>{stack.name}</p>
            </S.List>
          ))}
        </S.Lists>
      </S.FormWrapper>
      <S.FormWrapper>
        <b>맡은 기능 (추후 내용이 추가될 예정입니다.)</b>
        <S.OwnTechs>
          {ownTechs.map((tech, _) => (
            <S.OwnTech key={tech.id} $reverse={tech.id % 2 == 0}>
              <Image src={tech.icon} alt='tech-img' />
              <p>{tech.info}</p>
            </S.OwnTech>
          ))}
        </S.OwnTechs>
      </S.FormWrapper>
    </S.Wrapper>
  )
}