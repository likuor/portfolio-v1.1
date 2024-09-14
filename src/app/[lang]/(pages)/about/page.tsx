import { Suspense } from 'react';

import About from '@/features/About';

const AboutPage = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <About />
  </Suspense>
);

export default AboutPage;
