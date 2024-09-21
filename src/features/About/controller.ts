'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';

import { DEVELOPER_EXPERIENCE_FROM, SEARCH_PARAMS } from '@/constants';
import yearsSinceDate from '@/utils/timeCount';

import { AboutData } from './type';

type Tabs = {
  id: number;
  name: 'skills' | 'experience' | 'education' | 'awards';
};

const AboutController = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const selectedTab = (searchParams?.get(SEARCH_PARAMS.TAB) as keyof AboutData) ?? 'skills';
  const yearsDevExperience = yearsSinceDate(
    DEVELOPER_EXPERIENCE_FROM.year,
    DEVELOPER_EXPERIENCE_FROM.month,
    DEVELOPER_EXPERIENCE_FROM.day
  );
  const AboutTabs: Tabs[] = [
    { id: 0, name: 'skills' },
    { id: 1, name: 'experience' },
    { id: 2, name: 'education' },
    { id: 3, name: 'awards' },
  ];

  const handleClick = (tabTitle: string) => {
    if (searchParams) {
      const params = new URLSearchParams(searchParams);
      params.set(SEARCH_PARAMS.TAB, tabTitle);
      router.push(`${pathname}?${params}`);
    }
  };

  return { selectedTab, yearsDevExperience, searchParams, AboutTabs, handleClick };
};

export default AboutController;
