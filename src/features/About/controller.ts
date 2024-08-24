import { useState } from 'react';

import { aboutData, type AboutData } from '@/constants/data/aboutData';
import yearsSinceDate from '@/utils/timeCount';

const AboutController = () => {
  const [tabIndex, setTabIndex] = useState<keyof AboutData>('skills');
  const yearsDevExperience = yearsSinceDate(2022, 0, 1);
  const currentData = aboutData[tabIndex];

  return { tabIndex, setTabIndex, yearsDevExperience, currentData };
};

export default AboutController;
