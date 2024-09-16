import Home from '../../features/Home';

const HomePage = async ({ params }: { params: { lang: string } }) => {
  const { lang } = params;

  return <Home lang={lang} />;
};

export default HomePage;
