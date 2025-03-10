
import React, { useState } from 'react';
import { skills } from '@/lib/data';
import { cn } from '@/lib/utils';

type SkillCategory = 'all' | 'frontend' | 'backend' | 'tools' | 'other';

const categoryLabels: Record<SkillCategory, string> = {
  all: 'همه',
  frontend: 'فرانت‌اند',
  backend: 'بک‌اند',
  tools: 'ابزارها',
  other: 'سایر'
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('all');

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="page-section">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-block bg-persian-blue/10 text-persian-blue px-4 py-2 rounded-full mb-4">
            <span className="font-vazir">مهارت‌ها</span>
          </div>
          <h2 className="text-4xl font-bold text-persian-navy mb-4 font-vazir">
            تخصص‌های من
          </h2>
          <p className="text-persian-gray/80 max-w-2xl mx-auto font-vazir">
            مهارت‌ها و توانایی‌های من در زمینه توسعه نرم‌افزار و طراحی وب.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-on-scroll">
          {(Object.keys(categoryLabels) as SkillCategory[]).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full font-vazir transition-all duration-300",
                activeCategory === category 
                  ? "bg-persian-navy text-white shadow-md" 
                  : "bg-persian-navy/10 text-persian-navy hover:bg-persian-navy/20"
              )}
            >
              {categoryLabels[category]}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div 
              key={skill.name}
              className="glass-card rounded-lg p-6 animate-on-scroll"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-persian-navy">{skill.name}</h3>
                <span className="text-sm font-medium bg-persian-blue/10 text-persian-blue px-2 py-1 rounded-full">
                  {skill.level}%
                </span>
              </div>
              
              <div className="h-2 bg-persian-blue/10 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-persian-blue to-persian-turquoise rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%`, transitionDelay: `${(index * 50) + 300}ms` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-on-scroll">
          <div className="glass-card rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-persian-blue mb-2">+5</div>
            <div className="text-persian-gray font-vazir">سال‌های تجربه</div>
          </div>
          <div className="glass-card rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-persian-blue mb-2">+30</div>
            <div className="text-persian-gray font-vazir">پروژه‌های موفق</div>
          </div>
          <div className="glass-card rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-persian-blue mb-2">+15</div>
            <div className="text-persian-gray font-vazir">مشتریان راضی</div>
          </div>
          <div className="glass-card rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-persian-blue mb-2">+500</div>
            <div className="text-persian-gray font-vazir">ساعت آموزش</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
