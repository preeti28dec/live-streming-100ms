import { useVideo } from "@100mslive/react-sdk";

function VideoTile({ peer, peers ,name}) {
  const { videoRef } = useVideo({
    trackId: peer.videoTrack,
  });
  
  const numberOfBroadCasters = () => {
    const broadcasters = peers.filter((peer) => {
      return peer.roleName === "broadcaster";
    });
    return broadcasters.length;
  };
  console.log(name,"name");

  return (
    <>
      <video
        ref={videoRef}
        className={numberOfBroadCasters() >= 2 ? "video" : ""}
        autoPlay
        muted
        playsInline
      />

      <div className="peer-name">
        {name} {peer.isLocal ? "(You)" : ""}
      </div>
    </>
  );
}

export default VideoTile;
