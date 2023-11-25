import { PageTransitionContext } from "@/components/PageTransitionWrapper";
import { useAnimate, usePresence } from "framer-motion";
import { useContext, useEffect, useRef } from "react";
import { ExtensionFunctionsProps } from "@/animations/page-transitions/AnimatePresenceComponent";
import { PageBackgroundMapping } from "@/constants";
import { motion } from "framer-motion";
import { PageKeys } from "@/types";
import { MainWrapperContext } from "@/components/MainWrapper";
import { diagonalClosePageTransition } from "@/animations/page-transitions/utils";

export default function HomePageAnimationWrapper<
  P extends ExtensionFunctionsProps
>(ComponentToWrap: React.ComponentType<P>) {
  const HomePageAnimation = (props: P) => {
    const { mainContentRef } = useContext(MainWrapperContext);
    const { targetPageClosedRef, newPath } = useContext(PageTransitionContext);
    const [isPresent, safeToRemove] = usePresence();
    const [scope, animate] = useAnimate();
    const mainPageRef = useRef<HTMLDivElement>(null);
    const newPageRef = useRef<HTMLDivElement>(null);
    const transitionElementRef = useRef<HTMLDivElement>(null);
    const transitionElement2Ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
      if (isPresent) {
        const enterAnimation = async () => {
          await animate(".home", { scaleY: 1 }, { duration: 0.5 });
          props.setDisplayScrollBars(true);
        };
        enterAnimation();
      } else {
        const exitAnimation = async () => {
          props.setDisplayScrollBars(false);
          const newPageBackgroundColor =
            PageBackgroundMapping[newPath as PageKeys];
          (newPageRef.current as HTMLElement).style.background =
            newPageBackgroundColor;
          (mainContentRef?.current as HTMLElement).style.background =
            newPageBackgroundColor;

          await diagonalClosePageTransition(
            mainPageRef.current as HTMLElement,
            newPageRef.current as HTMLElement,
            transitionElementRef.current as HTMLElement,
            transitionElement2Ref.current as HTMLElement
          );

          if (targetPageClosedRef?.current) {
            targetPageClosedRef.current();
            targetPageClosedRef.current = null;
          }
          safeToRemove();
        };
        exitAnimation();
      }
    }, [
      animate,
      isPresent,
      mainContentRef,
      newPath,
      props,
      safeToRemove,
      scope,
      targetPageClosedRef,
    ]);

    return (
      <div ref={scope} className="transition-wrapper home-page">
        <motion.div
          ref={transitionElementRef}
          className="transition-piece piece-1"
        />
        <motion.div
          ref={transitionElement2Ref}
          className="transition-piece piece-2"
        />
        <motion.div ref={newPageRef} className="new-page" />
        <div ref={mainPageRef} className="page-transition-wrapper visible">
          <ComponentToWrap {...props} />
        </div>
      </div>
    );
  };
  return HomePageAnimation;
}
