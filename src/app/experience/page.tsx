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
      after: (
        <>
          <span className="no-br">July 2019</span>
          <span> - </span>
          <span className="no-br">February 2021</span>
        </>
      ),
      sub: "AdCalls",
      // content: `As a Junior developer I was maintaining and building on the main product of AdCalls which is 'Call Tracking'. Call Tracking links web behavior to offline phone conversations. It provides insights to as to which advertisement contributed to a telephone call (attribution). Activities that I performed as a Junior Developer were ranging from small tasks such as changing content and fixing small bugs to medium sized tasks such as implementing new features into the already existing code base.`,
      content: (
        <>
          <span className="section-span">
            As a Junior developer I was maintaining and building on the main
            product of AdCalls which is &lsquo;Call Tracking&lsquo;. Call
            Tracking links web behavior to offline phone conversations. It
            provides insights to as to which advertisement contributed to a
            telephone call (attribution).
          </span>
          <span> </span>
          <br className="mobile-br" />
          <span className="section-span">
            Activities that I performed as a Junior Developer were ranging from
            small tasks such as changing content and fixing small bugs to medium
            sized tasks such as implementing new features into the already
            existing code base.
          </span>
        </>
      ),
    },
    {
      main: "Medior Full Stack Web Developer",
      after: (
        <>
          <span className="no-br">February 2021</span>
          <span> - </span>
          <span className="no-br">Present</span>
        </>
      ),
      sub: "AdCalls",
      content: (
        <>
          <span className="span-div">
            <span className="section-span">
              As a Medior developer I mostly worked on features that helped to
              innovate the &lsquo;Call Tracking&lsquo; product of AdCalls. One
              of the features that I developed was a &lsquo;Debug mode&lsquo;
              for the product.
            </span>
            <span> </span>
            <br className="mobile-br" />
            <span className="section-span">
              It allowed the customer to view individual pages of his/her
              website to find out which phone numbers were not replaced yet and
              it also provided functionality to fix those issues so that the
              next time a website visitor visits the page, the problem will not
              occur again.
            </span>
          </span>
          <br />
          <span className="span-div">
            Also I was in Charge of implementing a new external invoicing system
            into the organization and phasing out the old one. There was a lot
            of back and forth with the consultant of the external party to
            figure out how to best migrate our data from the previous invoicing
            system to the new one and also on how to best implement the
            workflows of the new invoicing system into our own backend. The
            project has since been finished.
          </span>
          <br />
          <span className="span-div">
            <span className="section-spawn">
              Finally I have been involved with a lot of technical consultancy
              and development of custom integrations for customers. Many times
              customers would want data from our system to be pushed to their
              systems in a specific way or via a specific workflow.
            </span>
            <span> </span>
            <br className="mobile-br" />
            <br className="mobile-br" />
            <span className="section-spawn">
              Frequently I was present at the first meeting to advise on how the
              customer&lsquo;s wishes could be realized on a technical level.
              The next step would then be to develop the custom integration or
              at least be closely involved with it to oversee its development.
              Afterwards I would support the customer if they encountered any
              issues or roadblocks.
            </span>
          </span>
        </>
      ),
      // content: `As a Medior developer I mostly worked on features that helped to innovate the 'Call Tracking' product of AdCalls. One of the features that I developed was a 'Debug mode' for the product. It allowed the customer to view individual pages of his/her website to find out which phone numbers were not replaced yet and it also provided functionality to fix those issues so that the next time a website visitor visits the page, the problem will not occur again.

      // Also I was in Charge of implementing a new external invoicing system into the organization and phasing out the old one. There was a lot of back and forth with the consultant of the external party to figure out how to best migrate our data from the previous invoicing system to the new one and also on  how to best implement the workflows of the new invoicing system into our own backend. The project has since been finished.

      // Finally I have been involved with a lot of technical consultancy and development of custom integrations for customers. Many times customers would want data from our system to be pushed to their systems in a specific way or via a specific workflow. Frequently I was present at the first meeting to advise on how the customer's wishes could be realized on a technical level. The next step would then be to  develop the custom integration or at least be closely involved with it to oversee its development. Afterwards I would support the customer if they encountered any issues or roadblocks.`,
    },
  ];

  return (
    <motion.div className="base-page experience" initial={{ scaleY: 0 }}>
      <h1 className="heading">Experience</h1>
      {contentBlocks.map((entry, index) => {
        // return null;
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
