/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║  THE ONLY FILE YOU NEED TO EDIT FOR TEXT CONTENT             ║
 * ║  (images live in /public – see README.md)                    ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

/* ───────────── 1. BASIC INFO ───────────── */
export const SITE = {
  name: 'Gopisha Gangadhar', // shown in navbar, footer, hero, about
  pageTitle: 'Gopisha Gangadhar – Fullstack Developer', // browser tab title
  role: 'Fullstack Developer', // footer subtitle
  email: 'gopisha.gangadhar@gmail.com',
  // digits only, with country code, no + or spaces (e.g. 919876543210)
  phone: '918089025721',
  whatsappMessage: 'Hi, I visited your portfolio and would like to get in touch.',
  available: true,
};

/* ───────────── 2. HERO (top of page) ───────────── */
export const HERO = {
  eyebrow: 'FULLSTACK DEVELOPER • AI & CLOUD COMPUTING',
  headline: 'GOPISHA GANGADHAR', // big text, use CAPS
  roles: ['FULLSTACK DEVELOPER', 'AI & VISION ENTHUSIAST'] as [string, string],
  tagline: 'I build responsive websites and practical AI projects that turn ideas into polished digital experiences.',
  primaryButton: 'EXPLORE MY WORK',
  secondaryButton: 'Get In Touch',
  image: '/assets/hero-red-bg.png', // 1920x1080, subject on the RIGHT side
  imageAlt: 'Portrait of Gopisha Gangadhar',
  imagePosition: '69% center', // CSS object-position fallback
};

/* ───────────── 3. LOADING SCREEN ───────────── */
export const LOADER = {
  statement: 'BUILDING IDEAS. CREATING EXPERIENCES. EXPLORING TECHNOLOGY.',
  redWords: ['EXPERIENCES', 'TECHNOLOGY'], // words highlighted in red
};

/* ───────────── 4. ABOUT ───────────── */
export const ABOUT = {
  eyebrow: 'Fullstack Developer · AI & Cloud · Data Analytics',
  portrait: '/media/profile.jpg', // 4:5 portrait photo
  portraitAlt: 'Portrait of Gopisha Gangadhar',
  portraitCaption: 'Fullstack Developer', // small red text under the name on the photo
  paragraphs: [
    "I'm a Computer Applications graduate specializing in Full Stack Development with AI and Cloud Computing. I build responsive websites and hands-on projects across web development, computer vision and data analytics.",
    'I enjoy turning ideas into meaningful digital experiences, and I learn best by building. I am always exploring new technologies and looking for projects where I can grow and deliver real value.',
  ],
  technologies: ['Python', 'JavaScript', 'HTML & CSS', 'SQL', 'OpenCV', 'Tableau'],
  focus: [
    'Artificial Intelligence & Computer Vision',
    'Data Analytics & Visualization',
    'Web Development & UI Design',
  ],
};

/* ───────────── 5. SOCIAL LINKS (footer) ───────────── */
export const SOCIALS = [
  { id: 'github', label: 'GitHub', href: 'https://github.com/gopisha-gangadhar' },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/gopisha-gangadhar-7686703a8' },
] as const;

/* ───────────── 6. TECHNICAL SKILLS (6 cards look best) ───────────── */
export const SKILL_CARDS: { name: string; category: string; level: string }[] = [
  { name: 'HTML & CSS', category: 'Responsive Layouts · UI Design', level: 'Proficient' },
  { name: 'Python', category: 'Scripting · Automation', level: 'Proficient' },
  { name: 'SQL', category: 'Queries · Databases', level: 'Proficient' },
  { name: 'Microsoft Excel', category: 'Analysis · Spreadsheets', level: 'Advanced' },
  { name: 'Data Visualization', category: 'Tableau · Power BI', level: 'Proficient' },
  { name: 'OpenCV', category: 'Computer Vision · Image Processing', level: 'Beginner' },
];

/* ───────────── 6b. TECH STACK STRIP (logos under the skills) ─────────────
 * Use names with a built-in logo: React, JavaScript, Python, FastAPI, PostgreSQL,
 * Supabase, SQLite, Three.js, GSAP. Any other name still shows as a lettered badge. */
export const TECH_STACK: string[] = [
  'Python',
  'HTML',
  'CSS',
  'JavaScript',
  'SQL',
  'Excel',
  'Tableau',
  'Power BI',
  'OpenCV',
  'GitHub',
  'Unity',
  'C#',
];

/* ───────────── 7. PROJECTS ─────────────
 * Thumbnails: put project-<n>-1.jpg, -2.jpg, -3.jpg in /public/assets/thumbnails/
 * (card cycles through 1-3). Set poster to the "-1.jpg" file.
 * Add liveUrl / repoUrl to show "View Live" / "View Code" buttons.
 * 6 or 9 projects fill the 3D grid best. */
export interface Project {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  videoUrl?: string;
  embedUrl?: string;
  driveUrl?: string;
  liveUrl?: string;
  repoUrl?: string;
  kind?: 'video' | 'software';
  poster?: string;
  description?: string;
  tags?: string[];
}

export const PORTFOLIO_PROJECTS: Project[] = [
  {
    id: 'ar-hand-gesture-tracking',
    kind: 'software',
    title: 'AR Hand Gesture Tracking',
    subtitle: 'Spatial object control with your hands',
    category: 'AI & Computer Vision',
    poster: '/assets/thumbnails/project-1-1.jpg',
    description:
      'A real-time hand gesture recognition system that tracks hand landmarks and lets you control virtual objects interactively. I built the tracking pipeline and the gesture-to-action logic.',
    tags: ['Python', 'OpenCV', 'Gesture Tracking'],
    repoUrl: 'https://github.com/gopisha-gangadhar/ar-gesture-control',
  },
  {
    id: 'smart-image-analysis',
    kind: 'software',
    title: 'Smart Image Analysis',
    subtitle: 'Object and face detection toolkit',
    category: 'AI & Computer Vision',
    poster: '/assets/thumbnails/project-2-1.jpg',
    description:
      'An image processing project covering enhancement, edge detection, face detection and general image analysis. I implemented each stage of the pipeline.',
    tags: ['Python', 'OpenCV', 'Image Processing'],
    repoUrl: 'https://github.com/gopisha-gangadhar/smart-image-analysis',
  },
  {
    id: 'text-analysis-system',
    kind: 'software',
    title: 'Text Analysis System',
    subtitle: 'Extracting meaning from raw text',
    category: 'Data & NLP',
    poster: '/assets/thumbnails/project-3-1.jpg',
    description:
      'A text analysis project that processes written content to uncover patterns and insights. I handled the processing logic and the analysis workflow.',
    tags: ['Python', 'Text Analysis', 'Data Analytics'],
    repoUrl: 'https://github.com/gopisha-gangadhar/emlds-text-analysis',
  },
  {
    id: 'semantic-knowledge-graph',
    kind: 'software',
    title: 'Semantic Knowledge Graph',
    subtitle: 'Mapping relationships between concepts',
    category: 'Data & NLP',
    poster: '/assets/thumbnails/project-4-1.jpg',
    description:
      'A project exploring semantic relationships and structured knowledge representation. I modelled how concepts connect and presented them as a graph.',
    tags: ['Python', 'Knowledge Graph', 'Semantics'],
    repoUrl: 'https://github.com/gopisha-gangadhar/emlds-semantic-knowledge-graph',
  },
  {
    id: 'mohammed-zakir-portfolio',
    kind: 'software',
    title: 'Mohammed Zakir Portfolio',
    subtitle: 'Client website for a cinematographer',
    category: 'Web Development',
    poster: '/assets/thumbnails/project-5-1.jpg',
    description:
      'A responsive portfolio website built for a client, showcasing cinematography, video editing and visual storytelling. I designed and developed it with interactive elements throughout.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://nimble-lebkuchen-88e91c.netlify.app',
  },
  {
    id: 'personal-portfolio-website',
    kind: 'software',
    title: 'Personal Portfolio Website',
    subtitle: 'My own professional site',
    category: 'Web Development',
    poster: '/assets/thumbnails/project-6-1.jpg',
    description:
      'My professional portfolio, showcasing my background, projects, technical interests and services. I designed and built it end to end.',
    tags: ['React', 'UI Design', 'Responsive'],
    liveUrl: 'https://stirring-sorbet-b90667.netlify.app',
  },
];

/* ───────────── 8. SERVICES & PRICING ───────────── */
export const SERVICES_PRICING = [
  { id: 'service-1', title: 'Personal Portfolio Website', priceLabel: 'Starts from', price: '₹1,500', featured: true },
  { id: 'service-2', title: 'Business Portfolio Website', priceLabel: 'Starts from', price: '₹2,500', featured: false },
  { id: 'service-3', title: 'Landing Page Design', priceLabel: 'Starts from', price: '₹1,000', featured: false },
  { id: 'service-4', title: 'Website Redesign', priceLabel: 'Starts from', price: '₹1,500', featured: false },
  { id: 'service-5', title: 'Basic Website Customization', priceLabel: 'Starts from', price: '₹500', featured: false },
] as const;

/* ───────────── 9. HEADLINE NUMBERS (under hero) ───────────── */
export const CLIENT_STATS = [
  { id: 'stat-1', value: 5, suffix: '+', label: 'Projects Built' },
  { id: 'stat-2', value: 10, suffix: '+', label: 'Technologies Explored' },
  { id: 'stat-3', value: 5, suffix: '', label: 'Services Offered' },
] as const;

/* Derived – do not edit */
export const WHATSAPP_URL = `https://wa.me/${SITE.phone}?text=${encodeURIComponent(SITE.whatsappMessage)}`;