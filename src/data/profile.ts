// ─────────────────────────────────────────────────────────────
//  All site content lives here. Edit this file to update the site.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Sapir Shahar',
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
  summary:
    'Full Stack Developer with 3.5+ years of experience building and maintaining production web applications end to end — from React/TypeScript frontends through .NET REST APIs to PostgreSQL data models — plus hands-on experience integrating geospatial (GIS) data and services.',
  about: [
    'I like owning features from the first ambiguous requirement all the way to production: designing the data model, writing the API, building the UI, and debugging it when something goes wrong in the wild.',
    'Most of my work has been on data-heavy systems — tabular data management, validation, synchronization, exports — often with a map somewhere in the picture. I’m comfortable moving between modern stacks and legacy code, and I care about secure development and clean, maintainable code.',
  ],
};

export const stats = [
  { value: '3.5+', label: 'years in production' },
  { value: '3', label: 'stacks: web, legacy, desktop' },
  { value: 'E2E', label: 'feature ownership' },
];

export const skills: { group: string; items: string[] }[] = [
  { group: 'Languages', items: ['C#', 'TypeScript', 'JavaScript', 'SQL', 'C', 'C++'] },
  { group: 'Frontend', items: ['React', 'Redux Toolkit', 'MUI', 'AngularJS', 'HTML', 'CSS / SCSS'] },
  { group: 'Backend & Data', items: ['.NET', 'ASP.NET Core', 'REST APIs', 'JWT Auth', 'Dapper', 'PostgreSQL', 'Oracle', 'SQL', 'JSON / JSONB'] },
  { group: 'GIS & Tools', items: ['ArcGIS JS API', 'ArcGIS Pro SDK', 'MVVM', 'Git', 'Checkmarx', 'IIS'] },
];

export const experience = [
  {
    role: 'Full Stack Developer',
    company: 'Kapow Solutions',
    period: 'Jan 2023 — Sep 2026',
    intro: 'Developed and maintained production systems across modern full-stack, legacy web, and desktop GIS environments.',
    points: [
      'Built a full-stack data-management system (React, TypeScript, .NET, PostgreSQL): tabular CRUD, validation, REST APIs, JWT authentication & authorization, Excel exports, metadata downloads, and database synchronization workflows.',
      'Delivered new features for a production mapping web platform (AngularJS, JavaScript), integrating a GIS JavaScript API, multiple external data services, coordinate systems, and data export/processing workflows.',
      'Took technical ownership of a desktop C#/.NET application (ArcGIS Pro SDK, MVVM) after the initial scaffold, driving design and implementation decisions for subsequent features.',
      'Worked to static-analysis and secure-development requirements (Checkmarx), addressing findings during development.',
    ],
  },
  {
    role: 'Cyber Security Consultant',
    company: 'Komodosec',
    period: '',
    intro: '',
    points: [],
  },
  {
    role: 'Assistant Instructor',
    company: 'Holon Institute of Technology (HIT)',
    period: '',
    intro: 'C Programming and Introduction to Computer Systems.',
    points: [],
  },
];

export const featured = [
  {
    name: 'Data Management Platform',
    tag: 'Full stack',
    description:
      'End-to-end system for managing large tabular datasets: CRUD with validation, role-based access via JWT, Excel exports, metadata downloads and DB sync workflows.',
    stack: ['React', 'TypeScript', 'Redux Toolkit', '.NET', 'PostgreSQL', 'Dapper'],
  },
  {
    name: 'Web Mapping Platform',
    tag: 'Frontend · GIS',
    description:
      'Feature work on a production map-centric web app — external data-service integration, coordinate-system handling and data export/processing pipelines.',
    stack: ['AngularJS', 'JavaScript', 'ArcGIS JS API'],
  },
  {
    name: 'ArcGIS Pro Toolbars',
    tag: 'Desktop · .NET',
    description:
      'Desktop add-in for ArcGIS Pro. Owned architecture and implementation decisions after the initial scaffold, using the MVVM pattern.',
    stack: ['C#', '.NET', 'ArcGIS Pro SDK', 'MVVM'],
  },
];

export const education = {
  degree: 'B.Sc. in Computer Science',
  school: 'Holon Institute of Technology (HIT)',
  year: '2020',
};

// Repos to hide from the live GitHub section (by name)
export const hiddenRepos: string[] = [];
