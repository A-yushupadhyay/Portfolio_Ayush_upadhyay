"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

type PageWrapperProps = {
  children: ReactNode;
};

export const PageWrapper = ({ children }: PageWrapperProps) => {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      animate="animate"
      className="min-h-screen"
      exit="exit"
      initial="initial"
      transition={pageTransition}
      variants={pageVariants}
    >
      {children}
    </motion.div>
  );
};

const pageVariants = {
  initial: {
    opacity: 0,
    y: 30,
    scale: 0.98,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.98,
  },
};

const pageTransition = {
  duration: 0.4,
  ease: [0.4, 0, 0.2, 1],
};
