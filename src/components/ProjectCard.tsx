
import React, { useState } from 'react';
import { Project } from '@/lib/data';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <div 
      className={cn(
        "glass-card relative rounded-xl overflow-hidden transition-all duration-500 mb-16",
        isHovered ? "transform scale-[1.02] shadow-xl" : "shadow-md",
        "animate-on-scroll"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        transitionDelay: `${index * 100}ms`,
      }}
    >
      <div className={cn(
        "flex flex-col lg:flex-row",
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      )}>
        <div className="relative h-64 lg:h-auto lg:w-1/2 overflow-hidden">
          <div className={cn(
            "absolute inset-0 bg-persian-navy/40 opacity-0 transition-opacity duration-300 z-10",
            isHovered && "opacity-100"
          )} />
          <img
            src={project.image}
            alt={project.title}
            className={cn(
              "w-full h-full object-cover transition-all duration-700",
              isHovered && "transform scale-110"
            )}
          />
          {project.featured && (
            <div className="absolute top-4 right-4 bg-persian-gold text-white px-3 py-1 text-sm rounded-full font-medium z-20">
              ویژه
            </div>
          )}
        </div>
        
        <div className="p-6 lg:p-8 lg:w-1/2 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold text-persian-navy mb-3 font-vazir">{project.title}</h3>
            <p className="text-persian-gray/80 mb-4 font-vazir leading-relaxed text-right">
              {project.description}
            </p>
            <div className="flex flex-wrap justify-end mb-6">
              {project.technologies.map((tech) => (
                <span key={tech} className="tech-tag font-vazir">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex justify-end gap-3">
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link bg-persian-blue/10 text-persian-blue hover:bg-persian-blue/20"
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={18} />
              <span className="font-vazir">کد منبع</span>
            </a>
            <a 
              href={project.liveDemo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link bg-persian-navy text-white hover:bg-persian-navy/90"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={18} />
              <span className="font-vazir">نمایش پروژه</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Persian pattern border */}
      <div className="absolute inset-0 persian-border-pattern opacity-40"></div>
    </div>
  );
};

export default ProjectCard;
