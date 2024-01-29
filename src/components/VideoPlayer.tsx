type VideoPlayerProps = {
  videoId: string;
};

export const VideoPlayer: React.FC<VideoPlayerProps> = (props) => {
  const { videoId } = props;

  return (
    <iframe
      className=" h-full w-full rounded-lg py-5 shadow-lg"
      src={`https://www.youtube.com/embed/${videoId}`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};
