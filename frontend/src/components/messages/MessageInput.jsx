import { LuSendHorizonal } from 'react-icons/lu';

const MessageInput = () => {
  return (
    <form className="px-4 my-3">
      <div className="w-full relative">
        <input
          type="text"
          placeholder="Enter Message"
          className="input input-bordered rounded-lg w-full p-2.5 text-white"
        />

        <button
          type="submit"
          className="btn btn-outline btn-primary absolute inset-y-0 end-0 flex items-center pe-3"
        >
          <LuSendHorizonal />
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
