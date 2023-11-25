"use client";

import AnimatePresenceComponent from "@/animations/page-transitions/AnimatePresenceComponent";
import SkillsPageAnimationWrapper from "@/animations/page-transitions/SkillsPageTransition";
import { PageTransitionContext } from "@/components/PageTransitionWrapper";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useContext } from "react";

function Skills() {
  return (
    <motion.div className="home skills" initial={{ x: 1000 }}>
      <div className="personal">
        <h1 className="name">
          <span className="first-name">SKILLS</span>
        </h1>
      </div>
    </motion.div>
  );
}

const SkillsPageWithAnimation = AnimatePresenceComponent(
  SkillsPageAnimationWrapper(Skills),
  () => {
    const { targetPageClosedRef, newPath } = useContext(PageTransitionContext);
    const pathname = usePathname();
    if (typeof window === "undefined") {
      return true;
    } else if (pathname && !targetPageClosedRef?.current) {
      return pathname === "/skills";
    }
    return newPath === "/skills";
  }
);

export default SkillsPageWithAnimation;
