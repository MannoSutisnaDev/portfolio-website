"use client";

import Github from "@/svgs/Github";
import LinkedIn from "@/svgs/LinkedIn";

import { motion } from "framer-motion";

import HomePageAnimationWrapper from "@/animations/page-transitions/HomePageTransition";
import AnimatePresenceComponent from "@/animations/page-transitions/AnimatePresenceComponent";
import { useContext } from "react";
import { PageTransitionContext } from "@/components/PageTransitionWrapper";
import { usePathname } from "next/navigation";

export function HomePage() {
  return (
    <motion.div className="base-page home" initial={{ scaleY: 0 }}>
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
        I am a Full Stack Web Developer with almost 5 years of professional
        experience. The programming languages that I have the most experience
        with are JavaScript and PHP.
      </p>
      <p className="intro">
        I really like to study web applications and implement individual
        features of it myself from scratch to really understand how it all
        works.
      </p>
      <p className="intro">
        Another things I really enjoy doing is studying a product, identifying
        its strengths and weaknesses and coming up with inventive ways to
        improve it maximally.
      </p>
      {/* <p className="intro">
        Lately I have been working on an online gaming platform where you can
        play simple multiplayer games on. You can check out more of at in the
        &apos;Experience&apos; section on this website.
      </p> */}
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
