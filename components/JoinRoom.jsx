import { useHMSActions } from "@100mslive/react-sdk";
import { useState } from "react";

function JoinRoom() {
  const hmsActions = useHMSActions();
  const [inputValues, setInputValues] = useState({
    name: "",
    token: "",
    role: "",
  });

  console.log(hmsActions);
  const handleInputChange = (e) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    hmsActions.join({
      userName: inputValues.name,
      authToken: inputValues.token,
      role: inputValues.role,
    });
  };
  return (
    <form className="join" onSubmit={handleSubmit}>
      <h2>Join Room</h2>
      <input
        required
        value={inputValues.name}
        onChange={handleInputChange}
        id="name"
        type="text"
        name="name"
        placeholder="Your name"
      />
      <input
        required
        value={inputValues.token}
        onChange={handleInputChange}
        id="token"
        type="text"
        name="token"
        placeholder="Auth token"
      />
      <select
        type="text"
        required
        id="role"
        name="role"
        value={inputValues.role}
        onChange={handleInputChange}
        placeholder="Select Role"
      >
        <option>broadcaster</option>
        <option>hls-viewer</option>
      </select>
      <button className="join-btn">Join</button>
    </form>
  );
}

export default JoinRoom;
