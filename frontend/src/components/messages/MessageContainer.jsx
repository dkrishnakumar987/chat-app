import Messages from './Messages';
import MessageInput from './MessageInput';
import { TiMessages } from 'react-icons/ti';
import useConversation from '../../zustand/useConversation';
import { useEffect } from 'react';
import { useAuthContext } from '../../context/AuthContext';

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } =
    useConversation();

  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className="md:min-w-[450px] flex flex-col">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Header */}
          <div className="bg-slate-500 px-4 py-2 mb-2">
            <span className="text-gray-900 font-bold">
              {selectedConversation.displayName}
            </span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

const NoChatSelected = () => {
  const { authUser } = useAuthContext();

  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-300 font-semibold flex flex-col items-center gap-2">
        <p>👋 Welcome {authUser.displayName}</p>
        <p>Select a Chat To Start Messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};

export default MessageContainer;
