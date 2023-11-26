"use client";

import AnimatePresenceComponent from "@/animations/page-transitions/AnimatePresenceComponent";
import ExperiencePageAnimationWrapper from "@/animations/page-transitions/ExperiencePageTransition";
import { PageTransitionContext } from "@/components/PageTransitionWrapper";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { ContentBlockType } from "@/types";
import ContentBlock from "@/components/ContentBlock";

function Experience() {
  const contentBlocks: ContentBlockType[] = [
    {
      main: "Junior Full Stack Web Developer",
      after: "July 2019 - February 2021",
      sub: "AdCalls",
      content:
        'Maintaining and building on the main product of AdCalls called "Call Tracking". From doing small tasks such as changing content and fixing small bugs to implementing new features into the already existing code base.',
    },
    {
      main: "Medior Full Stack Web Developer",
      after: "February 2021 - Present",
      sub: "AdCalls",
      content:
        "Creating completely new features from scratch that helped to innovate the 'Call Tracking' product of AdCalls. Led the project to migrate to a new invoice system and phase out the old one. Realizing custom integrations for customers. Also alot of direct contact with customres to discuss their wishes and providng support",
    },
  ];

  return (
    <motion.div className="base-page experience">
      <h1 className="heading">Experience</h1>
      {contentBlocks.map((entry, index) => {
        return <ContentBlock key={`content-block-${index}`} {...entry} />;
      })}
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
