// Addresses, phone and email come from the old site's Contact page (lrnmmedical.com/contact-us).
// TODO: confirm each office's own hours with the client. Hours below are the main-office hours from site.ts.
export interface Office {
  slug: string;
  city: string;
  street: string;
  cityLine: string;
  hours: { days: string; time: string }[];
  note?: string;
}

export const locations = {
  eyebrow: 'Our locations',
  title: 'Two offices, close to you.',
  accent: 'close',
  intro: 'Visit us in Marina Del Rey or Newport Beach. Both offices offer the same caring, non-surgical approach.',
  phone: '310-405-0595',
  email: 'officemanager@leiarispolimd.com',
  offices: [
    {
      slug: 'marina-del-rey',
      city: 'Marina Del Rey',
      street: '4551 Glencoe Ave, Suite 145',
      cityLine: 'Marina Del Rey, CA 90292',
      hours: [{ days: 'Mon - Fri', time: '8:00 AM - 5:00 PM' }],
    },
    {
      slug: 'newport-beach',
      city: 'Newport Beach',
      street: '3501 Jamboree Rd, Suite 1200',
      cityLine: 'Newport Beach, CA 92660',
      hours: [{ days: 'Mon - Fri', time: '8:00 AM - 5:00 PM' }],
    },
  ] as Office[],
};
