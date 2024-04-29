import { VideoPlayer } from "@/components/VideoPlayer";
import { abor } from "@/assets/fonts/fonts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Videos | Myrian Bellydancing Austin",
  description: "Browse videos of me performing belly dance",
};

let data: any;
let error = "";

export default async function Videos() {
  try {
    const res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=30&playlistId=UUF4Sp7CkKg3MZ9TCAtul3NQ&key=${process.env.YOUTUBE_API_KEY}`,
      { next: { revalidate: 60 } },
    );
    data = await res.json();
  } catch (error) {
    console.error("Error fetching YouTube data:", error);
    // Handle error
    error = "Error found";
  }

  return (
    <div className="w-full">
      <div className="flex w-full flex-col items-center overflow-hidden ">
        <div>
          <h2 className={`${abor.className} py-5 text-4xl`}>Videos</h2>
        </div>
        {/* All youtube videos */}
        <VideoPlayer data={data} error={error} />

        <div className={`${abor.className}  pt-8 `}>
          Find all my videos at the links below
        </div>
      </div>
    </div>
  );
}
