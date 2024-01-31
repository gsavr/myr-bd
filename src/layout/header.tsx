import Link from "next/link";
import { charm } from "@/assets/fonts/fonts";
import { Nav } from "@/components/Nav";

export function Header() {
  return (
    <div className="z-10 mb-36  flex w-full max-w-5xl items-center justify-between pt-2  text-3xl lg:mb-2 lg:flex lg:text-5xl">
      <div className="fixed left-0 top-0 flex !w-full max-w-5xl flex-col items-center justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-2 pt-0 backdrop-blur-2xl lg:static lg:w-auto lg:border lg:bg-gray-200 lg:p-4  lg:pb-0 lg:drop-shadow-sm dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:dark:bg-zinc-800/30">
        <Link className="mt-11 text-center md:-mb-3" href="/">
          <h1 className="font-arabic"> Myrian Bellydancing</h1>
          <h2
            className={`${charm.className} -mt-3 mb-2 hidden text-xl md:block `}
          >
            Experience Elegant and Enchanting Bellydance Performances in Austin,
            TX
          </h2>
          <h2
            className={`${charm.className} -mt-3 mb-2 block text-xl md:hidden `}
          >
            Austin, TX
          </h2>
        </Link>
        <Nav />
      </div>
      <div className="fixed bottom-0 left-0 -z-40 flex h-[1px] w-full items-end justify-center lg:static lg:h-auto lg:w-auto lg:bg-none"></div>
    </div>
  );
}
