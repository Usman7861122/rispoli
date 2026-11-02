// Shapes for blog posts and legal pages. Content lives in blog-posts.ts and legal-pages.ts.
export type Block =
  | { type: 'h2'; text: string }
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'callout'; title: string; text: string };

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;          // 1-2 sentences for cards
  metaDescription: string;  // one sentence for search results
  date: string;             // YYYY-MM-DD
  readTime: string;         // e.g. '5 min'
  category: string;         // one of: Education, Spine & back, Procedures, Headache & nerves, Healthy habits
  image: string;            // /images/blog/<slug>.jpg or an existing service photo
  imageAlt: string;
  position: string;         // CSS object-position
  intro: string;            // opening paragraph
  body: Block[];
  takeaways: string[];      // 3-5 short bullets
  faqs: { q: string; a: string }[];       // 2-3 items
  relatedServices: string[];              // slugs of service pages, e.g. 'epidural-steroid-injections'
}

export interface LegalSection { id: string; title: string; paragraphs?: string[]; items?: string[]; note?: string }
export interface LegalPage {
  slug: string;              // URL is /<slug>
  title: string;
  seoDescription: string;
  updated: string;           // e.g. 'November 2, 2026'
  intro: string;
  sections: LegalSection[];
}
