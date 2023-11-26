"use client";

import AnimatePresenceComponent from "@/animations/page-transitions/AnimatePresenceComponent";
import ProjectsPageAnimationWrapper from "@/animations/page-transitions/ProjectsPageTransition";
import ContentBlock from "@/components/ContentBlock";
import { PageTransitionContext } from "@/components/PageTransitionWrapper";
import { ContentBlockType } from "@/types";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useContext } from "react";

function Projects() {
  const contentBlock: ContentBlockType = {
    main: "Coming soon...",
    after: "",
    sub: "",
    content: "",
  };
  return (
    <motion.div className="base-page projects" initial={{ scaleY: 0 }}>
      <h1 className="heading">Projects</h1>
      <ContentBlock {...contentBlock} />
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
