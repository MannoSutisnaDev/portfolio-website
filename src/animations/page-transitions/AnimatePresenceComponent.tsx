import { MainWrapperContext } from "@/components/MainWrapper";
import { AnimatePresence } from "framer-motion";
import { useContext } from "react";

export interface ExtensionFunctionsProps {
  setDisplayScrollBars: (display: boolean) => void;
}

export default function AnimatePresenceComponent<P extends {}>(
  ComponentToWrap: React.ComponentType<P & ExtensionFunctionsProps>,
  viewCondition: () => boolean
) {
  const AnimatePresenceComponentWrapper = (props: P) => {
    const { mainContentRef } = useContext(MainWrapperContext);
    return (
      <AnimatePresence mode="wait">
        {viewCondition() && (
          <ComponentToWrap
            {...props}
            setDisplayScrollBars={(display: boolean) => {
              const mainContent = mainContentRef?.current;
              if (!mainContent) {
                return;
              }
              if (display) {
                mainContent.classList.add("display-scrollbars");
              } else {
                mainContent.classList.remove("display-scrollbars");
              }
            }}
          />
        )}
      </AnimatePresence>
    );
  };
  return AnimatePresenceComponentWrapper;
}
