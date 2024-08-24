import { useState } from 'react';

import yearsSinceDate from '@/utils/timeCount';

const AboutController = () => {
  const [index, setIndex] = useState(0);
  const yearsDevExperience = yearsSinceDate(2022, 0, 1);

  return { index, setIndex, yearsDevExperience };
};

export default AboutController;
