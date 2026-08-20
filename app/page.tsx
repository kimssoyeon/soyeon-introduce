import * as S from './main';
import Image from 'next/image';
import Me from '@/public/common/me.png';
import Link from 'next/link';
import Cloud from '@/public/common/Cloud.svg';
import Bubble from '@/public/common/Bubble.svg';
import Deplog from '@/public/projects/DeplogLogo.svg';
import Council from '@/public/projects/CouncilLogo.svg';
import Spillthetea from '@/public/projects/SpilltheteaLogo.svg';
import Learnit from '@/public/projects/LearnitLogo.svg';
import Aim from '@/public/projects/AimLogo.svg';
import Thingo from '@/public/projects/ThingoLogo.svg';
import { ProjectsInfo } from '@/dummies/ProjectsInfo';

export default function Home() {
  return (
    <S.Page>
      <S.Logos $direction='left'>
        {ProjectsInfo.map((item, _) => (
          item.left && item.home && <S.Logo key={item.id}>
            <Image src={Cloud} alt='bubble-img' />
            <S.BubbleImg>
              <Link href={item.goto}>
                <Image src={item.logo} alt='logo-img' />
              </Link>
            </S.BubbleImg>
          </S.Logo>
        ))}
      </S.Logos>
      <S.Logos $direction='right'>
        {ProjectsInfo.map((item, _) => (
          !item.left && item.home && <S.Logo key={item.id}>
            <Image src={Cloud} alt='bubble-img' />
            <S.BubbleImg>
              <Link href={item.goto}>
                <Image src={item.logo} alt='logo-img' />
              </Link>
            </S.BubbleImg>
          </S.Logo>
        ))}
      </S.Logos>
      <S.Wrapper>
        <S.Click>
          <Image src={Bubble} alt='bubble-img' />
          <p>Click!</p>
        </S.Click>
        <Link href="/me">
          <Image
            src={Me}
            alt='my-img'
            height={500} />
        </Link>
      </S.Wrapper>
    </S.Page>
  );
}
