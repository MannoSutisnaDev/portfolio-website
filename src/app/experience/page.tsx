"use client";

import AnimatePresenceComponent from "@/animations/page-transitions/AnimatePresenceComponent";
import ExperiencePageAnimationWrapper from "@/animations/page-transitions/ExperiencePageTransition";
import { PageTransitionContext } from "@/components/PageTransitionWrapper";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useContext } from "react";

function Experience() {
  return (
    <motion.div className="home experience">
      <div className="personal">
        <h1 className="name">
          <span className="first-name">EXPERIENCE</span>
        </h1>
      </div>
    </motion.div>
  );
}

const ExperiencePageWithAnimation = AnimatePresenceComponent(
  ExperiencePageAnimationWrapper(Experience),
  () => {
    const { targetPageClosedRef, newPath } = useContext(PageTransitionContext);
    const pathname = usePathname();
    if (typeof window === "undefined") {
      return true;
    } else if (pathname && !targetPageClosedRef?.current) {
      return pathname === "/experience";
    }
    return newPath === "/experience";
  }
);

export default ExperiencePageWithAnimation;
