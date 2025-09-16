"use client";

import { Icon } from "@iconify/react";

import { SectionHeaderProps } from "@/components/about/types";

export const SectionHeader = ({
  icon,
  title,
  className = "",
}: SectionHeaderProps) => (
  <div className={`flex items-center gap-3 mb-6 ${className}`}>
    <div className="bg-primary-100 text-primary-500 p-2 rounded-full">
      <Icon className="text-xl" icon={icon} />
    </div>
    <h2 className="text-2xl font-bold text-primary-500">{title}</h2>
  </div>
);