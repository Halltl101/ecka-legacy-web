export const SITE_URL = 'https://ecka-legacy-web.lovable.app';

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  image: string;
};

export const teamMembers: TeamMember[] = [
  { slug: 'tv-hall', name: 'T.V. Hall', role: 'Chief Executive Officer', bio: 'Founder with over $38B in M&A transaction experience. Former Billboard-charting artist with MBA and MSF. Minority owner of ECHL Allen Americans hockey team and VP of Harvard Business School Alumni Club of Atlanta.', image: '/lovable-uploads/c02206e8-f7ce-45f4-bc6c-14ed5c8b0c1c.webp' },
  { slug: 'tony-hansen', name: 'Tony Hansen', role: 'Chief Marketing Officer', bio: 'Music executive and entrepreneur with experience managing Grammy-nominated, platinum-selling artists. Has worked with major labels including Atlantic Records and Columbia Records, with expertise spanning artist development, brand partnerships, marketing, and music licensing.', image: '/lovable-uploads/0538ec46-6b86-4941-92b2-736699c6538e.webp' },
  { slug: 'alex-benton', name: 'Alex Benton', role: 'Chief Operating Officer', bio: 'Howard University and Harvard Business School alum with experience across music, film, and entertainment investment. Award-winning film producer who has also contributed to creative campaigns for artists signed to Capitol Records and Atlantic Records..', image: '/lovable-uploads/4a46e31a-7f5b-4183-836a-bcbdcfc78e8e.webp' },
  { slug: 'erik-steigen', name: 'Erik Steigen', role: 'VP Publishing', bio: '20+ years of experience in publishing and royalty administration. Has managed catalogs for artists including Lionel Richie, Brian Wilson, and Don Felder. Founder of USA Media Rights®.', image: '/lovable-uploads/387678dd-6e24-416b-bf4f-715083b5f5d0.webp' },
  { slug: 'christopher-meatto', name: 'Christopher Meatto', role: 'General Counsel', bio: 'Attorney and financial executive with over 45 years of experience across law, finance, and business. Harvard Law School J.D. and Fordham University graduate with extensive experience advising companies, entrepreneurs, and investors on complex legal and financial matters.', image: '/lovable-uploads/eeeb763b-772e-4564-9a23-53b3a29029c3.webp' },
  { slug: 'sean-collins', name: 'Sean Collins', role: 'VP of A&R and M&A', bio: '25+ years music industry veteran. Collaborated with major artists including Jay-Z, Chris Brown, and 50 Cent. Successfully negotiated deals with Warner Chappell, Sony ATV, and Empire.', image: '/lovable-uploads/15691bfc-f7ef-42ae-96d3-ad4fd5f13a79.webp' },
  { slug: 'brandon-jarnigan', name: 'Brandon Jarnigan', role: 'Finance and Royalties Director', bio: 'Finance executive and UNC MBA with experience spanning financial services, technology, and high-growth companies. Former American Express executive who held a key leadership role at Built Technologies through major funding rounds backed by Index Ventures and Goldman Sachs.', image: '/lovable-uploads/fb3556b8-3b10-4a61-a12a-5a4656493367.webp' },
  { slug: 'kate-hyman', name: 'Kate Hyman', role: 'Acquisitions Lead', bio: 'Veteran A&R executive who has helped discover and develop influential artists including Jeff Buckley, The Cranberries, The Flaming Lips, and Moby. Held A&R roles across major and independent labels, building a career identifying distinctive talent and guiding artist development.', image: '/lovable-uploads/a8d63e21-1a53-4f4c-8a42-150b7d4a88d9.webp' },
];

export const getImageStyle = (memberName: string): React.CSSProperties => {
  if (memberName === 'Alex Benton') return { objectPosition: 'center 35%' };
  return {};
};

export const getTeamMember = (slug: string) => teamMembers.find(m => m.slug === slug);
