import { Aboreto } from "next/font/google";
import { VideoPlayer } from "@/components/VideoPlayer";

const abor = Aboreto({ weight: "400", subsets: ["latin"] });

export default function Videos() {
  return (
    <div className="w-full">
      <div className="flex w-full flex-col items-center overflow-hidden ">
        <div>
          <h2 className={`${abor.className} py-5 text-4xl`}>Videos</h2>
        </div>
        {/* All youtube videos */}
        <VideoPlayer />

        <div className={`${abor.className}  pt-8 `}>
          Find all my videos at the links below
        </div>
      </div>
    </div>
  );
}
