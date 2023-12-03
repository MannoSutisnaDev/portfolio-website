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
    main: "Multiplayer Games",
    after: (
      <a href="https://games.mannosutisnadev.com">games.mannosutisnadev.com</a>
    ),
    sub: "",
    content:
      "Play multiplayer games with friends. Multiple individual games can be played at the same time via a lobby system. Currently Checkers is available to play but in the future many more games will be added to the website.",
    afterClass: "link",
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
