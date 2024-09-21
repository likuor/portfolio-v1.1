import { createInstance, i18n as i18next, Resource } from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next/initReactI18next';

import { i18nConfig } from './settings';

export const initTranslations = async (
  locale: string,
  namespaces: string[],
  i18nInstance?: i18next,
  resources?: Resource
) => {
  const instance = i18nInstance || createInstance();

  instance.use(initReactI18next);

  if (!resources) {
    instance.use(
      resourcesToBackend((language: string, namespace: string) =>
        import(`../i18n/languages/${language}/${namespace}.json`).then((module) => module.default)
      )
    );
  }

  await instance.init({
    lng: locale,
    resources,
    fallbackLng: i18nConfig.defaultLocale,
    supportedLngs: i18nConfig.locales,
    defaultNS: namespaces[0],
    fallbackNS: namespaces[0],
    ns: namespaces,
    preload: resources ? [] : i18nConfig.locales,
  });

  return {
    i18n: instance,
    resources: instance.services.resourceStore.data,
    t: instance.t,
  };
};

export default initTranslations;
