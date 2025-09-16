"use client";
import { motion } from "framer-motion";

import { SectionHeader } from "@/components/about/section-header";
import { TimelineItem } from "@/components/about/timelines/timeline-item";
import { containerVariants, itemVariants } from "@/components/about/variants";
import { ExperienceItems } from "@/components/about/types";

interface ExperienceTimelineProps {
  experience: ExperienceItems;
}

export const ExperienceTimeline = ({ experience }: ExperienceTimelineProps) => (
  <div className="mb-24">
    <SectionHeader icon="mdi:briefcase-outline" title="Experience" />

    <motion.ol
      className="relative ml-6"
      initial="hidden"
      variants={containerVariants}
      viewport={{ once: true, amount: 0.2 }}
      whileInView="visible"
    >
      <div className="absolute top-2 left-2 bottom-0 w-px bg-primary-500" />
      {experience.map((item, idx) => (
        <TimelineItem
          key={idx}
          date={item.date}
          delay={idx * 300}
          description={item.description}
          title={item.title}
          variants={itemVariants}
        />
      ))}
    </motion.ol>
  </div>
);