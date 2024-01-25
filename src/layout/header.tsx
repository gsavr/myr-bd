export function Header() {
  return (
    <div className="z-10 flex w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
      <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200  lg:p-4 dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:dark:bg-zinc-800/30">
        Myrian Bellydancing
      </p>
      <div className="fixed bottom-0 left-0 -z-40 flex h-[1px] w-full items-end justify-center lg:static lg:h-auto lg:w-auto lg:bg-none"></div>
    </div>
  );
}
