import { useSearchParams } from 'next/navigation';
import { useTranslation } from 'react-i18next';
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
import { SEARCH_PARAMS } from '@/constants';

import { AboutData } from '../type';

export const Tab = () => {
  const { t } = useTranslation();
  const searchParams = useSearchParams();
  const selectedTab = (searchParams?.get(SEARCH_PARAMS.TAB) as keyof AboutData) ?? 'skills';
  const aboutData = {
    skills: [
      {
        id: 0,
        title: t('about.tabs.skills.languages'),
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
        title: t('about.tabs.skills.frameworksAndLibraries'),
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
        title: t('about.tabs.skills.databaseAndInfrastructure'),
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
        companyName: t('about.tabs.experience.AnyCarry.name'),
        role: t('about.tabs.experience.AnyCarry.role'),
        period: t('about.tabs.experience.AnyCarry.period'),
        location: t('about.tabs.experience.AnyCarry.location'),
      },
      {
        id: 1,
        companyName: t('about.tabs.experience.Tellext.name'),
        role: t('about.tabs.experience.Tellext.role'),
        period: t('about.tabs.experience.Tellext.period'),
        location: t('about.tabs.experience.Tellext.location'),
      },
      {
        id: 2,
        companyName: t('about.tabs.experience.Freelance.name'),
        role: t('about.tabs.experience.Freelance.role'),
        period: t('about.tabs.experience.Freelance.period'),
        location: t('about.tabs.experience.Freelance.location'),
      },
      {
        id: 3,
        companyName: t('about.tabs.experience.WiseVine.name'),
        role: t('about.tabs.experience.WiseVine.role'),
        period: t('about.tabs.experience.WiseVine.period'),
        location: t('about.tabs.experience.WiseVine.location'),
      },
    ],
    education: [
      {
        id: 0,
        schoolName: t('about.tabs.education.NihonUniversity.name'),
        degree: t('about.tabs.education.NihonUniversity.degree'),
        graduatedDate: t('about.tabs.education.NihonUniversity.graduatedDate'),
        location: t('about.tabs.education.NihonUniversity.location'),
      },
      {
        id: 1,
        schoolName: t('about.tabs.education.CICCC.name'),
        degree: t('about.tabs.education.CICCC.degree'),
        graduatedDate: t('about.tabs.education.CICCC.graduatedDate'),
        location: t('about.tabs.education.CICCC.location'),
      },
    ],
    awards: [
      {
        id: 0,
        title: t('about.tabs.awards.Click.title'),
        date: t('about.tabs.awards.Click.date'),
        location: t('about.tabs.awards.Click.location'),
      },
    ],
  };

  const renderTab = (tabCategory: keyof AboutData) => {
    switch (tabCategory) {
      case 'skills':
        return (
          <>
            {aboutData.skills.map((skill) => (
              <div
                key={skill.id}
                className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'
              >
                <div className='font-light mb-2 md:mb-0'>
                  <span>{skill.title}</span>
                </div>
                <div className='flex gap-x-4'>
                  {skill.icons?.map((icon) => (
                    <div key={icon.id} className='text-2xl text-white'>
                      {icon.icon}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </>
        );
      case 'experience':
        return (
          <>
            {aboutData.experience.reverse().map((experience) => (
              <div
                key={experience.id}
                className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'
              >
                <div className='font-light mb-2 md:mb-0'>
                  <span>
                    <span className='text-white'>
                      {`${experience.role} / ${experience.period} `}
                    </span>
                    {`at ${experience.companyName} , ${experience.location}`}
                  </span>
                </div>
              </div>
            ))}
          </>
        );
      case 'education':
        return (
          <>
            {aboutData.education.reverse().map((education) => (
              <div
                key={education.id}
                className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'
              >
                <div className='font-light mb-2 md:mb-0'>
                  <span className='text-white'>{`${education.degree} / ${education.graduatedDate}`}</span>
                  <br />
                  <span>{`${education.schoolName}, ${education.location}`}</span>
                </div>
              </div>
            ))}
          </>
        );
      case 'awards':
        return (
          <>
            {aboutData.awards.map((award) => (
              <div
                key={award.id}
                className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'
              >
                <div className='font-light mb-2 md:mb-0'>
                  <span className='text-white'>{award.title}</span>
                  <span> / {award.date}</span>
                </div>
              </div>
            ))}
          </>
        );
      default:
        return <>{t('common.error.noData')}</>;
    }
  };

  return renderTab(selectedTab);
};
