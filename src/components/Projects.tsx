import React from 'react';
import { projects } from '@/lib/data';
import ProjectCard from './ProjectCard';
import { Card, CardContent } from './ui/card';

const Projects = () => {
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="page-section bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-block bg-persian-blue/10 text-persian-blue px-4 py-2 rounded-full mb-4">
            <span className="font-vazir">نمونه کارها</span>
          </div>
          <h2 className="text-4xl font-bold text-persian-navy mb-4 font-vazir">
            پروژه‌های اخیر
          </h2>
          <p className="text-persian-gray/80 max-w-2xl mx-auto font-vazir">
            نمونه‌ای از پروژه‌های اخیر من که نشان‌دهنده مهارت‌ها و تجربیات من در زمینه توسعه وب است.
          </p>
        </div>

        <div className="mb-20 text-right">
          <h3 className="text-2xl font-bold text-persian-navy mb-10 font-vazir text-right">
            پروژه‌های ویژه
          </h3>
          <div className="grid grid-cols-1 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>

        {otherProjects.length > 0 && (
          <div className="text-right">
            <h3 className="text-2xl font-bold text-persian-navy mb-10 font-vazir text-right">
              سایر پروژه‌ها
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {otherProjects.map((project, index) => (
                <div 
                  key={project.id}
                  className="glass-card rounded-xl overflow-hidden transition-all duration-500 hover:shadow-lg animate-on-scroll"
                  style={{ 
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
                    />
                  </div>
                  
                  <div className="p-6 text-right">
                    <h4 className="text-xl font-bold text-persian-navy mb-2 font-vazir">{project.title}</h4>
                    <p className="text-persian-gray/80 mb-4 text-sm font-vazir text-right line-clamp-2">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap justify-end mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="tech-tag font-vazir text-xs">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="tech-tag font-vazir text-xs">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex justify-end gap-3">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-persian-blue hover:text-persian-blue/80 text-sm font-vazir"
                      >
                        کد منبع
                      </a>
                      <a 
                        href={project.liveDemo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-persian-navy hover:text-persian-navy/80 text-sm font-vazir"
                      >
                        نمایش
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
