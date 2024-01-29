import { Aboreto } from "next/font/google";

const abor = Aboreto({ weight: "400", subsets: ["latin"] });

export default function Reviews() {
  return (
    <div className="h-[1800px] w-full">
      <div className="flex h-[1800px] w-full flex-col items-center">
        <div>
          <h2 className={`${abor.className} py-5 text-4xl`}>Client Reviews</h2>
        </div>

        <div></div>
      </div>
    </div>
  );
}
