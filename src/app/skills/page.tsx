"use client";

import AnimatePresenceComponent from "@/animations/page-transitions/AnimatePresenceComponent";
import SkillsPageAnimationWrapper from "@/animations/page-transitions/SkillsPageTransition";
import { PageTransitionContext } from "@/components/PageTransitionWrapper";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import JavaScript from "@/svgs/JavaScript";
import PHP from "@/svgs/PHP";
import Html5 from "@/svgs/Html5";
import CSS3 from "@/svgs/CSS3";
import React from "@/svgs/React";
import NextJS from "@/svgs/NextJS";
import Yii from "@/svgs/Yii";
import Sass from "@/svgs/Sass";
import Cypress from "@/svgs/Cypress";
import Git from "@/svgs/Git";
import Docker from "@/svgs/Docker";
import TypeScript from "@/svgs/TypeScript";

import TooltipWrapper from "@/components/TooltipWrapper";
import SQL from "@/svgs/SQL";

function Skills() {
  return (
    <motion.div className="base-page skills" initial={{ scaleY: 0 }}>
      <h1 className="heading">Skills</h1>
      <div className="skills-list">
        <h2>Programming languages & Tools</h2>
        <div className="icons">
          <TooltipWrapper text="JavaScript">
            <JavaScript />
          </TooltipWrapper>
          <TooltipWrapper text="TypeScript">
            <TypeScript />
          </TooltipWrapper>
          <TooltipWrapper text="PHP">
            <PHP />
          </TooltipWrapper>
          <TooltipWrapper text="SQL">
            <SQL />
          </TooltipWrapper>
          <TooltipWrapper text="HTML5">
            <Html5 />
          </TooltipWrapper>
          <TooltipWrapper text="CSS3">
            <CSS3 />
          </TooltipWrapper>
          <TooltipWrapper text="React">
            <React />
          </TooltipWrapper>
          <TooltipWrapper text="Next (JS)">
            <NextJS />
          </TooltipWrapper>
          <TooltipWrapper text="Yii2">
            <Yii />
          </TooltipWrapper>
          <TooltipWrapper text="SASS">
            <Sass />
          </TooltipWrapper>
          <TooltipWrapper text="Cypress (Frontend testing)">
            <Cypress />
          </TooltipWrapper>
          <TooltipWrapper text="Git">
            <Git />
          </TooltipWrapper>
          <TooltipWrapper text="Docker">
            <Docker />
          </TooltipWrapper>
        </div>
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
