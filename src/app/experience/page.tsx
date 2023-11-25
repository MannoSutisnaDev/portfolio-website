"use client";

import AnimatePresenceComponent from "@/animations/page-transitions/AnimatePresenceComponent";
import ExperiencePageAnimationWrapper from "@/animations/page-transitions/ExperiencePageAnimation";
import { PageTransitionContext } from "@/components/PageTransitionWrapper";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useContext } from "react";

function Experience() {
  return (
    <motion.div className="home experience" initial={{ x: 1000 }}>
      <div className="personal">
        <h1 className="name">
          <span className="first-name">WTF</span>
          &nbsp;<span className="last-name">IS THIS</span>
        </h1>
        <div className="info-wrapper">
          <h2>
            <a className="info" href="mailto:mannosutisnahiras@gmail.com">
              mannosutisnahiras@gmail.com
            </a>
          </h2>
        </div>
      </div>
      <p className="intro">
        I am experienced in leveraging agile frameworks to provide a robust
        synopsis for high level overviews. Iterative approaches to corporate
        strategy foster collaborative thinking to further the overall value
        proposition.
      </p>
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
