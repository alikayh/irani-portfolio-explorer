
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  liveDemo: string;
  github: string;
  technologies: string[];
  featured: boolean;
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools' | 'other';
}

export const projects: Project[] = [
  {
    id: 1,
    title: "فروشگاه دیجیتال",
    description: "یک فروشگاه آنلاین کامل با سبد خرید، پردازش پرداخت و پنل مدیریت. این پروژه با استفاده از React در فرانت‌اند و Node.js در بک‌اند ساخته شده است.",
    image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?q=80&w=2670&auto=format&fit=crop",
    liveDemo: "https://example.com/shop",
    github: "https://github.com/username/digital-shop",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Redux", "Tailwind CSS"],
    featured: true
  },
  {
    id: 2,
    title: "اپلیکیشن مدیریت وظایف",
    description: "اپلیکیشن مدیریت وظایف با قابلیت دسته‌بندی، اعلان‌ها و رابط کاربری زیبا. این پروژه با استفاده از Vue.js و Firebase ساخته شده است.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=2669&auto=format&fit=crop",
    liveDemo: "https://example.com/tasks",
    github: "https://github.com/username/task-manager",
    technologies: ["Vue.js", "Firebase", "Vuex", "Tailwind CSS"],
    featured: true
  },
  {
    id: 3,
    title: "پنل داشبورد آماری",
    description: "یک داشبورد آماری با نمودارها و گراف‌های تعاملی برای تجسم داده‌ها. با استفاده از D3.js و React ساخته شده است.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
    liveDemo: "https://example.com/dashboard",
    github: "https://github.com/username/analytics-dashboard",
    technologies: ["React", "D3.js", "TypeScript", "Material UI"],
    featured: false
  },
  {
    id: 4,
    title: "اپلیکیشن چت آنلاین",
    description: "یک اپلیکیشن چت آنلاین با قابلیت ارسال پیام‌های متنی، تصویری و صوتی. با استفاده از Socket.io و React ساخته شده است.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2674&auto=format&fit=crop",
    liveDemo: "https://example.com/chat",
    github: "https://github.com/username/chat-app",
    technologies: ["React", "Socket.io", "Node.js", "Express", "MongoDB"],
    featured: true
  },
  {
    id: 5,
    title: "وبسایت شخصی",
    description: "یک وبسایت شخصی برای نمایش نمونه کارها و تجربیات. با استفاده از Gatsby و GraphQL ساخته شده است.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2655&auto=format&fit=crop",
    liveDemo: "https://example.com/portfolio",
    github: "https://github.com/username/portfolio",
    technologies: ["Gatsby", "GraphQL", "SCSS", "Framer Motion"],
    featured: false
  },
  {
    id: 6,
    title: "اپلیکیشن هواشناسی",
    description: "یک اپلیکیشن هواشناسی با قابلیت نمایش وضعیت آب و هوا در مکان‌های مختلف. با استفاده از React و Weather API ساخته شده است.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=2670&auto=format&fit=crop",
    liveDemo: "https://example.com/weather",
    github: "https://github.com/username/weather-app",
    technologies: ["React", "Weather API", "Axios", "Styled Components"],
    featured: false
  }
];

export const skills: Skill[] = [
  { name: "HTML/CSS", level: 90, category: "frontend" },
  { name: "JavaScript", level: 85, category: "frontend" },
  { name: "TypeScript", level: 80, category: "frontend" },
  { name: "React", level: 88, category: "frontend" },
  { name: "Vue.js", level: 75, category: "frontend" },
  { name: "Angular", level: 70, category: "frontend" },
  { name: "Tailwind CSS", level: 85, category: "frontend" },
  { name: "Node.js", level: 82, category: "backend" },
  { name: "Express", level: 80, category: "backend" },
  { name: "MongoDB", level: 78, category: "backend" },
  { name: "SQL", level: 75, category: "backend" },
  { name: "Firebase", level: 72, category: "backend" },
  { name: "REST API", level: 85, category: "backend" },
  { name: "GraphQL", level: 70, category: "backend" },
  { name: "Git/GitHub", level: 88, category: "tools" },
  { name: "Docker", level: 65, category: "tools" },
  { name: "AWS", level: 60, category: "tools" },
  { name: "Figma", level: 75, category: "tools" },
  { name: "Testing", level: 72, category: "other" },
  { name: "SEO", level: 65, category: "other" },
  { name: "Performance Optimization", level: 78, category: "other" }
];
