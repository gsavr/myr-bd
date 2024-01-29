import { Aboreto } from "next/font/google";
import { VideoPlayer } from "@/components/VideoPlayer";
import { videos } from "@/assets/videos-list";

const abor = Aboreto({ weight: "400", subsets: ["latin"] });

export default function Videos() {
  return (
    <div className="h-[1800px] w-full">
      <div className="flex h-[1800px] w-full flex-col items-center">
        <div>
          <h2 className={`${abor.className} py-5 text-4xl`}>Videos</h2>
        </div>
        {videos.map((idLink) => (
          <VideoPlayer key={idLink} videoId={idLink} />
        ))}
        <div className={`${abor.className} -mb-11 pt-8`}>
          Find all my videos at the links below
        </div>

        <div></div>
      </div>
    </div>
  );
}
