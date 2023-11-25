"use client";

import Image from "next/image";
import myself from "@/assets/myself.jpg";
import MobileNavItems from "@/components/MobileNavItems";
import NavItems from "@/components/NavItems";
import {
  Dispatch,
  SetStateAction,
  useRef,
  createContext,
  useState,
} from "react";

interface NavBarContextInterface {
  displayMenu: boolean;
  setDisplayMenu: Dispatch<SetStateAction<boolean>>;
}

export const NavBarContext = createContext<NavBarContextInterface>({
  displayMenu: false,
  setDisplayMenu: () => {},
});

export default function NavBar() {
  const navigationWrapperRef = useRef<HTMLDivElement>(null);
  const [displayMenu, setDisplayMenu] = useState(false);
  return (
    <NavBarContext.Provider value={{ displayMenu, setDisplayMenu }}>
      <div ref={navigationWrapperRef} className="navigation-wrapper">
        <div className="navigation">
          <div className="profile-picture">
            <Image src={myself} alt="profile-picture" />
          </div>
          <MobileNavItems navigationWrapperRef={navigationWrapperRef} />
          <NavItems />
        </div>
      </div>
    </NavBarContext.Provider>
  );
}
