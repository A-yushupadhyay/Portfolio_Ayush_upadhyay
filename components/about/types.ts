export interface ProfileCardProps {
  image: string;
  name: string;
  title: string;
  description: readonly string[];
}

export interface SectionHeaderProps {
  icon: string;
  title: string;
  className?: string;
}

export interface TimelineItemProps {
  title: string;
  date: string;
  description: string;
  variants?: any;
  delay?: number;
}

export interface EducationItem {
  readonly title: string;
  readonly date: string;
  readonly description: string;
  readonly icon?: string;
}

export interface ExperienceItem extends EducationItem {}

export interface TechItem {
  readonly name: string;
  readonly icon: string;
}

export interface TechCategory {
  readonly description: string;
  readonly tools: readonly TechItem[];
}

export type EducationItems = readonly EducationItem[];
export type ExperienceItems = readonly ExperienceItem[];
export type TechCategories = Readonly<Record<string, TechCategory>>;
