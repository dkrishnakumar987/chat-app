import useConversation from '../../zustand/useConversation';
import SvgDisplay from './SVGDisplay';
import { useSocketContext } from '../../context/SocketContext';

const Conversation = ({ conversation, lastIdx }) => {
  const { selectedConversation, setSelectedConversation } =
    useConversation();

  const isSelected =
    selectedConversation?._id === conversation._id;
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);
  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-primary rounded p-2 py-1 cursor-pointer
      ${isSelected ? 'bg-primary' : ''}
			`}
        onClick={() =>
          setSelectedConversation(conversation)
        }
      >
        <div
          className={`avatar ${isOnline ? 'online' : ''}`}
        >
          <div className="w-12 rounded-full">
            <SvgDisplay svgData={conversation.profilePic} />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-accent">
              {conversation.displayName}
            </p>
          </div>
        </div>
      </div>

      {!lastIdx && (
        <div className="divider my-0 py-0 h-1" />
      )}
    </>
  );
};

export default Conversation;
