import About from '@/features/About';

const AboutPage = ({ params }: { params: { lang: string } }) => {
  const { lang } = params;
  return <About lang={lang} />;
};

export default AboutPage;
