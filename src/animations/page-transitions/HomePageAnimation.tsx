import { PageTransitionContext } from "@/components/PageTransitionWrapper";
import { useAnimate, usePresence } from "framer-motion";
import { useContext, useEffect } from "react";
import { ExtensionFunctionsProps } from "@/animations/page-transitions/AnimatePresenceComponent";

export default function HomePageAnimationWrapper<
  P extends ExtensionFunctionsProps
>(ComponentToWrap: React.ComponentType<P>) {
  const HomePageAnimation = (props: P) => {
    const { targetPageClosedRef } = useContext(PageTransitionContext);
    const [isPresent, safeToRemove] = usePresence();
    const [scope, animate] = useAnimate();
    useEffect(() => {
      if (isPresent) {
        const enterAnimation = async () => {
          await animate(
            ".home",
            {
              scaleY: 1,
            },
            {
              duration: 0.5,
            }
          );
          props.setDisplayScrollBars(true);
        };
        enterAnimation();
      } else {
        const exitAnimation = async () => {
          props.setDisplayScrollBars(false);
          await animate(
            ".home",
            {
              scaleY: 0,
            },
            {
              duration: 0.5,
            }
          );
          safeToRemove();
          if (targetPageClosedRef?.current) {
            console.log({ signal: targetPageClosedRef?.current });
            targetPageClosedRef.current();
            targetPageClosedRef.current = null;
          }
        };
        exitAnimation();
      }
    }, [animate, isPresent, props, safeToRemove, scope, targetPageClosedRef]);

    return (
      <div className="page-transition-wrapper" ref={scope}>
        <ComponentToWrap {...props} />
      </div>
    );
  };
  return HomePageAnimation;
}
