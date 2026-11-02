import type { LegalPage } from './content-types';

// DRAFT legal copy for attorney / practice review.
export const legalPages: LegalPage[] = [
  {
    slug: 'privacy',
    title: 'Privacy Policy',
    seoDescription:
      'How Westside Interventional Pain & Physiatry collects, uses and protects information you share on this website.',
    updated: 'November 2, 2026',
    intro:
      'Westside Interventional Pain & Physiatry cares about your privacy. This policy explains what information we collect through this website, how we use it, and the choices you have. It covers this website only. How we handle your medical records is explained in our Notice of Privacy Practices.',
    sections: [
      {
        id: 'who-we-are',
        title: 'Who we are',
        paragraphs: [
          'This website belongs to Westside Interventional Pain & Physiatry, a pain management and physiatry practice in California. Our website was formerly at leiarispolimd.com.',
          'We have offices in Santa Monica, Marina Del Rey and Newport Beach, California.',
        ],
      },
      {
        id: 'information-we-collect',
        title: 'Information we collect',
        paragraphs: ['We collect information in two ways: what you choose to give us, and what is collected automatically when you visit.'],
        items: [
          'Information you give us, such as your name, phone number, email address and message when you send an appointment request or contact us.',
          'Information from your phone or email contact with our office.',
          'Basic technical information, such as your browser type, device type, pages visited and the date and time of your visit.',
          'Cookie choices you make with our cookie consent tool.',
        ],
      },
      {
        id: 'how-we-use-information',
        title: 'How we use information',
        items: [
          'To answer your questions and respond to appointment requests.',
          'To run, secure and improve this website.',
          'To understand how people use the site, but only if you agree to analytics cookies.',
          'To follow the law and protect our rights.',
        ],
      },
      {
        id: 'health-information',
        title: 'Health information and this website',
        paragraphs: [
          'Please do not put detailed medical information in the appointment request form, in email or in any other website message. Email and web forms may not be fully secure.',
          'If you become a patient, the health information in your medical record is protected by federal and state law. See our Notice of Privacy Practices for details.',
        ],
      },
      {
        id: 'cookies',
        title: 'Cookies and similar tools',
        paragraphs: [
          'Our site uses a cookie consent tool with four categories: Necessary, Preferences, Analytics and Marketing. The website may use analytics only if you agree. You can change your choices at any time. See our Cookie Policy for more.',
        ],
      },
      {
        id: 'sharing-information',
        title: 'How we share information',
        paragraphs: ['We do not sell your personal information. We may share information in these limited cases:'],
        items: [
          'With service providers who help us run the website or our office, and who must protect the information.',
          'With the third-party online booking service, if you choose to use the online booking link. That service has its own privacy policy.',
          'When the law requires it, such as in response to a valid legal request.',
          'To protect the safety, rights or property of our patients, our practice or others.',
        ],
      },
      {
        id: 'third-party-links',
        title: 'Links to other websites',
        paragraphs: [
          'This site may link to other websites, including our online booking link. We do not control those sites and are not responsible for their privacy practices. Please read their policies.',
        ],
      },
      {
        id: 'security',
        title: 'How we protect information',
        paragraphs: [
          'We use reasonable steps to protect the information we collect. No website or method of sending data is completely secure, so we cannot promise absolute security.',
        ],
      },
      {
        id: 'your-choices',
        title: 'Your choices and California privacy rights',
        paragraphs: [
          'You can ask us to tell you what personal information we have collected about you through this website, to correct it, or to delete it. California law may give you additional rights. Some information we hold as a medical practice is covered by health privacy laws instead, and different rules may apply.',
          'To make a request, contact our office using the details below. We may need to confirm who you are before we act on a request.',
        ],
      },
      {
        id: 'children',
        title: 'Children',
        paragraphs: [
          'This website is meant for adults. We do not knowingly collect personal information from children through the site. A parent or guardian may contact us for a child.',
        ],
      },
      {
        id: 'changes-contact',
        title: 'Changes and how to contact us',
        paragraphs: [
          'We may update this policy from time to time. The date at the top shows when it was last changed.',
          'Questions? Contact our office manager at officemanager@leiarispolimd.com or call 310-405-0595. Our hours are Monday to Friday, 8:00 AM to 5:00 PM Pacific.',
        ],
      },
    ],
  },
  {
    slug: 'terms-conditions',
    title: 'Terms & Conditions',
    seoDescription:
      'The terms for using the Westside Interventional Pain & Physiatry website.',
    updated: 'November 2, 2026',
    intro:
      'These terms explain the rules for using the Westside Interventional Pain & Physiatry website. By using the site, you agree to them. If you do not agree, please do not use the site.',
    sections: [
      {
        id: 'about-site',
        title: 'About this website',
        paragraphs: [
          'This website is provided by Westside Interventional Pain & Physiatry. It shares information about our practice, providers, services and offices, and lets you contact us or request an appointment.',
        ],
      },
      {
        id: 'not-medical-advice',
        title: 'Not medical advice',
        paragraphs: [
          'The content on this site is for general education only. It is not medical advice and does not replace a visit with a qualified health care provider. Please read our Medical Disclaimer.',
          'If you think you are having a medical emergency, call 911.',
        ],
      },
      {
        id: 'no-patient-relationship',
        title: 'No patient relationship from the website',
        paragraphs: [
          'Using this site, sending an appointment request or emailing us does not create a doctor-patient relationship. That relationship begins only after you are seen by one of our providers and both sides agree to care.',
        ],
      },
      {
        id: 'appointment-requests',
        title: 'Appointment requests and communications',
        paragraphs: [
          'An appointment request is only a request. Your appointment is not confirmed until our office contacts you to confirm it. Please do not send urgent or detailed medical information through the website or email.',
        ],
      },
      {
        id: 'acceptable-use',
        title: 'Acceptable use',
        paragraphs: ['When you use this site, you agree not to:'],
        items: [
          'Break any law or the rights of others.',
          'Send false, harmful or misleading information.',
          'Try to damage, overload or gain unauthorized access to the site or its systems.',
          'Use automated tools to copy the site in bulk without our written permission.',
        ],
      },
      {
        id: 'intellectual-property',
        title: 'Our content',
        paragraphs: [
          'The text, images, logos and design on this site belong to the practice or its licensors and are protected by law. You may view and print pages for your own personal use. You may not copy, sell or reuse the content without our written permission.',
        ],
      },
      {
        id: 'third-party-links',
        title: 'Third-party links and services',
        paragraphs: [
          'The site may link to other websites and services, such as our online booking link. We do not control them and are not responsible for their content or practices. Using them is at your own risk and subject to their own terms.',
        ],
      },
      {
        id: 'no-warranties',
        title: 'No guarantees about the site',
        paragraphs: [
          'We work to keep the information on this site accurate and current, but we cannot promise that it is complete or error free. The site is provided as is and as available, and it may be unavailable at times.',
        ],
      },
      {
        id: 'limitation-liability',
        title: 'Limits on our responsibility',
        paragraphs: [
          'To the fullest extent the law allows, the practice and its providers and staff are not responsible for losses that come from using this website or relying on its content. This does not limit any rights you have under law that cannot be limited, and it does not apply to the care you receive from us as a patient.',
        ],
      },
      {
        id: 'governing-law',
        title: 'Governing law and changes',
        paragraphs: [
          'These terms are governed by the laws of the State of California.',
          'We may update these terms from time to time. The date at the top shows the latest version. Using the site after a change means you accept the new terms.',
          'Questions? Contact our office manager at officemanager@leiarispolimd.com or call 310-405-0595.',
        ],
      },
    ],
  },
  {
    slug: 'accessibility',
    title: 'Accessibility Statement',
    seoDescription:
      'Westside Interventional Pain & Physiatry works to make its website usable for everyone, including people with disabilities.',
    updated: 'November 2, 2026',
    intro:
      'We want everyone to be able to use our website, including people with disabilities. We are working to make the site easier to use and understand for all patients and visitors.',
    sections: [
      {
        id: 'our-commitment',
        title: 'Our commitment',
        paragraphs: [
          'Westside Interventional Pain & Physiatry is committed to making its website accessible. Many of our patients live with pain or limited movement, and we want the site to work well for them.',
        ],
      },
      {
        id: 'standard-we-aim-for',
        title: 'The standard we aim for',
        paragraphs: [
          'We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.1, Level AA. These are widely used guidelines for making web content easier to use.',
        ],
      },
      {
        id: 'what-we-do',
        title: 'What we try to do',
        items: [
          'Use clear headings and plain language.',
          'Make the site work with a keyboard.',
          'Use text that is easy to read against its background.',
          'Add text descriptions for important images.',
          'Make the site work on phones, tablets and computers.',
          'Label form fields so assistive tools can read them.',
        ],
      },
      {
        id: 'ongoing-work',
        title: 'This is ongoing work',
        paragraphs: [
          'We do not claim that every page fully meets WCAG 2.1 AA. Some parts of the site may still be hard to use. We keep reviewing and improving the site, and we welcome your feedback.',
        ],
      },
      {
        id: 'third-party-content',
        title: 'Third-party content',
        paragraphs: [
          'Some tools on this site, such as the online booking link, are provided by other companies. We cannot always control how accessible they are. If you have trouble with one, contact us and we will help you another way.',
        ],
      },
      {
        id: 'help-from-us',
        title: 'Get help from our office',
        paragraphs: [
          'If you have trouble using any part of this site, or need information in another format, please contact us. You can call, email or ask for help booking an appointment by phone.',
        ],
        items: [
          'Phone: 310-405-0595',
          'Email: officemanager@leiarispolimd.com',
          'Hours: Monday to Friday, 8:00 AM to 5:00 PM Pacific',
        ],
      },
      {
        id: 'send-feedback',
        title: 'Tell us about a problem',
        paragraphs: [
          'If you find something that is hard to use, please tell us the page address and what happened. Tell us what device or assistive tool you were using, if you can. We will do our best to respond and fix the problem.',
        ],
      },
      {
        id: 'in-office-access',
        title: 'Access at our offices',
        paragraphs: [
          'If you need an accommodation for your visit, please tell our staff when you book your appointment so we can plan ahead.',
        ],
      },
    ],
  },
  {
    slug: 'cookie-policy',
    title: 'Cookie Policy',
    seoDescription:
      'What cookies the Westside Interventional Pain & Physiatry website uses, the four cookie categories, and how to change your choices.',
    updated: 'November 2, 2026',
    intro:
      'This page explains how our website uses cookies and similar tools, and how you can control them. You are in charge of which optional cookies are used.',
    sections: [
      {
        id: 'what-are-cookies',
        title: 'What are cookies?',
        paragraphs: [
          'Cookies are small text files that a website saves on your device. They help a site work, remember your choices and, in some cases, understand how the site is used.',
        ],
      },
      {
        id: 'categories',
        title: 'The four cookie categories',
        paragraphs: ['Our cookie consent tool groups cookies into four categories:'],
        items: [
          'Necessary: needed for the site to work and stay secure, and to remember your cookie choices. These are always on.',
          'Preferences: remember settings you choose so the site works the way you like.',
          'Analytics: help us understand how visitors use the site so we can improve it. We use these only if you agree.',
          'Marketing: used to show relevant content or measure outreach. We use these only if you agree.',
        ],
      },
      {
        id: 'necessary',
        title: 'Necessary cookies',
        paragraphs: [
          'These cannot be turned off in our tool because the site needs them to work. They do not store details about your health.',
        ],
      },
      {
        id: 'optional',
        title: 'Optional cookies',
        paragraphs: [
          'Preferences, Analytics and Marketing cookies are optional. They are used only if you allow them. If you do not agree, the site still works.',
        ],
      },
      {
        id: 'change-choices',
        title: 'How to change your choices',
        paragraphs: [
          'You can change your choices at any time. Click the “Cookie settings” button in the footer at the bottom of any page. Then turn each optional category on or off and save.',
        ],
      },
      {
        id: 'how-long',
        title: 'How long your choices are saved',
        paragraphs: [
          'Your cookie choices are saved in your browser for about 12 months. After that, we may ask you again. If you clear your browser data, your choices are removed and we will ask you again.',
        ],
      },
      {
        id: 'browser-controls',
        title: 'Browser controls',
        paragraphs: [
          'You can also block or delete cookies in your browser settings. If you block all cookies, some parts of the site may not work as expected.',
        ],
      },
      {
        id: 'third-parties',
        title: 'Third-party services',
        paragraphs: [
          'If you use a link to another service, such as our online booking link, that service may set its own cookies under its own policy.',
        ],
      },
      {
        id: 'questions',
        title: 'Questions',
        paragraphs: [
          'To learn more, see our Privacy Policy, or contact our office manager at officemanager@leiarispolimd.com or 310-405-0595.',
        ],
      },
    ],
  },
  {
    slug: 'notice-of-privacy-practices',
    title: 'Notice of Privacy Practices',
    seoDescription:
      'How Westside Interventional Pain & Physiatry may use and share your health information, and your rights as a patient.',
    updated: 'November 2, 2026',
    intro:
      'This notice describes how medical information about you may be used and shared, and how you can get access to it. Please read it carefully.',
    sections: [
      {
        id: 'draft-notice',
        title: 'Draft template',
        paragraphs: [
          'This notice is a draft template. The practice’s privacy officer must review and confirm it before it is used as the practice’s official notice.',
        ],
        note: 'Draft for review by the practice privacy officer.',
      },
      {
        id: 'our-duties',
        title: 'Our duties',
        paragraphs: [
          'We are required by law to keep your health information private and secure, to give you this notice of our legal duties and privacy practices, and to follow the notice that is in effect. We will tell you if there is a breach that affects the privacy of your information.',
        ],
      },
      {
        id: 'how-we-use-share',
        title: 'How we may use and share your health information',
        paragraphs: ['We may use and share your information for these purposes without needing your written permission:'],
        items: [
          'Treatment: to provide and coordinate your care, for example with other doctors, therapists or pharmacies.',
          'Payment: to bill and collect payment from you or your health plan.',
          'Health care operations: to run our practice, review the quality of care and train staff.',
          'Appointment reminders and information about treatment options or services that may interest you.',
        ],
      },
      {
        id: 'other-permitted',
        title: 'Other uses and sharing allowed or required by law',
        items: [
          'When the law requires it.',
          'For public health activities, such as reporting certain diseases or injuries.',
          'To report suspected abuse, neglect or domestic violence as the law requires.',
          'For health oversight activities, such as audits and inspections.',
          'For court orders, subpoenas and other legal proceedings.',
          'For certain law enforcement purposes.',
          'To prevent a serious threat to health or safety.',
          'For workers’ compensation, as the law allows.',
          'For certain research, with the protections the law requires.',
          'To coroners, medical examiners and funeral directors, as the law allows.',
        ],
      },
      {
        id: 'with-permission',
        title: 'Uses that need your written permission',
        paragraphs: [
          'We will ask for your written permission before we use or share your information for other reasons, including most marketing and any sale of your information. Some types of sensitive records may have extra protections under federal or California law. You may cancel your permission in writing at any time, but this will not undo what we already shared.',
        ],
      },
      {
        id: 'family-friends',
        title: 'Family members and others involved in your care',
        paragraphs: [
          'With your agreement, we may share relevant information with a family member or friend who is involved in your care. If you are not able to agree, we may share what is needed if we believe it is in your best interest.',
        ],
      },
      {
        id: 'your-rights',
        title: 'Your rights',
        paragraphs: ['You have the right to:'],
        items: [
          'See and get a copy of your medical record, in most cases.',
          'Ask us to correct information you think is wrong or incomplete.',
          'Ask for a list of certain times we have shared your information.',
          'Ask us to limit how we use or share your information. We may not be able to agree to every request, but we must agree if you pay in full out of pocket for a service and ask us not to tell your health plan.',
          'Ask us to contact you in a certain way or at a certain place, such as by mobile phone only.',
          'Get a paper copy of this notice, even if you agreed to get it by email.',
          'Choose someone to act for you, such as a person with legal authority.',
          'File a complaint if you think your privacy rights were violated.',
        ],
      },
      {
        id: 'changes-to-notice',
        title: 'Changes to this notice',
        paragraphs: [
          'We may change this notice. A new notice would apply to all the information we hold. The current notice is available on our website and from our office.',
        ],
      },
      {
        id: 'complaints',
        title: 'Complaints',
        paragraphs: [
          'If you believe your privacy rights have been violated, you may file a complaint with our office using the contact details below. You may also file a complaint with the U.S. Department of Health and Human Services Office for Civil Rights. We will not punish you or treat you differently for filing a complaint.',
        ],
      },
      {
        id: 'privacy-contact',
        title: 'Privacy contact',
        paragraphs: [
          'To ask a question, make a request or file a complaint, contact our office manager at officemanager@leiarispolimd.com or call 310-405-0595. Our hours are Monday to Friday, 8:00 AM to 5:00 PM Pacific.',
        ],
      },
    ],
  },
  {
    slug: 'medical-disclaimer',
    title: 'Medical Disclaimer',
    seoDescription:
      'The information on this website is for education only. It is not medical advice. In an emergency, call 911.',
    updated: 'November 2, 2026',
    intro:
      'The information on this website is meant to help you learn. It is not a substitute for care from a qualified health professional. Please read this disclaimer.',
    sections: [
      {
        id: 'emergency',
        title: 'In an emergency, call 911',
        paragraphs: [
          'This website and our appointment request form are not for emergencies. If you think you are having a medical emergency, call 911 or go to the nearest emergency room right away.',
        ],
      },
      {
        id: 'educational-only',
        title: 'For education only',
        paragraphs: [
          'The articles, service pages and other content on this site are for general education. They are not medical advice, diagnosis or treatment.',
        ],
      },
      {
        id: 'talk-to-provider',
        title: 'Talk to a provider about your care',
        paragraphs: [
          'Every person is different. Only a qualified provider who knows your health history can tell you what is right for you. Do not ignore or delay advice from your own health care provider because of something you read here.',
        ],
      },
      {
        id: 'no-patient-relationship',
        title: 'No doctor-patient relationship',
        paragraphs: [
          'Reading this site, sending a message or submitting an appointment request does not create a doctor-patient relationship with Westside Interventional Pain & Physiatry or any of its providers.',
        ],
      },
      {
        id: 'results-vary',
        title: 'Results vary',
        paragraphs: [
          'Treatments affect people in different ways. We cannot promise a particular result or outcome. All procedures and medicines have possible risks and benefits, which your provider will talk with you about.',
        ],
      },
      {
        id: 'accuracy',
        title: 'Accuracy of information',
        paragraphs: [
          'We try to keep the information on this site accurate and up to date, but medical knowledge changes. We cannot promise that everything is complete or current.',
        ],
      },
      {
        id: 'outside-links',
        title: 'Outside links',
        paragraphs: [
          'Links to other websites are provided for your convenience. We do not control or endorse their content.',
        ],
      },
      {
        id: 'contact',
        title: 'Questions or appointments',
        paragraphs: [
          'To ask about care or to request an appointment, call 310-405-0595 or email officemanager@leiarispolimd.com. Our hours are Monday to Friday, 8:00 AM to 5:00 PM Pacific. Please do not send urgent medical details by email or web form.',
        ],
      },
    ],
  },
];
