import { TranslationsProvider } from '@/components/provider/TranslationsProvider';
import { initTranslations } from '@/constants/i18n/i18n';
import { defaultLanguage } from '@/constants/i18n/settings';

import Home from '../../features/Home';

type Props = {
  params: { lang: string };
};

const HomePage = async ({ params }: Props) => {
  const { lang } = params;
  const { resources } = await initTranslations(defaultLanguage, ['translation']);

  return (
    <TranslationsProvider resources={resources} locale={lang} namespaces={['translation']}>
      <Home lang={lang} />
    </TranslationsProvider>
  );
};

export default HomePage;
