//api call to YouTube channel ID - UCF4Sp7CkKg3MZ9TCAtul3NQ; playlist ID - UUF4Sp7CkKg3MZ9TCAtul3NQ

const YOUTUBE_PLAYLIST_ITEMS_API =
  "https://youtube.googleapis.com/youtube/v3/playlistItems";

let data: any;
let error = "";

try {
  const res = await fetch(
    `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=30&playlistId=UUF4Sp7CkKg3MZ9TCAtul3NQ&key=${process.env.YOUTUBE_API_KEY}`,
  );
  data = await res.json();
} catch (error) {
  console.error("Error fetching YouTube data:", error);
  // Handle error
  error = "Error found";
}

/* video player with all videos up to 30 of latest - from youtube channel */
export const VideoPlayer: React.FC = () => {
  return (
    <>
      {error === "Error found" && <div>Please Reload Page</div>}
      {data.items.map((item: any) => {
        //console.log(item);
        const { id, snippet = {} } = item;
        const { resourceId } = snippet;
        const { videoId } = resourceId;
        console.log(snippet);
        return (
          <iframe
            key={id}
            className="h-[255px] w-full rounded-lg py-5 shadow-lg md:h-[420px] lg:w-2/3"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        );
      })}
    </>
  );
};

///
//[YOUR_API_KEY]
