"use client";

import AnimatePresenceComponent from "@/animations/page-transitions/AnimatePresenceComponent";
import AboutMePageAnimationWrapper from "@/animations/page-transitions/AboutMePageTransition";
import { PageTransitionContext } from "@/components/PageTransitionWrapper";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useContext } from "react";

function AboutMe() {
  return (
    <motion.div className="home about-me">
      <div className="personal">
        <h1 className="name">
          <span className="first-name">About Me</span>
        </h1>
      </div>
    </motion.div>
  );
}

const AboutMePageWithAnimation = AnimatePresenceComponent(
  AboutMePageAnimationWrapper(AboutMe),
  () => {
    const { targetPageClosedRef, newPath } = useContext(PageTransitionContext);
    const pathname = usePathname();
    if (typeof window === "undefined") {
      return true;
    } else if (pathname && !targetPageClosedRef?.current) {
      return pathname === "/about-me";
    }
    return newPath === "/about-me";
  }
);

export default AboutMePageWithAnimation;
