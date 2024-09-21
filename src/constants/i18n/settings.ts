export const defaultLanguage = 'en';
export const availableLanguages = [defaultLanguage, 'ja'];

export const i18nConfig = {
  locales: availableLanguages,
  defaultLocale: defaultLanguage,
};

export const namespaces = ['translation'];

export const getOptions = (lng = defaultLanguage) => ({
  lng,
  defaultNS: defaultLanguage,
  fallbackLng: defaultLanguage,
  fallbackNS: namespaces[0],
  ns: namespaces,
  supportedLngs: availableLanguages,
});
