import Contact from '@/features/Contact';

const ContactPage = ({ params }: { params: { lang: string } }) => {
  const { lang } = params;
  return <Contact lang={lang} />;
};

export default ContactPage;
