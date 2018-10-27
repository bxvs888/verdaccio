/**
 * @prettier
 * @flow
 */

import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';
import pt from 'react-intl/locale-data/pt';
import localeData from '../i18n/locales.json';

addLocaleData([...en, ...es, ...pt]);

// Define user's language. Different browsers have the user locale defined
// on different fields on the `navigator` object, so we make sure to account
// for these different by checking all of them
const language = (navigator.languages && navigator.languages[0]) || navigator.language;

// Split locales with a region code
export const locale = language.toLowerCase().split(/[_-]+/)[0];

// Try full locale, try locale without region code, fallback to 'en'
export const localizationMsgs = localeData[locale] || localeData[language] || localeData.en;
