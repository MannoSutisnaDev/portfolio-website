"use client";

import HamburgerIcon from "@/icons/HamburgerIcon";
import { RefObject, useContext, useEffect, useState } from "react";
import { debounce } from "@/utils";
import { AnimatePresence } from "framer-motion";
import NavItemsWithAnimation from "@/components/NavItemsWithAnimation";
import { createPortal } from "react-dom";
import { MainWrapperContext } from "@/components/MainWrapper";

interface Props {
  navigationWrapperRef: RefObject<HTMLDivElement>;
}

export default function MobileNavItems({ navigationWrapperRef }: Props) {
  const [displayMenu, setDisplayMenu] = useState(false);
  const [navigationWrapperHeight, setNavigationWrapperHeight] = useState(0);
  const { mainWrapperRef } = useContext(MainWrapperContext);

  useEffect(() => {
    const registerNavigationWrapperHeight = debounce(() => {
      const navigationWrapper = navigationWrapperRef.current;
      if (navigationWrapper) {
        const rect = navigationWrapper.getBoundingClientRect();
        setNavigationWrapperHeight(rect.height);
      }
    });
    registerNavigationWrapperHeight();
    window.addEventListener("resize", registerNavigationWrapperHeight);
    return () => {
      window.removeEventListener("resize", registerNavigationWrapperHeight);
    };
  }, [navigationWrapperRef]);

  const mainWrapper = mainWrapperRef?.current;

  return (
    <>
      <div className="mobile-nav-icon">
        <HamburgerIcon
          onClick={() => setDisplayMenu((previousValue) => !previousValue)}
        />
      </div>
      {mainWrapper &&
        createPortal(
          <AnimatePresence mode="wait">
            {displayMenu && (
              <NavItemsWithAnimation
                type="mobile"
                top={navigationWrapperHeight}
              />
            )}
          </AnimatePresence>,
          mainWrapper
        )}
    </>
  );
}
