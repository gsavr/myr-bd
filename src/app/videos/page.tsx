import { VideoPlayer } from "@/components/VideoPlayer";
import { abor } from "@/assets/fonts/fonts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Videos | Myrian Bellydancing Austin",
  description: "Browse videos of me performing belly dance",
};

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
