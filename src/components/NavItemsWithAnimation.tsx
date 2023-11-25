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
          { top: props.top, ease: "easeIn" },
          { duration: 0.3 }
        );
      };
      enterAnimation();
    } else {
      const exitAnimation = async () => {
        await animate(
          scope.current,
          { top: -1000, ease: "easeOut" },
          { duration: 0.3 }
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
