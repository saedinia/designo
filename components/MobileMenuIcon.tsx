import React from "react";
import iconHamburger from "@/public/svg/icon-hamburger.svg";
import Image from "next/image";

const MobileMenuIcon = () => {
  return (
    <Image
      className="icon-hamburger"
      src={iconHamburger}
      alt=""
      priority={true}
    />
  );
};

export default MobileMenuIcon;
