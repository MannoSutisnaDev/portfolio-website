import { useEffect } from "react";

import NavItems, { Props as NavItemProps } from "@/components/NavItems";
import { useAnimate, usePresence } from "framer-motion";

interface Props extends NavItemProps {
  top: number;
}

export default function NavItemsWithAnimation(props: Props) {
  const [isPresent, safeToRemove] = usePresence();
  const [scope, animate] = useAnimate();
  useEffect(() => {
    if (isPresent) {
      const enterAnimation = async () => {
        animate(
          scope.current,
          { y: props.top },
          {
            duration: 0.2,
            ease: "linear",
          }
        );
      };
      enterAnimation();
    } else {
      const exitAnimation = async () => {
        await animate(
          scope.current,
          { y: 0 },
          {
            duration: 0.2,
            ease: "linear",
          }
        );
        safeToRemove();
      };
      exitAnimation();
    }
  }, [animate, isPresent, props.top, safeToRemove, scope]);

  return (
    <div ref={scope} className="nav-items-wrapper">
      <NavItems {...props} />
    </div>
  );
}
