"use client";

import { motion } from "framer-motion";

import { SectionHeader } from "@/components/about/section-header";
import { TimelineItem } from "@/components/about/timelines/timeline-item";
import { containerVariants, itemVariants } from "@/components/about/variants";
import { EducationItems } from "@/components/about/types";

interface EducationTimelineProps {
  education: EducationItems;
}

export const EducationTimeline = ({ education }: EducationTimelineProps) => (
  <div className="mb-20">
    <SectionHeader icon="mdi:school-outline" title="Education" />

    <motion.ol
      className="relative ml-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="absolute top-2 left-2 bottom-0 w-px bg-primary-500" />
      {education.map((item, idx) => (
        <TimelineItem
          key={idx}
          title={item.title}
          date={item.date}
          description={item.description}
          variants={itemVariants}
          delay={idx * 300}
        />
      ))}
    </motion.ol>
  </div>
);
