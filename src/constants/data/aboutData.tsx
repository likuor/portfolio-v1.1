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

import Tooltip from '@/components/decoration/Tooltip';

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
        {
          id: 0,
          icon: (
            <Tooltip language='Javascript'>
              <SiJavascript />
            </Tooltip>
          ),
        },
        {
          id: 1,
          icon: (
            <Tooltip language='Typescript'>
              <SiTypescript />
            </Tooltip>
          ),
        },
        {
          id: 2,
          icon: (
            <Tooltip language='HTML'>
              <FaHtml5 />
            </Tooltip>
          ),
        },
        {
          id: 3,
          icon: (
            <Tooltip language='CSS'>
              <FaCss3 />
            </Tooltip>
          ),
        },
        {
          id: 4,
          icon: (
            <Tooltip language='SCSS/Sass'>
              <SiSass />
            </Tooltip>
          ),
        },
      ],
    },
    {
      id: 1,
      title: 'Frameworks & Libraries',
      icons: [
        {
          id: 0,
          icon: (
            <Tooltip language='React'>
              <FaReact />
            </Tooltip>
          ),
        },
        {
          id: 1,
          icon: (
            <Tooltip language='Next.js'>
              <SiNextdotjs />
            </Tooltip>
          ),
        },
        {
          id: 2,
          icon: (
            <Tooltip language='Node.js'>
              <SiNodedotjs />
            </Tooltip>
          ),
        },
        {
          id: 3,
          icon: (
            <Tooltip language='Express'>
              <SiExpress />
            </Tooltip>
          ),
        },
        {
          id: 4,
          icon: (
            <Tooltip language='Prisma'>
              <SiPrisma />
            </Tooltip>
          ),
        },
        {
          id: 5,
          icon: (
            <Tooltip language='Playwright'>
              <SiPlaywright />
            </Tooltip>
          ),
        },
        {
          id: 6,
          icon: (
            <Tooltip language='Jest'>
              <SiJest />
            </Tooltip>
          ),
        },
        {
          id: 7,
          icon: (
            <Tooltip language='Tailwindcss'>
              <SiTailwindcss />
            </Tooltip>
          ),
        },
      ],
    },
    {
      id: 2,
      title: 'Database & Infrastructure',
      icons: [
        {
          id: 0,
          icon: (
            <Tooltip language='Postgresql'>
              <SiPostgresql />
            </Tooltip>
          ),
        },
        {
          id: 1,
          icon: (
            <Tooltip language='Amazon DynamoDB'>
              <SiAmazondynamodb />
            </Tooltip>
          ),
        },
        {
          id: 2,
          icon: (
            <Tooltip language='Docker'>
              <SiDocker />
            </Tooltip>
          ),
        },
        {
          id: 3,
          icon: (
            <Tooltip language='Lambda, IoT core, SES'>
              <SiAmazonaws />
            </Tooltip>
          ),
        },
        {
          id: 4,
          icon: (
            <Tooltip language='Terraform'>
              <SiTerraform />
            </Tooltip>
          ),
        },
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
