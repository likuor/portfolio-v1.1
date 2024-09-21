import Home from '../../features/Home';

type Props = {
  params: { lang: string };
};

const HomePage = async ({ params }: Props) => {
  const { lang } = params;

  return <Home lang={lang} />;
};

export default HomePage;
