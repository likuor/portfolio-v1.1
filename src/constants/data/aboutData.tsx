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
  name: 'skills' | 'experience' | 'education' | 'awards';
};

type AboutItme = {
  id: number;
  title: string;
  icons?: {
    id: number;
    icon: JSX.Element;
  }[];
  schoolName?: string;
  period?: string;
};

export type AboutData = {
  skills: AboutItme[];
  experience: AboutItme[];
  education: AboutItme[];
  awards: AboutItme[];
};

export const aboutTabs: Tabs[] = [
  { id: 0, name: 'skills' },
  { id: 1, name: 'experience' },
  { id: 2, name: 'education' },
  { id: 3, name: 'awards' },
];

export const aboutData: AboutData = {
  skills: [
    {
      id: 0,
      title: 'Languages',
      icons: [
        { id: 0, icon: <SiJavascript /> },
        { id: 1, icon: <SiTypescript /> },
        { id: 2, icon: <FaHtml5 /> },
        { id: 3, icon: <FaCss3 /> },
        { id: 4, icon: <SiSass /> },
      ],
    },
    {
      id: 1,
      title: 'Frameworks & Libraries',
      icons: [
        { id: 0, icon: <FaReact /> },
        { id: 1, icon: <SiNextdotjs /> },
        { id: 2, icon: <SiNodedotjs /> },
        { id: 3, icon: <SiExpress /> },
        { id: 4, icon: <SiPrisma /> },
        { id: 5, icon: <SiPlaywright /> },
        { id: 6, icon: <SiJest /> },
        { id: 7, icon: <SiTailwindcss /> },
      ],
    },
    {
      id: 2,
      title: 'Database & Infrastructure',
      icons: [
        { id: 0, icon: <SiPostgresql /> },
        { id: 1, icon: <SiAmazondynamodb /> },
        { id: 2, icon: <SiDocker /> },
        { id: 3, icon: <SiAmazonaws /> },
        { id: 4, icon: <SiTerraform /> },
      ],
    },
  ],
  experience: [
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
  education: [
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
  awards: [
    {
      id: 0,
      title: 'Award of NoCode Japan in NoCode Click Hackathon',
      period: 'May,2021',
    },
  ],
};
