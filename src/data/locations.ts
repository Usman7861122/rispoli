// All three offices, addresses and provider lists are copied from leiarispolimd.com (Locations pages).
export interface Provider { name: string; role: string }
export interface Office {
  slug: string;
  city: string;
  street: string;
  cityLine: string;
  blurb: string;
  nearby: string[];
  providers: Provider[];
  image: string;
  position: string;
}

const rispoli = { name: 'Leia Rispoli, MD', role: 'Interventional pain & physical medicine' };
const mehta = { name: 'Natasha Mehta, MD', role: 'PM&R, Brain Injury Medicine' };
const hattenbach = { name: 'Jacob Hattenbach, DO', role: 'PM&R, Interventional Spine' };

export const locations = {
  eyebrow: 'Our locations',
  title: 'Three offices, close to you.',
  accent: 'close',
  intro: 'Visit us in Santa Monica, Marina Del Rey or Newport Beach. Every office offers the same caring, non-surgical approach.',
  phone: '310-405-0595',
  email: 'officemanager@leiarispolimd.com',
  offices: [
    {
      slug: 'santa-monica',
      city: 'Santa Monica',
      street: '2021 Santa Monica Blvd, Suite 200E',
      cityLine: 'Santa Monica, CA 90404',
      blurb: 'Advanced, non-surgical pain care for patients across the Westside of Los Angeles, in a welcoming, patient-centered office.',
      nearby: ['Brentwood', 'Pacific Palisades', 'Venice', 'Marina Del Rey', 'West Los Angeles'],
      providers: [hattenbach],
      image: '/images/locations/santa-monica.jpg',
      position: '55% 50%',
    },
    {
      slug: 'marina-del-rey',
      city: 'Marina Del Rey',
      street: '4551 Glencoe Ave, Suite 145',
      cityLine: 'Marina Del Rey, CA 90292',
      blurb: 'A modern, comfortable office with individualized, evidence-based care to relieve pain and restore function.',
      nearby: ['Venice', 'Playa Vista', 'Santa Monica', 'Culver City', 'Westchester'],
      providers: [rispoli, mehta, hattenbach],
      image: '/images/locations/marina-del-rey.jpg',
      position: '40% 50%',
    },
    {
      slug: 'newport-beach',
      city: 'Newport Beach',
      street: '3501 Jamboree Rd, Suite 1200',
      cityLine: 'Newport Beach, CA 92660',
      blurb: 'Convenient access to advanced, non-surgical pain management in the heart of Orange County, near major roads and medical facilities.',
      nearby: ['Irvine', 'Costa Mesa', 'Corona del Mar', 'Orange County'],
      providers: [rispoli, mehta],
      image: '/images/locations/newport-beach.jpg',
      position: '45% 40%',
    },
  ] as Office[],
};
