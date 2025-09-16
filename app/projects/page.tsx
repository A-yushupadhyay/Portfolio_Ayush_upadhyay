"use client";

import { useState, useMemo } from "react";

import { PageHeader } from "@/components/page-header";
import { ProjectsTabs } from "@/components/projects/projects-tabs";
import { ProjectsGrid } from "@/components/projects/projects-grid";
import { DATA } from "@/data";

const ProjectsPage = () => {
  const allProjects = DATA.projects.work;

  const categories = useMemo(
    () => ["All", ...new Set(allProjects.map((project) => project.category))],
    [allProjects],
  );

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = useMemo(
    () =>
      selectedCategory === "All"
        ? allProjects
        : allProjects.filter(
            (project) => project.category === selectedCategory,
          ),
    [selectedCategory, allProjects],
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <PageHeader texts={DATA.morphingTexts.projects} />

      <ProjectsTabs
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <ProjectsGrid projects={filteredProjects} />
    </div>
  );
};

export default ProjectsPage;
