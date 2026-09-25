// ─────────────────────────────────────────────────────────────
//  All site content lives here. Edit this file to update the site.
//  Fields shaped { en, he } are translated; everything else (roles,
//  skills, tech stack, company names) is shown in English in both languages.
// ─────────────────────────────────────────────────────────────

import type { Localized } from '../i18n';

export const profile = {
  name: 'Sapir Shahar',
  displayName: { en: 'Sapir Shahar', he: 'ספיר שחר' } as Localized,
  title: 'Full Stack Developer',
  location: 'Israel',
  // TODO: swap for a personal address if this one won't stay active
  email: 'sapir.s@info.cts.org.il',
  github: 'https://github.com/sapir0507',
  githubUser: 'sapir0507',
  linkedin: 'https://www.linkedin.com/in/sapir-shahar-43a941159/',
  // Optional: put a PDF in /public and set e.g. './Sapir_Shahar_CV.pdf'
  resumeUrl: '' as string,
  openToWork: true,
  roles: ['Full Stack Developer', 'React + TypeScript', '.NET & PostgreSQL', 'GIS-savvy engineer'],
  summary: {
    en: 'Full Stack Developer with 3.5+ years of experience building and maintaining production web applications end to end — from React/TypeScript frontends through .NET REST APIs to PostgreSQL data models — plus hands-on experience integrating geospatial (GIS) data and services.',
    he: 'Full Stack Developer עם יותר מ-3.5 שנות ניסיון בפיתוח ותחזוקה של אפליקציות Web בייצור מקצה לקצה — מצד לקוח ב-React/TypeScript, דרך REST APIs ב-.NET ועד מודלי נתונים ב-PostgreSQL — וכן ניסיון מעשי בשילוב נתונים ושירותים גיאו-מרחביים (GIS).',
  } as Localized,
  about: {
    en: [
      'I like owning features from the first ambiguous requirement all the way to production: designing the data model, writing the API, building the UI, and debugging it when something goes wrong in the wild.',
      'Most of my work has been on data-heavy systems — tabular data management, validation, synchronization, exports — often with a map somewhere in the picture. I’m comfortable moving between modern stacks and legacy code, and I care about secure development and clean, maintainable code.',
    ],
    he: [
      'מה שהכי מספק אותי הוא להוביל פיצ׳ר מהדרישה הראשונה ועד לייצור: תכנון מודל הנתונים, כתיבת ה-API, בניית הממשק — ודיבאג כשמשהו משתבש בשטח.',
      'רוב העבודה שלי הייתה על מערכות עתירות נתונים — ניהול נתונים טבלאיים, ולידציה, סנכרון וייצוא — ולא פעם עם מפה איפשהו בתמונה. מעבר בין סטאקים מודרניים לקוד legacy טבעי לי, ופיתוח מאובטח וקוד נקי ותחזוקתי חשובים לי.',
    ],
  } as Localized<string[]>,
};

export const stats: { value: string; label: Localized }[] = [
  { value: '3.5+', label: { en: 'years in production', he: 'שנים בייצור' } },
  { value: '3', label: { en: 'stacks: web, legacy, desktop', he: 'סביבות: Web, legacy, שולחן עבודה' } },
  { value: 'E2E', label: { en: 'feature ownership', he: 'אחריות מלאה על פיצ׳רים' } },
];

export const skills: { group: string; items: string[] }[] = [
  { group: 'Languages', items: ['C#', 'TypeScript', 'JavaScript', 'SQL', 'C', 'C++'] },
  { group: 'Frontend', items: ['React', 'Redux Toolkit', 'MUI', 'AngularJS', 'HTML', 'CSS / SCSS'] },
  { group: 'Backend & Data', items: ['.NET', 'ASP.NET Core', 'REST APIs', 'JWT Auth', 'Dapper', 'PostgreSQL', 'Oracle', 'JSON / JSONB'] },
  { group: 'GIS & Tools', items: ['ArcGIS JS API', 'ArcGIS Pro SDK', 'MVVM', 'Git', 'Checkmarx', 'IIS'] },
];

export const experience: {
  role: string;
  company: Localized;
  period: Localized;
  intro: Localized;
  points: Localized<string[]>;
}[] = [
  {
    role: 'Full Stack Developer',
    company: { en: 'Kapow Solutions', he: 'Kapow Solutions' },
    period: { en: 'Jan 2023 — Sep 2026', he: 'ינו׳ 2023 — ספט׳ 2026' },
    intro: {
      en: 'Developed and maintained production systems across modern full-stack, legacy web, and desktop GIS environments.',
      he: 'פיתוח ותחזוקה של מערכות ייצור בסביבות full-stack מודרניות, Web legacy ו-GIS לשולחן העבודה.',
    },
    points: {
      en: [
        'Built a full-stack data-management system (React, TypeScript, .NET, PostgreSQL): tabular CRUD, validation, REST APIs, JWT authentication & authorization, Excel exports, metadata downloads, and database synchronization workflows.',
        'Delivered new features for a production mapping web platform (AngularJS, JavaScript), integrating a GIS JavaScript API, multiple external data services, coordinate systems, and data export/processing workflows.',
        'Took technical ownership of a desktop C#/.NET application (ArcGIS Pro SDK, MVVM) after the initial scaffold, driving design and implementation decisions for subsequent features.',
        'Worked to static-analysis and secure-development requirements (Checkmarx), addressing findings during development.',
      ],
      he: [
        'בניתי מערכת full-stack לניהול נתונים (React, TypeScript, .NET, PostgreSQL): CRUD טבלאי, ולידציה, REST APIs, אימות והרשאות עם JWT, ייצוא ל-Excel, הורדת מטא-דאטה ותהליכי סנכרון מסד נתונים.',
        'פיתחתי פיצ׳רים חדשים לפלטפורמת מיפוי Web בייצור (AngularJS, JavaScript), כולל שילוב GIS JavaScript API, שירותי נתונים חיצוניים, מערכות קואורדינטות ותהליכי ייצוא ועיבוד נתונים.',
        'לקחתי אחריות טכנית על אפליקציית שולחן עבודה ב-C#/.NET (ArcGIS Pro SDK, MVVM) לאחר שלב השלד הראשוני, והובלתי החלטות תכנון ומימוש לפיצ׳רים הבאים.',
        'עבדתי בהתאם לדרישות ניתוח סטטי ופיתוח מאובטח (Checkmarx), וטיפלתי בממצאים במהלך הפיתוח.',
      ],
    },
  },
  {
    role: 'Cyber Security Consultant',
    company: { en: 'Komodosec', he: 'Komodosec' },
    period: { en: '', he: '' },
    intro: { en: '', he: '' },
    points: { en: [], he: [] },
  },
  {
    role: 'Assistant Instructor',
    company: { en: 'Holon Institute of Technology (HIT)', he: 'מכון טכנולוגי חולון (HIT)' },
    period: { en: '', he: '' },
    intro: {
      en: 'C Programming and Introduction to Computer Systems.',
      he: 'תרגול בקורסים תכנות בשפת C ומבוא למערכות מחשב.',
    },
    points: { en: [], he: [] },
  },
];

export const featured: { name: string; tag: string; description: Localized; stack: string[] }[] = [
  {
    name: 'Data Management Platform',
    tag: 'Full stack',
    description: {
      en: 'End-to-end system for managing large tabular datasets: CRUD with validation, role-based access via JWT, Excel exports, metadata downloads and DB sync workflows.',
      he: 'מערכת מקצה לקצה לניהול מאגרי נתונים טבלאיים גדולים: CRUD עם ולידציה, הרשאות מבוססות תפקידים עם JWT, ייצוא ל-Excel, הורדת מטא-דאטה ותהליכי סנכרון DB.',
    },
    stack: ['React', 'TypeScript', 'Redux Toolkit', '.NET', 'PostgreSQL', 'Dapper'],
  },
  {
    name: 'Web Mapping Platform',
    tag: 'Frontend · GIS',
    description: {
      en: 'Feature work on a production map-centric web app — external data-service integration, coordinate-system handling and data export/processing pipelines.',
      he: 'פיתוח פיצ׳רים לאפליקציית Web מבוססת מפה בייצור — שילוב שירותי נתונים חיצוניים, טיפול במערכות קואורדינטות ותהליכי ייצוא ועיבוד נתונים.',
    },
    stack: ['AngularJS', 'JavaScript', 'ArcGIS JS API'],
  },
  {
    name: 'ArcGIS Pro Toolbars',
    tag: 'Desktop · .NET',
    description: {
      en: 'Desktop add-in for ArcGIS Pro. Owned architecture and implementation decisions after the initial scaffold, using the MVVM pattern.',
      he: 'תוסף שולחן עבודה ל-ArcGIS Pro. הובלתי את החלטות הארכיטקטורה והמימוש לאחר שלב השלד הראשוני, בתבנית MVVM.',
    },
    stack: ['C#', '.NET', 'ArcGIS Pro SDK', 'MVVM'],
  },
];

export const education: { degree: Localized; school: Localized; year: string } = {
  degree: { en: 'B.Sc. in Computer Science', he: 'תואר ראשון (B.Sc) במדעי המחשב' },
  school: { en: 'Holon Institute of Technology (HIT)', he: 'מכון טכנולוגי חולון (HIT)' },
  year: '2020',
};

// Repos to hide from the live GitHub section (by name)
export const hiddenRepos: string[] = [];
