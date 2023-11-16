"use client";

import { PropsWithChildren, RefObject, createContext, useRef } from "react";
import NavBar from "@/components/NavBar";

interface MainWrapperContextInterface {
  mainWrapperRef: RefObject<HTMLDivElement> | null;
}

export const MainWrapperContext = createContext<MainWrapperContextInterface>({
  mainWrapperRef: null,
});

export default function MainWrapper({ children }: PropsWithChildren) {
  const mainWrapperRef = useRef<HTMLDivElement>(null);
  return (
    <MainWrapperContext.Provider value={{ mainWrapperRef }}>
      <div ref={mainWrapperRef} className="main-wrapper">
        <NavBar />
        <main className="main-content">{children}</main>
      </div>
    </MainWrapperContext.Provider>
  );
}
