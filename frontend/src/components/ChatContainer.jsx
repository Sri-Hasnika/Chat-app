import { useEffect, useRef } from "react";
import { useChatStore } from "../store/useChatStore";
import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";
import MessageSkeleton from "./skeletons/MessageSkeleton";
import { useAuthStore } from "../store/useAuthStore";
import { formatMessageTime } from "../lib/utils";
import './ChatContainer.css'

const ChatContainer = () => {
  const {messages, getMessages, isMessagesLoading, selectedUser, subscribeToMessages, unsubscribeToMessages, } = useChatStore();

  const { authUser } = useAuthStore();
  const messageEndRef = useRef(null);

  useEffect(() => {
    getMessages(selectedUser._id);
    subscribeToMessages();

    return () => unsubscribeToMessages(); // Cleanup: Unsubscribe from updates when the component unmounts or the selected user changes.
  }, [selectedUser._id, getMessages, unsubscribeToMessages, subscribeToMessages]);

  useEffect(() => {
    if (messageEndRef.current && messages) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" }); // Smoothly scroll to the bottom of the message list.
    }
  }, [messages]);

  if (isMessagesLoading) {
    return (
      <div className="flex flex-col h-full w-5/6">
        <ChatHeader />
        <div className="flex-1 overflow-y-auto p-4 space-y-1 spacescrollbar">
          <MessageSkeleton /> {/*shows the loading state */}
        </div>
        <MessageInput />
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full w-5/6">
      {/* Chat Header */}
      <div className="z-50">
        <ChatHeader />
      </div>

      {/* Messages Section */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 spacescrollbar">
        {messages.length === 0 && (
          <div className="flex-col items-center justify-center h-full">
            <MessageSkeleton />
            <p className="text-center text-gray-700">
              No Messages. Start messaging.
            </p>
          </div>
        )}
        {messages.map((message) => (
          <div
            key={message._id}
            className={`chat ${message.senderId === authUser._id ? "chat-end" : "chat-start"}`}
          >
            {
              message.senderId !==  authUser._id && <div className="chat-image avatar">
              <div className="size-10 rounded-full border">
                <img
                  src={
                    message.senderId === authUser._id
                      ? authUser.profilePic || "/avatar.png"
                      : selectedUser.profilePic || "/avatar.png"
                  }
                  alt="profile pic"
                />
              </div>
            </div> 
            }
            <div className="chat-header mb-1">
              <time className="text-xs opacity-50 ml-1">
                {formatMessageTime(message.createdAt)}
              </time>
            </div>
            <div className="chat-bubble flex flex-col">
              {message.image && (
                <a href={message.image} target="_blank" rel="noopener noreferrer"> {/* helps in opening the image when a image is clicked */}
                  <img
                    src={message.image}
                    alt="Attachment"
                    className="sm:max-w-[200px] rounded-md mb-2"
                  />
                </a>
              )}
              {message.text && <p>{message.text}</p>}
            </div>
          </div>
        ))}
        <div ref={messageEndRef}></div>
      </div>

      {/* Message Input */}
      <div className="z-50">
        <MessageInput />
      </div>
    </div>
  );
};

export default ChatContainer;
