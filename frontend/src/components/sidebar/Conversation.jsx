const Conversation = () => {
  return (
    <>
      <div className="flex gap-2 items-center hover:bg-primary rounded p-2 py-1 cursor-pointer">
        <div className=" avatar online">
          <div className="w-12 rounded-full">
            <img
              src="https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png"
              alt=""
            />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-accent">
              John Doe
            </p>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default Conversation;
