import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Avatar,
  AvatarGroup,
  Tooltip,
  ScrollShadow,
} from "@heroui/react";
import { Icon } from "@iconify/react";

import ImageGallery from "@/components/image-gallery";
import { ProjectModalProps } from "@/components/projects/types";

export const ProjectModal = ({
  isOpen,
  onClose,
  project,
}: ProjectModalProps) => {
  if (!project) return null;

  return (
    <Modal
      backdrop="blur"
      className="border border-black/10 dark:border-white/10 bg-white/90 dark:bg-black/70 shadow-md dark:shadow-cyan-900/40 rounded-xl overflow-hidden transition-colors"
      isOpen={isOpen}
      scrollBehavior="inside"
      size="xl"
      onClose={onClose}
    >
      <ModalContent>
        <ModalHeader className="text-xl font-bold text-primary-700 border-b  border-white/20">
          {project.title}
        </ModalHeader>
        <ScrollShadow hideScrollBar size={60}>
          <ModalBody>
            {project.gallery && project.gallery.length > 0 && (
              <ImageGallery images={project.gallery} />
            )}

            <p className="text-sm text-primary-500 mb-3 font-medium uppercase tracking-wide">
              {project.category}
            </p>

            <div className="text-foreground-600 leading-relaxed mb-6 whitespace-pre-line">
              {project.details}
            </div>
            {project.tech && (
              <div className="mb-6">
                <h4 className="font-semibold mb-6 text-foreground">
                  Technologies Used:
                </h4>
                <AvatarGroup>
                  {project.tech.map(({ name, icon }) => (
                    <Tooltip key={name} content={name} showArrow={true}>
                      <Avatar
                        key={name}
                        showFallback
                        classNames={{
                          base: "bg-transparent",
                          icon: "text-foreground dark:text-foreground-dark",
                        }}
                        icon={<Icon icon={icon} width={25} />}
                      />
                    </Tooltip>
                  ))}
                </AvatarGroup>
              </div>
            )}
          </ModalBody>
        </ScrollShadow>
        {(project.github || project.live) && (
          <div className="flex justify-end mb-4 px-6 gap-3">
            {project.github && (
              <a
                aria-label="View on GitHub"
                className="text-foreground-500 hover:text-foreground transition"
                href={project.github}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Icon height={22} icon="mdi:github" width={22} />
              </a>
            )}
            {project.live && (
              <a
                aria-label="View Live Project"
                className="text-foreground-500 hover:text-foreground transition"
                href={project.live}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Icon height={22} icon="mdi:web" width={22} />
              </a>
            )}
          </div>
        )}

        <ModalFooter className="flex flex-wrap gap-3 justify-end border-t border-white/20">
          <Button
            className="text-foreground-500"
            color="danger"
            variant="light"
            onClick={onClose}
          >
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
