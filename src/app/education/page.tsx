"use client";

import AnimatePresenceComponent from "@/animations/page-transitions/AnimatePresenceComponent";
import EducationPageAnimationWrapper from "@/animations/page-transitions/EducationPageTransition";
import { PageTransitionContext } from "@/components/PageTransitionWrapper";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useContext } from "react";

function Education() {
  return (
    <motion.div className="home education">
      <div className="personal">
        <h1 className="name">
          <span className="first-name">EDUCATION</span>
        </h1>
      </div>
    </motion.div>
  );
}

const EducationPageWithAnimation = AnimatePresenceComponent(
  EducationPageAnimationWrapper(Education),
  () => {
    const { targetPageClosedRef, newPath } = useContext(PageTransitionContext);
    const pathname = usePathname();
    if (typeof window === "undefined") {
      return true;
    } else if (pathname && !targetPageClosedRef?.current) {
      return pathname === "/education";
    }
    return newPath === "/education";
  }
);

export default EducationPageWithAnimation;
