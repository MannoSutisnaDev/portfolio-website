"use client";

import AnimatePresenceComponent from "@/animations/page-transitions/AnimatePresenceComponent";
import ExperiencePageAnimationWrapper from "@/animations/page-transitions/ExperiencePageAnimation";
import { motion } from "framer-motion";

function Experience() {
  return (
    <motion.div className="home" initial={{ x: 1000 }}>
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
  (newPath) => newPath === "/experience"
);

export default ExperiencePageWithAnimation;
