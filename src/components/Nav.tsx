import Link from "next/link";
import { abor } from "@/assets/fonts/fonts";

const links = [
  { to: "/about", display: "About" },
  { to: "/photos", display: "Photos" },
  { to: "videos", display: "Videos" },
  { to: "/book", display: "Hire me" },
];

export function Nav() {
  return (
    <nav
      className={`${abor.className} grid grid-cols-4 pt-2 text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:text-center`}
    >
      {links.map((link) => {
        return (
          <Link key={link.display} href={link.to} className="nav-link">
            <h2 className={`text-xs md:text-base`}>{link.display} </h2>
          </Link>
        );
      })}
    </nav>
  );
}
