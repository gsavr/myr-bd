export function Header() {
  return (
    <div className="font-arabic z-10 mb-20 flex w-full max-w-5xl items-center justify-between pt-2 text-3xl lg:mb-2 lg:flex lg:text-5xl">
      <div className="fixed left-0 top-0 flex !w-full max-w-5xl justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-2 pt-0 backdrop-blur-2xl lg:static lg:w-auto lg:border lg:bg-gray-200 lg:p-4  lg:pb-0 lg:drop-shadow-sm dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:dark:bg-zinc-800/30">
        <span className="mt-9"> Myrian Bellydancing</span>
      </div>
      <div className="fixed bottom-0 left-0 -z-40 flex h-[1px] w-full items-end justify-center lg:static lg:h-auto lg:w-auto lg:bg-none"></div>
    </div>
  );
}