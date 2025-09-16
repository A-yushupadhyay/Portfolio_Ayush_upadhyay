import { useState, useEffect, useCallback } from "react";

import { ProjectCard } from "@/components/project-card";
import { ProjectModal } from "@/components/project-modal";
import { MotionEffect } from "@/components/motion-effect";
import { ProjectsGridProps, Project } from "@/components/projects/types";

export const ProjectsGrid = ({
  projects,
  className = "",
}: ProjectsGridProps) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [animationKey, setAnimationKey] = useState(0);

  const handleOpenModal = useCallback(
    (project: Project) => setSelectedProject(project),
    [],
  );
  const handleCloseModal = useCallback(() => setSelectedProject(null), []);

  useEffect(() => {
    setAnimationKey((prevKey) => prevKey + 1);
  }, [projects]);

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}
    >
      {projects.map((project, index) => (
        <MotionEffect
          key={`${project.id}-${animationKey}`}
          fade
          inView
          zoom
          className="w-full md:max-w-none"
          delay={0.1 + index * 0.1}
          resetKey={animationKey}
          slide={{ direction: "down" }}
        >
          <ProjectCard
            project={project}
            onViewDetails={() => handleOpenModal(project)}
          />
        </MotionEffect>
      ))}
      <ProjectModal
        isOpen={!!selectedProject}
        project={selectedProject}
        onClose={handleCloseModal}
      />
    </div>
  );
};
