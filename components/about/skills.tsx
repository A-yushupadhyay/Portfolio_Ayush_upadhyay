"use client";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { Accordion, AccordionItem } from "@heroui/react";

import { OrbitingCircles } from "@/components/orbiting-circles";
import { SectionHeader } from "@/components/about/section-header";
import { capitalize } from "@/lib/utils";
import { TechCategories } from "@/components/about/types";

interface SkillsProps {
  tech: TechCategories;
}

export const Skills = ({ tech }: SkillsProps) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    whileInView={{ opacity: 1, y: 0 }}
  >
    <SectionHeader icon="mdi:tools" title="Skills" />

    <Accordion selectionMode="multiple" variant="bordered">
      {Object.entries(tech).map(([category, { description, tools }]) => (
        <AccordionItem
          key={category}
          aria-label={category}
          title={capitalize(category)}
        >
          <p className="mb-4 text-sm text-muted-foreground">{description}</p>

          <div className="relative h-[300px] w-full">
            <OrbitingCircles
              className="h-full w-full [&>div]:hover:scale-110 [&>div]:hover:text-primary-500"
              duration={20}
              radius={120}
            >
              {tools.map((tool) => (
                <div key={tool.name}>
                  <Icon
                    className="transition-all duration-300"
                    height={24}
                    icon={tool.icon}
                    width={24}
                  />
                </div>
              ))}
            </OrbitingCircles>
          </div>
        </AccordionItem>
      ))}
    </Accordion>
  </motion.div>
);