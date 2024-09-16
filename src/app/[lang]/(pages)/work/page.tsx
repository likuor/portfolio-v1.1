import Work from '@/features/Work';

const WorkPage = ({ params }: { params: { lang: string } }) => {
  const { lang } = params;
  return <Work lang={lang} />;
};

export default WorkPage;
