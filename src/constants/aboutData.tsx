import { FaHtml5, FaCss3, FaReact } from 'react-icons/fa';
import {
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiNextdotjs,
  SiTerraform,
  SiDocker,
  SiAmazonaws,
  SiPostgresql,
  SiAmazondynamodb,
  SiPrisma,
  SiPlaywright,
  SiJest,
  SiSass,
  SiTailwindcss,
} from 'react-icons/si';

type AboutDataType = {
  id: number;
  title: string;
  info: {
    id: number;
    title: string;
    school?: string;
    where?: string;
    icons?: {
      id: number;
      icon: JSX.Element;
    }[];
    stage?: string;
    url?: string;
  }[];
};
export const aboutData: AboutDataType[] = [
  {
    id: 0,
    title: 'skills',
    info: [
      {
        id: 0,
        title: 'Languages',
        icons: [
          { id: 1, icon: <SiJavascript /> },
          { id: 2, icon: <SiTypescript /> },
          { id: 3, icon: <FaHtml5 /> },
          { id: 4, icon: <FaCss3 /> },
          { id: 5, icon: <SiSass /> },
        ],
      },
      {
        id: 1,
        title: 'Frameworks & Libraries',
        icons: [
          { id: 1, icon: <FaReact /> },
          { id: 2, icon: <SiNextdotjs /> },
          { id: 3, icon: <SiNodedotjs /> },
          { id: 4, icon: <SiExpress /> },
          { id: 5, icon: <SiPrisma /> },
          { id: 6, icon: <SiPlaywright /> },
          { id: 7, icon: <SiJest /> },
          { id: 8, icon: <SiTailwindcss /> },
        ],
      },
      {
        id: 2,
        title: 'Database & Infrastructure',
        icons: [
          { id: 1, icon: <SiPostgresql /> },
          { id: 2, icon: <SiAmazondynamodb /> },
          { id: 3, icon: <SiDocker /> },
          { id: 4, icon: <SiAmazonaws /> },
          { id: 5, icon: <SiTerraform /> },
        ],
      },
    ],
  },
  {
    id: 1,
    title: 'experience',
    info: [
      {
        id: 0,
        title: 'Freelance Developer',
        stage: 'Dec,2023 - Present',
      },
      {
        id: 1,
        title: 'Fullstack Developer - Tellext - Canada',
        stage: 'Feb,2023 - Nov,2023',
      },
      {
        id: 2,
        title: 'Freelance Developer',
        stage: 'Jun,2021 - Aug,2023',
      },
      {
        id: 3,
        title: 'Lead Associate Developer & Admin - Anycarry - Japan',
        stage: 'Jan,2020 - May,2021',
      },
    ],
  },
  {
    id: 2,
    title: 'Education',
    info: [
      {
        id: 0,
        title: 'Web & Mobile Application Development',
        school: 'Cornerstone International Community College of Canada - Canada',
        stage: 'Dec,2023',
      },
      {
        id: 1,
        title: 'Bachelor of Law',
        school: 'Nihon University - Japan',
        stage: 'Mar,2018',
      },
    ],
  },
  {
    id: 3,
    title: 'awards',
    info: [
      {
        id: 0,
        title: 'Award of NoCode Japan in NoCode Click Hackathon',
        stage: 'May,2021',
        // url: 'https://nocodejapan.org/media/click-hackathon-result-01/#NoCode_Japan_shangRestarea_jiu_jing_huang_guisan',
      },
    ],
  },
];
