import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

export type Lang = 'en' | 'he';

/** A value that differs per language. */
export type Localized<T = string> = Record<Lang, T>;

const STORAGE_KEY = 'lang';

const ui = {
  en: {
    docTitle: 'Sapir Shahar — Full Stack Developer',
    skip: 'Skip to content',
    backToTop: 'Back to top',
    menu: 'Menu',
    resume: 'résumé',
    switchLang: 'עברית',
    switchLangLabel: 'Switch to Hebrew',
    nav: { about: 'about', skills: 'skills', experience: 'experience', projects: 'projects', contact: 'contact' },
    openToWork: 'Open to new opportunities',
    greeting: 'Hi, my name is',
    getInTouch: 'Get in touch',
    seeWork: 'See my work',
    aboutTitle: 'About me',
    skillsTitle: 'Tech stack',
    experienceTitle: 'Experience',
    projectsTitle: "Things I've built",
    projectsLead:
      'Highlights from production work. Client code is private, so these describe the systems rather than link to them.',
    fetchingRepos: 'fetching repositories…',
    reposFailed: 'Couldn’t load repositories right now —',
    reposFailedLink: 'browse them on GitHub',
    reposEmpty: 'Public repositories coming soon.',
    noDescription: 'No description yet.',
    viewAllGithub: 'View all on GitHub',
    contactTitle: 'Get in touch',
    contactLead: (
      <>
        I’m currently looking for my next <strong>Full Stack</strong> role. Whether you have a position in mind or
        just want to talk shop, my inbox is open.
      </>
    ),
    sayHello: 'Say hello',
    copyEmail: 'Copy email',
    copied: '✓ Copied!',
    builtWith: 'Built with React + TypeScript + Vite',
  },
  he: {
    docTitle: 'ספיר שחר — Full Stack Developer',
    skip: 'דלג לתוכן',
    backToTop: 'חזרה למעלה',
    menu: 'תפריט',
    resume: 'קורות חיים',
    switchLang: 'English',
    switchLangLabel: 'Switch to English',
    nav: { about: 'אודות', skills: 'כישורים', experience: 'ניסיון', projects: 'פרויקטים', contact: 'צור קשר' },
    openToWork: 'בחיפוש אחר הזדמנויות חדשות',
    greeting: 'היי, קוראים לי',
    getInTouch: 'צרו קשר',
    seeWork: 'לעבודות שלי',
    aboutTitle: 'קצת עליי',
    skillsTitle: 'טכנולוגיות',
    experienceTitle: 'ניסיון',
    projectsTitle: 'מה בניתי',
    projectsLead: 'דגשים מעבודה בסביבת ייצור. הקוד שייך ללקוחות ואינו ציבורי, ולכן כאן מתוארות המערכות ללא קישור אליהן.',
    fetchingRepos: 'טוען מאגרים…',
    reposFailed: 'לא ניתן לטעון את המאגרים כרגע —',
    reposFailedLink: 'אפשר לצפות בהם ב-GitHub',
    reposEmpty: 'מאגרים ציבוריים יעלו בקרוב.',
    noDescription: 'אין תיאור עדיין.',
    viewAllGithub: 'לכל המאגרים ב-GitHub',
    contactTitle: 'צרו קשר',
    contactLead: (
      <>
        כרגע בחיפוש אחר תפקיד ה-<strong>Full Stack</strong> הבא שלי. אם יש לכם משרה בראש או שסתם בא לכם לדבר
        על טכנולוגיה — תיבת הדואר שלי פתוחה.
      </>
    ),
    sayHello: 'שלחו מייל',
    copyEmail: 'העתקת כתובת',
    copied: '✓ הועתק!',
    builtWith: 'נבנה עם React + TypeScript + Vite',
  },
} satisfies Localized<Record<string, unknown>>;

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (typeof ui)['en'];
  /** Picks the current language's value. */
  tr: <T,>(value: Localized<T>) => T;
  /** Like `tr` for prose: in Hebrew, English fragments are isolated so the RTL text doesn't scramble them. */
  tx: (value: Localized) => ReactNode;
};

// A run of English: starts with a letter/digit (or `.NET`-style dot) and ends with a letter/digit/`#`/`+`.
const LATIN_RUN = /(\.?[A-Za-z0-9](?:[A-Za-z0-9#+.,/&\- ]*[A-Za-z0-9#+])?)/;

function isolateLatin(text: string): ReactNode {
  return text.split(LATIN_RUN).map((part, i) => (i % 2 ? <bdi key={i} dir="ltr">{part}</bdi> : part));
}

const LangContext = createContext<Ctx | null>(null);

function initialLang(): Lang {
  const fromUrl = new URLSearchParams(window.location.search).get('lang');
  if (fromUrl === 'en' || fromUrl === 'he') return fromUrl;
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'en' || saved === 'he') return saved;
  } catch {
    /* storage unavailable */
  }
  return 'en';
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(initialLang);

  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = lang === 'he' ? 'rtl' : 'ltr';
    document.title = ui[lang].docTitle;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* storage unavailable */
    }
  }, [lang]);

  const value: Ctx = {
    lang,
    setLang,
    t: ui[lang],
    tr: (v) => v[lang],
    tx: (v) => (lang === 'he' ? isolateLatin(v.he) : v.en),
  };
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used inside <LangProvider>');
  return ctx;
}
