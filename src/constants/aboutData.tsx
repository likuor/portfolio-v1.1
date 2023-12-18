import { FaHtml5, FaCss3, FaReact } from 'react-icons/fa';
import {
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiThreedotjs,
  SiPython,
  SiPhp,
  SiExpress,
  // SiCakephp,
  SiLaravel,
  SiNextdotjs,
  SiTerraform,
  SiDocker,
  SiAmazonaws,
  SiMysql,
  SiPostgresql,
  SiFirebase,
  SiMongodb,
  SiAmazondynamodb,
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
          { id: 6, icon: <SiPhp /> },
          { id: 5, icon: <SiPython /> },
          { id: 3, icon: <FaHtml5 /> },
          { id: 4, icon: <FaCss3 /> },
          { id: 7, icon: <SiThreedotjs /> },
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
          { id: 5, icon: <SiLaravel /> },
        ],
      },
      {
        id: 2,
        title: 'Database & Others',
        icons: [
          { id: 1, icon: <SiMysql /> },
          { id: 2, icon: <SiPostgresql /> },
          { id: 3, icon: <SiAmazondynamodb /> },
          { id: 4, icon: <SiFirebase /> },
          { id: 5, icon: <SiMongodb /> },
          { id: 6, icon: <SiDocker /> },
          { id: 7, icon: <SiAmazonaws /> },
          { id: 8, icon: <SiTerraform /> },
        ],
      },
      // {
      //   id: 3,
      //   title: 'Infrastructure',
      //   icons: [
      //     { id: 1, icon: <SiDocker /> },
      //     { id: 2, icon: <SiAmazonaws /> },
      //     { id: 3, icon: <SiTerraform /> },
      //   ],
      // },
    ],
  },
  {
    id: 1,
    title: 'experience',
    info: [
      {
        id: 0,
        title: 'Fullstack Developer - Tellext - Canada',
        stage: 'Feb,2023 - Nov,2023',
      },
      {
        id: 1,
        title: 'Freelance Developer',
        stage: 'Jun,2021 - Aug,2023',
      },
      {
        id: 2,
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
        stage: 'Jun,2021',
      },
    ],
  },
];
