import Image from "next/image";
import landingPhoto from "../assets/images/Myrian/3/red.webp";
import Link from "next/link";
import { Aboreto, Alegreya_Sans } from "next/font/google";

const aleg = Alegreya_Sans({ weight: "300", subsets: ["latin"] });
const abor = Aboreto({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className={``}>
        {/* Hero */}
        <Image
          className="relative rounded-sm drop-shadow-md dark:brightness-50 dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
          src={landingPhoto}
          alt="Myrian"
          priority
        />
      </div>
      {/* intro */}
      <div style={aleg.style} className="pb-4 pt-8 text-lg lg:text-2xl">
        Welcome to the captivating world of Myrian, where professional
        bellydance artistry meets over 15 years of expertise. Immerse yourself
        in the rhythmic fusion of flamenco roots, diverse international dance
        styles, and enchanting performances. Elevate your event with the magic
        of Myrian{"'"}s mesmerizing performances – a celebration of dance,
        culture, and pure entertainment.
      </div>

      {/* Landing links */}
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
