import Image from "next/image";
import landingPhoto from "../assets/images/photos/3/red.webp";
import Link from "next/link";
import { alegThin, abor } from "@/assets/fonts/fonts";

const bottomLinks = [
  { to: "/about", main: "About", second: "More about me." },
  { to: "/photos", main: "Photos", second: "Browse my Gallery." },
  { to: "videos", main: "Videos", second: "Watch me in action." },
  {
    to: "/book",
    main: "Hire me",
    second: <h3>Serving Austin, San Antonio, Houston, Dallas</h3>,
  },
];

export default function Home() {
  return (
    <>
      <div className={``}>
        {/* Hero */}
        <Image
          className="relative rounded-sm drop-shadow-md dark:brightness-90 dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
          src={landingPhoto}
          alt="Myrian"
          priority
        />
      </div>
      {/* intro */}
      <div style={alegThin.style} className="pb-4 pt-8 text-lg lg:text-2xl">
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
        {bottomLinks.map((link) => {
          return (
            <Link key={link.main} href={link.to} className="main-link group">
              <h2 className={`h2`}>
                {link.main}{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <span className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                {link.second}
              </span>
            </Link>
          );
        })}
      </nav>
    </>
  );
}
