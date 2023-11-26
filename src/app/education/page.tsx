"use client";

import AnimatePresenceComponent from "@/animations/page-transitions/AnimatePresenceComponent";
import EducationPageAnimationWrapper from "@/animations/page-transitions/EducationPageTransition";
import ContentBlock from "@/components/ContentBlock";
import { PageTransitionContext } from "@/components/PageTransitionWrapper";
import { ContentBlockType } from "@/types";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useContext } from "react";

function Education() {
  const contentBlocks: ContentBlockType[] = [
    {
      main: "Hogeschool Inholland",
      after: "August 2015 - July 2019",
      sub: "Bachelor of Science",
      content: "Informatica (HBO)",
    },
  ];

  return (
    <motion.div className="base-page education" initial={{ scaleY: 0 }}>
      <h1 className="heading">Education</h1>
      {contentBlocks.map((entry, index) => {
        return <ContentBlock key={`content-block-${index}`} {...entry} />;
      })}
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
