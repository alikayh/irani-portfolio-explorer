
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
    title: "کسب و کار هوشمند",
    description: "پلتفرم هوش مصنوعی برای کسب و کارها که با استفاده از الگوریتم‌های پیشرفته، به تحلیل داده‌ها، بهینه‌سازی فرآیندها و پیش‌بینی روندهای بازار می‌پردازد.",
    image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=2670&auto=format&fit=crop",
    liveDemo: "https://kayhgng-business-ai.vercel.app",
    github: "https://github.com/kayhgng/kayhgng-business-ai",
    technologies: ["React", "Next.js", "TypeScript", "OpenAI API", "Tailwind CSS", "Vercel"],
    featured: true
  },
  {
    id: 2,
    title: "گلس کلوور",
    description: "یک رابط کاربری مدرن با طراحی گلس مورفیسم که تجربه کاربری زیبا و منحصر به فردی را ارائه می‌دهد. با استفاده از افکت‌های شیشه‌ای و انیمیشن‌های روان.",
    image: "https://images.unsplash.com/photo-1550399504-8953e1a6ac87?q=80&w=2574&auto=format&fit=crop",
    liveDemo: "https://glass-clover.vercel.app",
    github: "https://github.com/kayhgng/glass-clover",
    technologies: ["React", "CSS3", "SCSS", "Framer Motion", "Glass Morphism"],
    featured: true
  },
  {
    id: 3,
    title: "کدنویس پایتون",
    description: "ابزار هوشمند برای تولید و بهینه‌سازی کد پایتون با استفاده از هوش مصنوعی. این ابزار به توسعه‌دهندگان کمک می‌کند تا کدهای پیچیده را سریع‌تر و با کیفیت بالاتر تولید کنند.",
    image: "https://images.unsplash.com/photo-1649180556628-9ba704115795?q=80&w=2662&auto=format&fit=crop",
    liveDemo: "https://kayhgng-python-coder.vercel.app",
    github: "https://github.com/kayhgng/kayhgng-python-coder",
    technologies: ["Python", "FastAPI", "React", "TypeScript", "AI Models", "Code Generation"],
    featured: true
  },
  {
    id: 4,
    title: "استریم آنلاین ویدیو",
    description: "پلتفرم استریم ویدیوهای یوتیوب به صورت آنلاین با قابلیت جستجو، دسته‌بندی و پخش محتوا. این پروژه امکان تماشای ویدیوها بدون محدودیت را فراهم می‌کند.",
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=2674&auto=format&fit=crop",
    liveDemo: "https://youtube-video-stream-online.vercel.app",
    github: "https://github.com/kayhgng/youtube_video_stream_online",
    technologies: ["JavaScript", "YouTube API", "Node.js", "Express", "HTML5 Video", "Streaming"],
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
