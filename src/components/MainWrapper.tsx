"use client";

import { PropsWithChildren, RefObject, createContext, useRef } from "react";
import NavBar from "@/components/NavBar";
import PageTransitionWrapper from "@/components/PageTransitionWrapper";

interface MainWrapperContextInterface {
  mainWrapperRef: RefObject<HTMLDivElement> | null;
  mainContentRef: RefObject<HTMLElement> | null;
}

export const MainWrapperContext = createContext<MainWrapperContextInterface>({
  mainWrapperRef: null,
  mainContentRef: null,
});

export default function MainWrapper({ children }: PropsWithChildren) {
  const mainWrapperRef = useRef<HTMLDivElement>(null);
  const mainContentRef = useRef<HTMLElement>(null);
  return (
    <PageTransitionWrapper>
      <MainWrapperContext.Provider
        value={{
          mainWrapperRef,
          mainContentRef,
        }}
      >
        <div ref={mainWrapperRef} className="main-wrapper">
          <NavBar />
          <main ref={mainContentRef} className="main-content">
            {children}
          </main>
        </div>
      </MainWrapperContext.Provider>
    </PageTransitionWrapper>
  );
}
