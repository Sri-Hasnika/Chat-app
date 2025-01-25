import { useChatStore } from "../store/useChatStore";

import Sidebar from "../components/Sidebar";
import NoChatSelected from "../components/NoChatSelected";
import ChatContainer from "../components/ChatContainer";
<<<<<<< HEAD
import MediaPlaceHolder from "../components/MediaPlaceHolder";
=======
>>>>>>> ed4c13e0cb2047af07a6c50ff63b052a5b41a767

const HomePage = () => {
  const { selectedUser } = useChatStore();

  return (
    <div className="h-screen bg-base-200">
      <div className="flex items-center justify-center pt-20 px-4">
        <div className="bg-base-100 rounded-lg shadow-cl w-full max-w-6xl h-[calc(100vh-8rem)]">
          <div className="flex h-full rounded-lg overflow-hidden">
            <Sidebar />

<<<<<<< HEAD
            {
              !selectedUser ? <NoChatSelected /> : <ChatContainer />
            }
=======
            {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
>>>>>>> ed4c13e0cb2047af07a6c50ff63b052a5b41a767
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;