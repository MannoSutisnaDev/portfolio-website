"use client";

import AnimatePresenceComponent from "@/animations/page-transitions/AnimatePresenceComponent";
import ProjectsPageAnimationWrapper from "@/animations/page-transitions/ProjectsPageTransition";
import { PageTransitionContext } from "@/components/PageTransitionWrapper";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useContext } from "react";

function Projects() {
  return (
    <motion.div className="home projects">
      <div className="personal">
        <h1 className="name">
          <span className="first-name">Projects</span>
        </h1>
      </div>
    </motion.div>
  );
}

const ProjectsPageWithAnimation = AnimatePresenceComponent(
  ProjectsPageAnimationWrapper(Projects),
  () => {
    const { targetPageClosedRef, newPath } = useContext(PageTransitionContext);
    const pathname = usePathname();
    if (typeof window === "undefined") {
      return true;
    } else if (pathname && !targetPageClosedRef?.current) {
      return pathname === "/projects";
    }
    return newPath === "/projects";
  }
);

export default ProjectsPageWithAnimation;
