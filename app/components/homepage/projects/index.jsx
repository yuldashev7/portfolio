'use client';

import { projectsData } from '@/utils/data/projects-data';
import { useI18n } from '@/providers/language-provider';
import ProjectCard from './project-card';

const Projects = () => {
  const { dictionary } = useI18n();
  const localizedProjects = dictionary.projects.items;

  return (
    <div id="projects" className="relative z-50 my-12 lg:my-24">
      <div className="sticky top-10">
        <div className="w-20 h-20 bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <span className="bg-[#1a1443] absolute left-0 w-fit text-white px-5 py-3 text-xl rounded-md">
            {dictionary.projects.title}
          </span>
          <span className="w-full h-0.5 bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="pt-24">
        <div className="flex flex-col gap-6">
          {projectsData.slice(0, 4).map((project, index) => (
            <div
              id={`sticky-card-${index + 1}`}
              key={index}
              className="sticky-card w-full mx-auto max-w-2xl sticky"
            >
              <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-500">
                <ProjectCard
                  project={project}
                  translation={localizedProjects.find(
                    (item) => item.id === project.id
                  )}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
