import { Tabs, Tab } from "@heroui/react";

import { ProjectsTabsProps } from "@/components/projects/types";

export const ProjectsTabs = ({
  categories,
  selectedCategory,
  onSelectCategory,
}: ProjectsTabsProps) => (
  <div className="overflow-x-auto w-full mb-8">
    <Tabs
      aria-label="Project Categories"
      className="flex w-max min-w-full justify-start md:justify-center mb-4 "
      selectedKey={selectedCategory}
      variant="underlined"
      onSelectionChange={(key) => onSelectCategory(String(key))}
    >
      {categories.map((category) => (
        <Tab key={category} className="sm:text-base" title={category} />
      ))}
    </Tabs>
  </div>
);
