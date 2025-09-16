export interface Project {
  readonly id: number | string;
  readonly title: string;
  readonly category: string;
  readonly description: string;
  readonly details: string;
  readonly image: string;
  readonly github?: string;
  readonly live?: string;
  readonly gallery: readonly string[];
  tech: readonly {
    name: string;
    icon: string;
  }[];
}

export interface ProjectsTabsProps {
  categories: readonly string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  className?: string;
}

export interface ProjectsGridProps {
  projects: readonly Project[];
  className?: string;
}

export interface ProjectCardProps {
  project: Project;
  index?: number;
  onViewDetails?: () => void;
}

export interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}
