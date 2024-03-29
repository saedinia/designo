import Link from "next/link";
import React from "react";
import MobileMenuIcon from "./MobileMenuIcon";

function Navbar() {
  const navbar = [
    { label: "Our Company", href: "/company" },
    { label: "Locations", href: "/locations" },
    { label: "Contact", href: "/contact" },
  ];
  return (
    <nav>
      <ul>
        {navbar.map((item, index) => (
          <li>
            <Link key={index} href={item.href}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <MobileMenuIcon />
    </nav>
  );
}

export default Navbar;
