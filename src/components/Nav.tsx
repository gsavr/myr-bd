import Link from "next/link";
import { Aboreto } from "next/font/google";

const abor = Aboreto({ weight: "400", subsets: ["latin"] });

export function Nav() {
  return (
    <nav
      style={abor.style}
      className="grid grid-cols-4 pt-2 text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:text-center"
    >
      <Link href="/about" className="nav-link ">
        <h2 className={`text-xs md:text-base`}>About </h2>
      </Link>

      <Link href="/photos" className="nav-link group">
        <h2 className={`text-xs md:text-base`}>Photos </h2>
      </Link>

      <Link href="/videos" className="nav-link group">
        <h2 className={`text-xs md:text-base`}>Videos </h2>
      </Link>

      <Link href="/book" className="nav-link group">
        <h2 className={`text-xs md:text-base`}>Book </h2>
      </Link>
    </nav>
  );
}
