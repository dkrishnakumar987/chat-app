import { LuSendHorizonal } from 'react-icons/lu';
import useSendMessage from '../../hooks/useSendMessage';
import { useState } from 'react';

const MessageInput = () => {
  const [message, setMessage] = useState('');
  const { loading, sendMessage } = useSendMessage();

  const handleSubmit = async e => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage('');
  };

  return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
      <div className="w-full relative">
        <input
          type="text"
          placeholder="Enter Message"
          className="input input-bordered rounded-lg w-full p-2.5 text-white"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />

        <button
          type="submit"
          className="btn btn-outline btn-primary absolute inset-y-0 end-0 flex items-center pe-3"
        >
          {loading ? (
            <div className="loading loading-spinner"></div>
          ) : (
            <LuSendHorizonal />
          )}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
