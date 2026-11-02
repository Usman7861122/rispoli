// Cookie categories shown in the consent banner and the settings panel.
// "Necessary" is always on. The site sets no analytics or marketing tools today; these switches are ready for when the practice adds them.
export type ConsentKey = 'necessary' | 'preferences' | 'analytics' | 'marketing';

export const cookieCategories: { key: ConsentKey; title: string; text: string; always?: boolean; examples: string }[] = [
  {
    key: 'necessary',
    title: 'Strictly necessary',
    text: 'These keep the site safe and working. They remember your cookie choice. You cannot turn them off.',
    always: true,
    examples: 'Your cookie choice',
  },
  {
    key: 'preferences',
    title: 'Preferences',
    text: 'These remember things you pick, like a filter on a page, so you do not have to set them again.',
    examples: 'Saved filters and display choices',
  },
  {
    key: 'analytics',
    title: 'Analytics',
    text: 'These help us see which pages people visit and how the site is used, so we can make it easier. We look at group totals, not at you.',
    examples: 'Page views and visit length',
  },
  {
    key: 'marketing',
    title: 'Marketing',
    text: 'These let us measure our ads and show our ads on other sites. We do not use them without your yes.',
    examples: 'Ad measurement',
  },
];

export const CONSENT_KEY = 'wipp-cookie-consent-v1';
export const CONSENT_EVENT = 'wipp:consent-changed';
export const OPEN_EVENT = 'wipp:open-cookie-settings';
export const CONSENT_DAYS = 365;
