import HlsView from "./HlsView";
import VideoTile from './VideoTile';
import {
  selectLocalPeer,
  selectPeers,
  useHMSStore,
} from "@100mslive/react-sdk";

function Stream() {
  const peers = useHMSStore(selectPeers);
  const localPeer = useHMSStore(selectLocalPeer);
  console.log(peers);

  return (
    <div className="stream">
      {localPeer.roleName === "broadcaster" &&
        peers
          .filter((peer) => peer.roleName === "broadcaster")
          .map((peer) => (
              <VideoTile key={peer.id} peer={peer} peers={peers} />
          ))}
      {localPeer.roleName === "hls-viewer" && <HlsView />}
    </div>
  );
}

export default Stream;
