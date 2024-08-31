'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';

import { DEVELOPER_EXPERIENCE_FROM, SEARCH_PARAMS } from '@/constants/data';
import { aboutData, type AboutData } from '@/constants/data/aboutData';
import yearsSinceDate from '@/utils/timeCount';

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
  const currentData = aboutData[selectedTab];

  const handleClick = (tabTitle: string) => {
    if (searchParams) {
      const params = new URLSearchParams(searchParams);
      params.set(SEARCH_PARAMS.TAB, tabTitle);
      router.push(`${pathname}?${params}`);
    }
  };

  return { selectedTab, yearsDevExperience, currentData, searchParams, handleClick };
};

export default AboutController;
