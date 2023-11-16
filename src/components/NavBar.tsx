"use client";

import myself from "../assets/myself.jpg";
import Image from "next/image";
import MobileNavItems from "@/components/MobileNavItems";
import NavItems from "@/components/NavItems";
import { useRef } from "react";

export default function NavBar() {
  const navigationWrapperRef = useRef<HTMLDivElement>(null);
  return (
    <div ref={navigationWrapperRef} className="navigation-wrapper">
      <div className="navigation">
        <div className="profile-picture">
          <Image src={myself} alt="profile-picture" />
        </div>
        <MobileNavItems navigationWrapperRef={navigationWrapperRef} />
        <NavItems />
      </div>
    </div>
  );
}
