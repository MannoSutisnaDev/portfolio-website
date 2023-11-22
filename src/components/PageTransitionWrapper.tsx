"use client";

import {
  Dispatch,
  MutableRefObject,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useState,
  useRef,
  useEffect,
} from "react";
import { usePathname } from "next/navigation";

interface PageTransitionWrapperContextInterface {
  newPath: string;
  setNewPath: Dispatch<SetStateAction<string>>;
  targetPageClosedRef: MutableRefObject<(() => void) | null> | null;
}

export const PageTransitionContext =
  createContext<PageTransitionWrapperContextInterface>({
    newPath: "",
    setNewPath: () => {},
    targetPageClosedRef: null,
  });

export default function AnimationWrapper({ children }: PropsWithChildren) {
  const pathname = usePathname();
  const [newPath, setNewPath] = useState(pathname);
  const signalPageExitRef = useRef(null);

  useEffect(() => {
    setNewPath(pathname);
  }, [pathname]);

  return (
    <PageTransitionContext.Provider
      value={{ newPath, setNewPath, targetPageClosedRef: signalPageExitRef }}
    >
      {children}
    </PageTransitionContext.Provider>
  );
}
