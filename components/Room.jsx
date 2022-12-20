import Stream from "./Stream";
import ChatNdParticipants from "./ChatNDParticipants";
import Controls from "./Controls";

function Room() {
  return (
    <div className="room">
      <div className="room__streamSpace">
        <Stream />
        <Controls />
      </div>
      <ChatNdParticipants />
    </div>
  );
}

export default Room;
