import { useState } from 'react';

const AboutController = () => {
  const [index, setIndex] = useState(0);

  return { index, setIndex };
};

export default AboutController;
