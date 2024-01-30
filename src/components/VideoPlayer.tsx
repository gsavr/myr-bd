//api call to YouTube channel ID - UCF4Sp7CkKg3MZ9TCAtul3NQ; playlist ID - UUF4Sp7CkKg3MZ9TCAtul3NQ

const YOUTUBE_PLAYLIST_ITEMS_API =
  "https://www.googleapis.com/youtube/v3/playlistItems";

let data: any;

try {
  const res = await fetch(
    `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=30&playlistId=UUF4Sp7CkKg3MZ9TCAtul3NQ&key=${process.env.YOUTUBE_API_KEY}`,
  );
  data = await res.json();
} catch (error) {
  console.error("Error fetching YouTube data:", error);
  // Handle error
}

/* video player with all videos up to 30 of latest - from youtube channel */
export const VideoPlayer: React.FC = () => {
  return (
    <>
      {data.items.map((item: any) => {
        //console.log(item);
        const { id, snippet = {} } = item;
        const { resourceId } = snippet;
        const { videoId } = resourceId;
        return (
          <iframe
            key={id}
            className="h-[255px] w-full rounded-lg py-5 shadow-lg md:h-[420px] md:w-4/5 lg:w-2/3"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        );
      })}{" "}
    </>
  );
};

///
