"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

const links = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "services",
        path: "/services",
    },
    {
        name: "resume",
        path: "/resume",
    },
    {
        name: "work",
        path: "/work",
    },
    {
        name: "contact",
        path: "/contact",
    },
]

const Nav = () => {
    const pathname = usePathname();

  return (
    <nav className="flex gap-8">
        {links.map((link, index) => (
            <Link
                href={link.path}
                key={index}
                className={`${
                    link.path === pathname && "text-teal-400 border-b-2 border-teal-400"
                } capitalize font-medium hover:text-teal-400 transition-all`}
            >
                {link.name}
            </Link>
        ))}
    </nav>
  )
}

export default Nav