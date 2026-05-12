import {
  ArrowUpRight,
  BrainCircuit,
  Code2,
  Database,
  Github,
  Linkedin,
  Mail,
  PanelsTopLeft,
  Server,
  Sparkles,
  Workflow,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type Language = 'en' | 'th';

export type Project = {
  id: string;
  role: 'Fullstack Developer' | 'Frontend Developer';
  category: string;
  stack: string[];
  copy: Record<Language, { title: string; description: string; contribution: string }>;
};

export type SkillGroup = {
  icon: LucideIcon;
  title: Record<Language, string>;
  items: string[];
};

export const profile = {
  name: 'Sitthikorn Maneesut',
  thaiName: 'สิทธิกร มณีสุต',
  nickname: 'First',
  github: 'https://github.com/junichino',
  linkedin: 'https://www.linkedin.com/in/sitthikornmaneesut/',
  email: 'sitthikornjuni@gmail.com',
};

export const copy = {
  en: {
    nav: {
      about: 'About',
      work: 'Work',
      stack: 'Stack',
      exploring: 'Exploring',
      style: 'Style',
      contact: 'Contact',
    },
    hero: {
      role: 'Developer building practical software in the AI-assisted coding era.',
      body:
        'I contribute to web applications, stock management tools, and operational systems with a practical, learning-focused approach.',
      viewWork: 'View Work',
      email: 'Email',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      available: 'Open to product and SaaS-minded software work',
    },
    work: {
      title: 'Selected contributed work',
      body:
        'These projects are described at a high level only. The focus is contribution, role, and broad technology stack.',
      contribution: 'Contribution',
      stack: 'Stack',
    },
    about: {
      title: 'A practical developer, still learning in public.',
      body:
        'I am not trying to look like I know everything. I care more about learning steadily, building useful software, and using AI tools as a serious coding partner while still taking responsibility for the final result.',
      note:
        'This portfolio is a simple starting point: honest, practical, and ready to grow as I build more public work.',
    },
    stack: {
      title: 'Technology range',
      body:
        'Tools I have used or can work with using AI-assisted development. The goal is practical delivery, not claiming expert status in every tool.',
    },
    exploring: {
      title: 'Currently exploring',
      body:
        'I am studying how to work better with AI coding tools, especially Codex, Claude, and Gemini. The focus is not only asking AI to write code, but learning how to review, test, refactor, and turn AI output into maintainable software.',
      tools: ['Codex', 'Claude', 'Gemini'],
    },
    style: {
      title: 'Working style',
      items: [
        'Builds from real workflow needs, not decoration first.',
        'Comfortable learning through AI-assisted coding while still checking the output carefully.',
        'Keeps contributed client or company work confidential and high-level in public.',
      ],
    },
    contact: {
      title: 'Let us talk about practical software.',
      body:
        'Best fit: focused web applications, internal tools, dashboards, and early product/SaaS experiments.',
      email: 'Email for working contact',
    },
    visual: {
      label: 'Portfolio signal',
      lines: ['React / MUI', 'PHP / SQL Server', 'AI-assisted workflow', 'Product-minded delivery'],
    },
  },
  th: {
    nav: {
      about: 'เกี่ยวกับ',
      work: 'ผลงาน',
      stack: 'เทค',
      exploring: 'กำลังศึกษา',
      style: 'แนวทาง',
      contact: 'ติดต่อ',
    },
    hero: {
      role: 'Developer ที่สร้างซอฟต์แวร์ใช้งานจริงในยุค AI-assisted coding',
      body:
        'ผมมีส่วนร่วมกับเว็บแอป ระบบจัดการสต๊อก และระบบงานปฏิบัติการ โดยเน้นการเรียนรู้และการลงมือสร้างให้ใช้งานได้จริง',
      viewWork: 'ดูผลงาน',
      email: 'อีเมล',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      available: 'เปิดรับงานซอฟต์แวร์ที่ต่อยอดไปทาง product และ SaaS',
    },
    work: {
      title: 'ผลงานที่เคยมีส่วนร่วม',
      body:
        'โปรเจกต์เหล่านี้อธิบายในระดับ high-level เท่านั้น โดยเน้นบทบาทที่ทำและเทคโนโลยีหลักที่ใช้',
      contribution: 'บทบาท',
      stack: 'เทคโนโลยี',
    },
    about: {
      title: 'Developer ที่ยังเรียนรู้อย่างจริงใจ',
      body:
        'ผมไม่ได้อยากทำให้ตัวเองดูเหมือนรู้ทุกอย่าง สิ่งที่ให้ความสำคัญมากกว่าคือการเรียนรู้อย่างต่อเนื่อง สร้างซอฟต์แวร์ที่ใช้งานได้จริง และใช้ AI เป็นคู่คิดในการเขียนโค้ด โดยยังรับผิดชอบกับผลลัพธ์สุดท้ายด้วยตัวเอง',
      note:
        'Portfolio นี้จึงเป็นจุดเริ่มต้นที่เรียบง่าย ตรงไปตรงมา และพร้อมเติบโตไปพร้อมกับงาน public ที่จะเพิ่มขึ้นในอนาคต',
    },
    stack: {
      title: 'เทคโนโลยีที่ใช้ทำงาน',
      body:
        'เครื่องมือที่เคยใช้หรือสามารถทำงานร่วมกับ AI-assisted development ได้ เป้าหมายคือสร้างงานจริงอย่างมีระบบ ไม่ใช่การอ้างว่าเชี่ยวชาญทุกเครื่องมือ',
    },
    exploring: {
      title: 'สิ่งที่กำลังศึกษา',
      body:
        'ตอนนี้กำลังศึกษาวิธีทำงาน coding ร่วมกับ AI เช่น Codex, Claude และ Gemini โดยไม่ได้มองแค่ให้ AI เขียนโค้ดแทน แต่รวมถึงการ review, test, refactor และเปลี่ยน output ของ AI ให้เป็นซอฟต์แวร์ที่ดูแลต่อได้',
      tools: ['Codex', 'Claude', 'Gemini'],
    },
    style: {
      title: 'แนวทางการทำงาน',
      items: [
        'เริ่มจาก workflow จริงก่อน ไม่เริ่มจากการตกแต่งเพียงอย่างเดียว',
        'เรียนรู้ผ่าน AI-assisted coding ได้ แต่ยังตรวจสอบผลลัพธ์อย่างระมัดระวัง',
        'รักษารายละเอียดของงานลูกค้าและบริษัทไว้ในระดับที่เปิดเผยได้เท่านั้น',
      ],
    },
    contact: {
      title: 'คุยกันเรื่องซอฟต์แวร์ที่ใช้งานได้จริง',
      body:
        'เหมาะกับเว็บแอป เครื่องมือภายใน dashboard และการทดลอง product/SaaS ระยะเริ่มต้น',
      email: 'อีเมลสำหรับติดต่องาน',
    },
    visual: {
      label: 'สัญญาณของงาน',
      lines: ['React / MUI', 'PHP / SQL Server', 'AI-assisted workflow', 'Product-minded delivery'],
    },
  },
} as const;

export const projects: Project[] = [
  {
    id: 'traffic-sign-ops',
    role: 'Fullstack Developer',
    category: 'traffic-sign-management',
    stack: ['PHP', 'SQL Server', 'jQuery'],
    copy: {
      en: {
        title: 'Expressway traffic sign management system',
        description: 'Contributed to a traffic sign management system for operational use.',
        contribution: 'Contributed as Fullstack Developer',
      },
      th: {
        title: 'ระบบจัดการป้ายจราจรของการทางพิเศษ',
        description: 'มีส่วนร่วมกับระบบจัดการป้ายจราจรสำหรับงานปฏิบัติการ',
        contribution: 'มีส่วนร่วมในบทบาท Fullstack Developer',
      },
    },
  },
  {
    id: 'intelligent-led-sign',
    role: 'Fullstack Developer',
    category: 'led-sign-control',
    stack: ['PHP', 'SQL Server', 'jQuery'],
    copy: {
      en: {
        title: 'Plan B intelligent LED sign control system',
        description: 'Contributed to an intelligent LED sign control system at a high level.',
        contribution: 'Contributed as Fullstack Developer',
      },
      th: {
        title: 'ระบบควบคุมป้าย LED อัจฉริยะของ Plan B',
        description: 'มีส่วนร่วมกับระบบควบคุมป้าย LED อัจฉริยะในระดับ high-level',
        contribution: 'มีส่วนร่วมในบทบาท Fullstack Developer',
      },
    },
  },
  {
    id: 'stangs-stock-management',
    role: 'Frontend Developer',
    category: 'stock-management',
    stack: ['React', 'MUI'],
    copy: {
      en: {
        title: 'Stangs - Stocks Management',
        description: 'Worked on the frontend of a stock management system.',
        contribution: 'Contributed as Frontend Developer',
      },
      th: {
        title: 'Stangs - Stocks Management',
        description: 'มีส่วนร่วมด้าน frontend ของระบบจัดการสต๊อก',
        contribution: 'มีส่วนร่วมในบทบาท Frontend Developer',
      },
    },
  },
  {
    id: 'mass-super-app-stock-management',
    role: 'Frontend Developer',
    category: 'stock-management',
    stack: ['React', 'MUI'],
    copy: {
      en: {
        title: 'Mass Super App - Stocks Management',
        description: 'Worked on the frontend of a stock management module.',
        contribution: 'Contributed as Frontend Developer',
      },
      th: {
        title: 'Mass Super App - Stocks Management',
        description: 'มีส่วนร่วมด้าน frontend ของ module จัดการสต๊อก',
        contribution: 'มีส่วนร่วมในบทบาท Frontend Developer',
      },
    },
  },
];

export const skillGroups: SkillGroup[] = [
  { icon: PanelsTopLeft, title: { en: 'Frontend', th: 'Frontend' }, items: ['React', 'Angular', 'MUI', 'HTML', 'CSS'] },
  { icon: Server, title: { en: 'Backend', th: 'Backend' }, items: ['NodeJS', 'PHP', 'Python'] },
  { icon: Database, title: { en: 'Data', th: 'Data' }, items: ['SQL Server', 'Stock workflows'] },
  { icon: BrainCircuit, title: { en: 'AI workflow', th: 'AI workflow' }, items: ['AI-assisted coding', 'Review-first iteration'] },
];

export const links = [
  { icon: Github, label: 'GitHub', href: profile.github, event: 'github_click' as const },
  { icon: Linkedin, label: 'LinkedIn', href: profile.linkedin, event: 'linkedin_click' as const },
  { icon: Mail, label: 'Email', href: `mailto:${profile.email}`, event: 'contact_email_click' as const },
];

export const visualIcons = [Code2, Workflow, Sparkles, ArrowUpRight];
