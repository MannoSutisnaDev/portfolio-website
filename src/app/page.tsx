"use client";

import Github from "@/svgs/Github";
import LinkedIn from "@/svgs/LinkedIn";

import { motion } from "framer-motion";

import HomePageAnimationWrapper from "@/animations/page-transitions/HomePageAnimation";
import AnimatePresenceComponent from "@/animations/page-transitions/AnimatePresenceComponent";
import { useContext } from "react";
import { PageTransitionContext } from "@/components/PageTransitionWrapper";
import { usePathname } from "next/navigation";

export function HomePage() {
  return (
    <motion.div className="home" initial={{ scaleY: 0 }}>
      <div className="personal">
        <h1 className="name">
          <span className="first-name">Manno</span>
          &nbsp;<span className="last-name">Sutisna</span>
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
      <div className="socials">
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/manno-sutisna-693176105/">
              <LinkedIn />
            </a>
          </li>
          <li>
            <a href="https://github.com/MannoSutisnaDev/">
              <Github />
            </a>
          </li>
        </ul>
      </div>
    </motion.div>
  );
}

const HomePageWithAnimation = AnimatePresenceComponent(
  HomePageAnimationWrapper(HomePage),
  () => {
    const { targetPageClosedRef, newPath } = useContext(PageTransitionContext);
    const pathname = usePathname();
    if (typeof window === "undefined") {
      return true;
    } else if (pathname && !targetPageClosedRef?.current) {
      return pathname === "/";
    }
    return newPath === "/";
  }
);

export default HomePageWithAnimation;
