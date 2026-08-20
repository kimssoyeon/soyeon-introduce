import Deplog from "@/public/projects/DeplogLogo.svg";
import Council from "@/public/projects/CouncilLogo.svg";
import Spillthetea from "@/public/projects/SpilltheteaLogo.svg";
import Learnit from "@/public/projects/LearnitLogo.svg";
import Aim from "@/public/projects/AimLogo.svg";
import Thingo from "@/public/projects/ThingoLogo.svg";
import Cafeteria from "@/public/projects/Cafeteria.svg";
import React from "@/public/mypage/ReactIcon.svg";
import Typescript from "@/public/mypage/TypescriptIcon.svg";
import Vite from "@/public/mypage/ViteIcon.svg";
import StyledComponents from "@/public/mypage/StyledcomponentsIcon.svg";
import ModuleCss from "@/public/mypage/CssModuleIcon.svg";
import VanillaCss from "@/public/mypage/VanillacssIcon.svg";
import Tailwind from "@/public/mypage/TailwindIcon.svg";
import RouterDom from "@/public/mypage/ReactRouterLogo.svg";
import TanStackQuery from "@/public/mypage/TanstackQueryIcon.svg";
import Svgr from "@/public/mypage/SvgrIcon.svg";
import Axios from "@/public/mypage/AxiosIcon.svg";
import HookForm from "@/public/mypage/ReactHookFormIcon.svg";
import Zod from "@/public/mypage/ZodIcon.svg";
import Tiptap from "@/public/mypage/TiptapLogo.jpg";
import Quill from "@/public/mypage/QuillIcon.png";
import Zustand from "@/public/mypage/ZustandIcon.svg";
import Swiper from "@/public/mypage/SwiperIcon.svg";
import Blocknote from "@/public/mypage/BlocknoteIcon.svg";
import Dompurify from "@/public/mypage/DompurifyIcon.svg";
import Hottoast from "@/public/mypage/HotToastIcon.png";

import Deplog1 from "@/public/projects/pages/Deplog1.svg";
import Deplog2 from "@/public/projects/pages/Deplog2.svg";
import Council1 from "@/public/projects/pages/Council1.svg";
import Council2 from "@/public/projects/pages/Council2.svg";
import Council3 from "@/public/projects/pages/Council3.svg";
import Spillthetea1 from "@/public/projects/pages/Spillthetea1.svg";
import Spillthetea2 from "@/public/projects/pages/Spillthetea2.svg";
import Cafeteria1 from "@/public/projects/pages/Cafeteria1.svg";
import Cafeteria2 from "@/public/projects/pages/Cafeteria2.svg";
import Cafeteria3 from "@/public/projects/pages/Cafeteria3.svg";
import Cafeteria4 from "@/public/projects/pages/Cafeteria4.svg";
import Learnit1 from "@/public/projects/pages/Learnit1.svg";
import Learnit2 from "@/public/projects/pages/Learnit2.svg";
import Learnit3 from "@/public/projects/pages/Learnit3.svg";
import Learnit4 from "@/public/projects/pages/Learnit4.svg";
import Aim1 from "@/public/projects/pages/Aim1.svg";
import Aim2 from "@/public/projects/pages/Aim2.svg";
import Aim3 from "@/public/projects/pages/Aim3.svg";
import Aim4 from "@/public/projects/pages/Aim4.svg";
import Aim5 from "@/public/projects/pages/Aim5.svg";
import Aim6 from "@/public/projects/pages/Aim6.svg";
import Aim7 from "@/public/projects/pages/Aim7.svg";
import Thingo1 from "@/public/projects/pages/Thingo1.png";
import Thingo2 from "@/public/projects/pages/Thingo2.png";

export const ProjectsInfo = [
 {
  id: "deplog",
  name: "DEPlog, 뎁로그",
  logo: Deplog,
  date: "24.07 ~ 24.08",
  goto: "/projects/deplog",
  service: ["https://deplog.netlify.app/"],
  github: ["https://github.com/DEPthes/3rd-MVP-Overload-Web"],
  maintain: false,
  info:
   "DEPlog는 DEPth + Blog로 DEPth 회원을 위한 전문 기술 블로그 플랫폼입니다.",
  stacks: [
   { name: "React", icon: React },
   { name: "Vite", icon: Vite },
   { name: "Typescript", icon: Typescript },
   { name: "Vanilla CSS", icon: VanillaCss },
   { name: "React Router Dom", icon: RouterDom },
   { name: "Axios", icon: TanStackQuery },
   { name: "SVGR", icon: Svgr },
  ],
  ownTechs: [
   { id: 1, icon: Deplog1, info: "메인페이지" },
   {
    id: 2,
    icon: Deplog2,
    info: "게시물 디테일 페이지",
   },
  ],
  left: true,
  home: true,
 },
 {
  id: "council",
  name: "명지대학교 총학생회",
  logo: Council,
  date: "24.10 ~ 25.02",
  goto: "/projects/council",
  service: [
   "https://mju-council.netlify.app/",
   "https://mju-council-admin.netlify.app/",
  ],
  github: [
   "https://github.com/DEPthes/MJU-Council-Web",
   "https://github.com/DEPthes/MJU-Council-Admin",
  ],
  maintain: false,
  info:
   "서비스 개발 공모전에 출품했던 총학생회 웹서비스 입니다.\n배포용 페이지와 관리자 페이지로 구분되어 있으며 총학생회의 조직 정보, 소식, 활동보고 조회 등의 기능이 있습니다.",
  stacks: [
   { name: "React", icon: React },
   { name: "Vite", icon: Vite },
   { name: "Typescript", icon: Typescript },
   { name: "Styled Components", icon: StyledComponents },
   { name: "React Router Dom", icon: RouterDom },
   { name: "TanStackQuery", icon: TanStackQuery },
   { name: "Axios", icon: Axios },
   { name: "SVGR", icon: Svgr },
  ],
  ownTechs: [
   { id: 1, icon: Council1, info: "메인페이지 (관리자, 배포용)" },
   { id: 2, icon: Council2, info: "푸터 수정 페이지 (관리자)" },
   {
    id: 3,
    icon: Council3,
    info:
     "총학생회 소개, 조직도, 국별 업무, 중앙운영위원회 페이지 (관리자, 배포용)\n모두 비슷한 UI 입니다.",
   },
  ],
  left: true,
  home: true,
 },
 {
  id: "spillthetea",
  name: "Spill the tea, 썰 푸는 장소",
  logo: Spillthetea,
  date: "24.10 ~ 25.02",
  goto: "/projects/spillthetea",
  service: ["https://aim-targeter.netlify.app/"],
  github: ["https://github.com/THE-T-DEPth/spill-the-tea-web"],
  maintain: false,
  info:
   'Spill the tea는 누군가가 비밀이나 흥미로운 소식을 이야기할 때 사용되는 영어표현을 의미합니다.\n짤 기능, 소설화 기능, 음성 출력 기능 등을 이용하여 재미있게 "썰"을 풀 수 있는 서비스입니다.\n게시와 열람에 최적화 된 반응형 웹페이지로 제작되었습니다.',
  stacks: [
   { name: "React", icon: React },
   { name: "Vite", icon: Vite },
   { name: "Typescript", icon: Typescript },
   { name: "Styled Components", icon: StyledComponents },
   { name: "React Quill", icon: Quill },
   { name: "Axios", icon: Axios },
   { name: "React Hook From", icon: HookForm },
  ],
  ownTechs: [
   { id: 1, icon: Spillthetea1, info: "게시글 제작 페이지" },
   {
    id: 2,
    icon: Spillthetea2,
    info: "게시글 상세 페이지",
   },
  ],
  left: true,
  home: true,
 },
 {
  id: "cafeteria",
  name: "학식 개선 서비스",
  logo: Cafeteria,
  date: "25.03 ~ 25.07",
  goto: "/projects/cafeteria",
  service: [],
  github: ["https://github.com/TP1-OuterMSA/team05-fe"],
  maintain: false,
  info:
   "오늘의 학식에 대해 학우들의 평가를 받고 평가를 기반으로 보고서를 생성하여 학식을 개선시키기 위한 MSI 프로젝트입니다.\n팀프로젝트 강의 시간에 의견을 모아 선정된 주제를 바탕으로 각 팀이 기능을 덧붙여나가며 개발되었습니다.",
  stacks: [
   { name: "React", icon: React },
   { name: "Vite", icon: Vite },
   { name: "Typescript", icon: Typescript },
   { name: "Styled Components", icon: StyledComponents },
   { name: "React Router Dom", icon: RouterDom },
   { name: "Axios", icon: Axios },
   { name: "Html5-QRCode", icon: TanStackQuery },
  ],
  ownTechs: [
   { id: 1, icon: Cafeteria1, info: "오늘의 학식에 리뷰를 남기는 페이지" },
   { id: 2, icon: Cafeteria2, info: "리뷰를 모아볼 수 있는 페이지" },
   { id: 3, icon: Cafeteria3, info: "퀴즈 출제 페이지" },
   { id: 4, icon: Cafeteria4, info: "맛집 입력 페이지" },
  ],
  left: false,
  home: false,
 },
 {
  id: "learnit",
  name: "LearnIt, 런잇",
  logo: Learnit,
  date: "25.07 ~ 25.08",
  goto: "/projects/learnit",
  service: ["https://learning-crew-learnit.netlify.app/"],
  github: ["https://github.com/DEPthes/4th-MVP-LearningCrew-Web"],
  maintain: false,
  info:
   "LearnIT은 Learn with IT로 IT를 통해 함께 배우자는 의미를 담고 있는 스마트 스터디그룹 플랫폼입니다.",
  stacks: [
   { name: "React", icon: React },
   { name: "Vite", icon: Vite },
   { name: "Typescript", icon: Typescript },
   { name: "Module CSS", icon: ModuleCss },
   { name: "Tiptap", icon: Tiptap },
   { name: "React Router Dom", icon: RouterDom },
   { name: "Axios", icon: Axios },
   { name: "React Hook From", icon: HookForm },
   { name: "Zod", icon: Zod },
  ],
  ownTechs: [
   { id: 1, icon: Learnit1, info: "그룹 개설 페이지" },
   { id: 2, icon: Learnit2, info: "스터디 그룹 내 노트 조회, 작성 페이지" },
   { id: 3, icon: Learnit3, info: "스터디 그룹 공유 노트, QandA 페이지" },
   { id: 4, icon: Learnit4, info: "Quiz 페이지" },
  ],
  left: false,
  home: true,
 },
 {
  id: "aim",
  name: "AiM, 에임",
  logo: Aim,
  date: "25.10 ~ 26.02",
  goto: "/projects/aim",
  service: ["https://aim-targeter.netlify.app/"],
  github: ["https://github.com/AiM-Club/AiM-web"],
  maintain: false,
  info:
   "AiM은 AI + aim 으로 AI와 조준의 의미를 담고 있습니다.\n공부 목표를 설정하고 AI가 목표 루트를 설계해줍니다.\n게임 형식의 웹서비스로 타 유저와 챌린지를 할 수도 있고 챌린지 모집을 할 수도 있습니다.",
  stacks: [
   { name: "React", icon: React },
   { name: "Vite", icon: Vite },
   { name: "Typescript", icon: Typescript },
   { name: "Styled Components", icon: StyledComponents },
   { name: "React Router Dom", icon: RouterDom },
   { name: "TanStack Query", icon: TanStackQuery },
   { name: "Zustand", icon: Zustand },
   { name: "Axios", icon: Axios },
   { name: "React Hook From", icon: HookForm },
   { name: "Zod", icon: Zod },
  ],
  ownTechs: [
   { id: 1, icon: Aim1, info: "회원가입 및 로그인 페이지" },
   { id: 2, icon: Aim2, info: "챌린지 상황 확인 및 리스트 페이지" },
   { id: 3, icon: Aim3, info: "모집글 및 커뮤니티 상세 페이지" },
   { id: 4, icon: Aim4, info: "대결 상세 페이지" },
   { id: 5, icon: Aim5, info: "챌린지 랭킹 조회 및 vs대결 현황 페이지" },
   { id: 6, icon: Aim6, info: "마이페이지 페이지" },
   { id: 7, icon: Aim7, info: "에디팅 페이지" },
  ],
  left: false,
  home: true,
 },
 {
  id: "thingo",
  name: "Thingo, 띵고",
  logo: Thingo,
  date: "26.02 ~ 26.03",
  goto: "/projects/thingo",
  service: ["https://thingo.kr/"],
  github: ["https://github.com/NOVA-MJU/MJS-FRONT"],
  maintain: true,
  info:
   "Thingo는 Thing(것, 명=띵) + go로 명지대학교 학생들을 위한 통합 검색 플랫폼입니다.\n모든 소식과 자료를 빠르게 확인하여 정보 접근성을 높이고, 캠퍼스 내 정보 격차를 줄입니다.",
  stacks: [
   { name: "React", icon: React },
   { name: "Vite", icon: Vite },
   { name: "Typescript", icon: Typescript },
   { name: "Tailwind CSS", icon: Tailwind },
   { name: "BlockNote", icon: Blocknote },
   { name: "React Router Dom", icon: RouterDom },
   { name: "TanStackQuery", icon: TanStackQuery },
   { name: "Zustand", icon: Zustand },
   { name: "Axios", icon: Axios },
   { name: "DomPurify", icon: Dompurify },
   { name: "React Hot Toast", icon: Hottoast },
   { name: "Swiper", icon: Swiper },
  ],
  ownTechs: [
   { id: 1, icon: Thingo1, info: "검색 페이지" },
   {
    id: 2,
    icon: Thingo2,
    info:
     "검색 결과 페이지\n(all, 게시판, 공지사항, 학사일정, 명대신문, 명대뉴스)",
   },
  ],
  left: false,
  home: true,
 },
];

export type ProjectInfo = (typeof ProjectsInfo)[number];
