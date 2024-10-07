const SignUp = () => {
  return (
    <div className="mx-auto flex min-w-96 flex-col items-center justify-center">
      <div className="h-full w-full p-4 bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100">
        <h1 className="text-center text-3xl font-semibold text-gray-300">
          <span className="text-blue-500">ChatScape</span>
        </h1>
        <h1 className="text-center text-2xl font-semibold text-gray-300">
          <span>SignUp</span>
        </h1>
        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-accent">
                Display Name
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter Display Name"
              className="w-full input input-bordered input-primary h-10"
            ></input>
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text text-accent">
                Username
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full input input-bordered input-primary h-10"
            ></input>
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text text-accent">
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered input-primary h-10"
            ></input>
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text text-accent">
                Confirm Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter Password Again"
              className="w-full input input-bordered input-primary h-10"
            ></input>
          </div>

          <a
            href="#"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-primary"
          >
            Already have an Account?
          </a>

          <div>
            <button className="btn btn-block btn-outline btn-primary btn-sm mt-2">
              SignUp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
