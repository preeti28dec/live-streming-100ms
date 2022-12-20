import JoinRoom from './JoinRoom'
import Room from './Room';

import { useHMSStore, selectIsConnectedToRoom } from '@100mslive/react-sdk';

function App() {
  const isConnected = useHMSStore(selectIsConnectedToRoom)
  return (
    <div className="App wrapper"> 
      {isConnected
        ? <Room />
        : <JoinRoom />
      }
    </div>
  );
}

export default App;