import { useState } from 'react';

import yearsSinceDate from '@/helper/timeCount';

const AboutController = () => {
  const [index, setIndex] = useState(0);
  const yearsDevExperience = yearsSinceDate(2021, 0, 1);

  return { index, setIndex, yearsDevExperience };
};

export default AboutController;
