import { memo } from "react";
import { Card, CardBody, CardFooter, Button, Image } from "@heroui/react";
import { Icon } from "@iconify/react";

import { ProjectCardProps } from "@/components/projects/types";

export const ProjectCard = memo(function ProjectCard({
  project,
  onViewDetails,
}: ProjectCardProps) {
  return (
    <Card
      isFooterBlurred
      isHoverable
      className="
        border-none bg-white/90 dark:bg-black/70
        shadow-md dark:shadow-cyan-900/40
        rounded-xl overflow-hidden h-full w-full
        transition-colors
      "
      radius="lg"
    >
      <CardBody className="p-0 flex flex-col h-full">
        <div className="relative w-full aspect-[16/10] overflow-hidden">
          <Image
            isZoomed
            removeWrapper
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover"
            classNames={{
              img: "w-full h-full object-cover",
              zoomedWrapper: "w-full h-full",
            }}
            loading="lazy"
            src={project.image}
          />
          <CardFooter
            className="
    justify-center
    bg-black/40 
    border-white/20 border-1
    overflow-hidden py-2.5 absolute before:rounded-xl rounded-large
    bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10
    backdrop-blur-sm
  "
          >
            <p className="text-xs font-medium text-white tracking-wider uppercase z-10">
              {project.category}
            </p>
          </CardFooter>
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
            {project.title}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow text-sm leading-relaxed">
            {project.description}
          </p>
          <Button
            aria-label="View Details"
            className="w-full md:w-auto border-cyan-400 text-cyan-300 hover:bg-cyan-400/10 transition-colors"
            color="primary"
            endContent={<Icon icon="lucide:arrow-right" />}
            variant="bordered"
            onClick={onViewDetails}
          >
            View Details
          </Button>
        </div>
      </CardBody>
    </Card>
  );
});
