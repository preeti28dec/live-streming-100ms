import { HMSRoomProvider } from "@100mslive/react-sdk";
import App from "../components/app";
export default function Home() {
  return (
    <HMSRoomProvider>
      <App/>
    </HMSRoomProvider>
  );
}
