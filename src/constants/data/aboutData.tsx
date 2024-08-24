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

type Tabs = {
  id: number;
  title: 'skills' | 'experience' | 'education' | 'awards';
};

type AboutDataType = {
  id: number;
  info: {
    id: number;
    title: string;
    schoolName?: string;
    icons?: {
      id: number;
      icon: JSX.Element;
    }[];
    period?: string;
  }[];
};

export const aboutTabs: Tabs[] = [
  { id: 0, title: 'skills' },
  { id: 1, title: 'experience' },
  { id: 2, title: 'education' },
  { id: 3, title: 'awards' },
];

export const aboutData: AboutDataType[] = [
  {
    id: 0,
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
    info: [
      {
        id: 0,
        title: 'Frontend Developer - WiseVine - Japan',
        period: 'Jun,2024 - Present',
      },
      {
        id: 1,
        title: 'Freelance Developer',
        period: 'Dec,2023 - Jun,2024',
      },
      {
        id: 2,
        title: 'Fullstack Developer - Tellext - Canada',
        period: 'Feb,2023 - Nov,2023',
      },
      {
        id: 3,
        title: 'Freelance Developer',
        period: 'Jun,2021 - Aug,2023',
      },
      {
        id: 4,
        title: 'Lead Associate Developer & Admin - Anycarry - Japan',
        period: 'Jan,2020 - May,2021',
      },
    ],
  },
  {
    id: 2,
    info: [
      {
        id: 0,
        title: 'Web & Mobile Application Development',
        schoolName: 'Cornerstone International Community College of Canada - Canada',
        period: 'Dec,2023',
      },
      {
        id: 1,
        title: 'Bachelor of Law',
        schoolName: 'Nihon University - Japan',
        period: 'Mar,2018',
      },
    ],
  },
  {
    id: 3,
    info: [
      {
        id: 0,
        title: 'Award of NoCode Japan in NoCode Click Hackathon',
        period: 'May,2021',
      },
    ],
  },
];
