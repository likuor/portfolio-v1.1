import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';

import { aboutData, type AboutData } from '@/constants/data/aboutData';
import yearsSinceDate from '@/utils/timeCount';

const AboutController = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedTab = (searchParams.get('tab') as keyof AboutData) ?? 'skills';
  const yearsDevExperience = yearsSinceDate(2022, 0, 1);
  const currentData = aboutData[selectedTab];

  const handleClick = (tabTitle: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('tab', tabTitle);
    router.push(
      {
        pathname: router.pathname,
        query: params.toString(),
      },
      undefined,
      { shallow: true }
    );
  };

  return { selectedTab, yearsDevExperience, currentData, searchParams, handleClick };
};

export default AboutController;
