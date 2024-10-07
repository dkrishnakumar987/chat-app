const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            src="https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png"
            alt="avatar"
          />
        </div>
      </div>

      <div className="chat-bubble text-white bg-primary">
        Bing Chilling?
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        12:45
      </div>
    </div>
  );
};

export default Message;
