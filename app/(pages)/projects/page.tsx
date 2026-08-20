import { ProjectsInfo } from '@/dummies/ProjectsInfo';
import * as S from './style';
import Image from 'next/image';
import Link from 'next/link';

export default function Projects() {
  return (
    <S.Wrapper>
      <p>프로젝트 모음zip</p>
      <S.LogoWrapper>
        {ProjectsInfo.map((project, _) => (
          <Link key={project.id} href={project.goto}>
            <S.Logos>
              <Image src={project.logo} alt='logo-img' />
              <div>
                <b>{project.name}</b>
                <p>{project.date}</p>
              </div>
            </S.Logos>
          </Link>
        ))}
      </S.LogoWrapper>
    </S.Wrapper>
  )
}