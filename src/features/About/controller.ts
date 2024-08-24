import { useState } from 'react';

import yearsSinceDate from '@/utils/timeCount';

const AboutController = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const yearsDevExperience = yearsSinceDate(2022, 0, 1);

  return { tabIndex, setTabIndex, yearsDevExperience };
};

export default AboutController;
