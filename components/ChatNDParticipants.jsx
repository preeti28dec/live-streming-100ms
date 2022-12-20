import Message from "./Message";
import {
  selectHMSMessages,
  useHMSActions,
  useHMSStore,
} from "@100mslive/react-sdk";
import { selectPeers } from "@100mslive/react-sdk";
import { useState } from "react";
import InputEmoji from "react-input-emoji";

function ChatNdParticipants() {
  const [selectedOption, setSelectedOption] = useState("chat");
  const [message, setMessage] = useState("");
  const messages = useHMSStore(selectHMSMessages);
  const hmsActions = useHMSActions();
  const peers = useHMSStore(selectPeers);

  const handleSubmit = (e) => {
    hmsActions.sendBroadcastMessage(message);
    setMessage("");
  };

  return (
    <div className="rightBox">
      <div className="rightBox__head">
        <span
          onClick={() => setSelectedOption("chat")}
          className={selectedOption === "chat" ? "selected" : ""}
        >
          Chat
        </span>
        <span
          className={selectedOption === "participants" ? "selected" : ""}
          onClick={() => setSelectedOption("participants")}
        >
          Participants
        </span>
      </div>
      <div className="rightBox__optionView">
        {selectedOption === "chat" && (
          <>
            <div className="rightBox__chats scroll-y">
              {/* Messages */}
              {messages.map((msg) => (
                <Message key={msg.id} message={msg} />
              ))}
            </div>
            <InputEmoji
              value={message}
              onChange={setMessage}
              cleanOnEnter
              onEnter={handleSubmit}
              placeholder="Type a message"
            />
          </>
        )}
        {selectedOption === "participants" && (
          <div className="rightBox__participants">
            {/* Participants */}
            {peers.map((peer) => (
              <div className="rightBox__participant" key={peer.id}>
                {peer.name}
                <p>{peer.roleName}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ChatNdParticipants;
