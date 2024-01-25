import Image from "next/image";
import landingPhoto from "../assets/images/Myrian/3/red.webp";
import Link from "next/link";
import { Aboreto } from "next/font/google";

const abor = Aboreto({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div
        className={`relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:lg:h-[360px] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40`}
      >
        {/* Hero */}
        <Image
          className="relative rounded-sm drop-shadow-md dark:brightness-75 dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
          src={landingPhoto}
          alt="Myrian"
          priority
        />
      </div>

      {/* Landing nav links */}
      <nav
        style={abor.style}
        className="mb-32 grid pt-2 text-center md:grid-cols-4 lg:mb-0 lg:w-full lg:max-w-5xl lg:text-left"
      >
        <Link href="/about" className="main-link group">
          <h2 className={`h2`}>
            About{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            More about me.
          </p>
        </Link>

        <Link href="/photos" className="main-link group">
          <h2 className={`h2`}>
            Photos{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Browse my Gallery.
          </p>
        </Link>

        <Link href="/videos" className="main-link group">
          <h2 className={`h2`}>
            Videos{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Watch me in action.
          </p>
        </Link>

        <Link href="/book" className="main-link group">
          <h2 className={`h2`}>
            Book{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Book me for a performance!
          </p>
        </Link>
      </nav>
    </>
  );
}
