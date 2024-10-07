import { useState } from 'react';
import { Link } from 'react-router-dom';
import useSignup from '../../hooks/useSignup';

const SignUp = () => {
  const [inputs, setInputs] = useState({
    displayName: '',
    username: '',
    password: '',
    confirmPassword: ''
  });

  const { loading, signup } = useSignup();

  const handleSubmit = async e => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <div className="mx-auto flex min-w-96 flex-col items-center justify-center">
      <div className="h-full w-full p-4 bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100">
        <h1 className="text-center text-3xl font-semibold text-gray-300">
          <span className="text-blue-500">ChatScape</span>
        </h1>
        <h1 className="text-center text-2xl font-semibold text-gray-300">
          <span>SignUp</span>
        </h1>
        <form onSubmit={handleSubmit}>
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
              value={inputs.displayName}
              onChange={e =>
                setInputs({
                  ...inputs,
                  displayName: e.target.value
                })
              }
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
              value={inputs.username}
              onChange={e =>
                setInputs({
                  ...inputs,
                  username: e.target.value
                })
              }
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
              value={inputs.password}
              onChange={e =>
                setInputs({
                  ...inputs,
                  password: e.target.value
                })
              }
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
              value={inputs.confirmPassword}
              onChange={e =>
                setInputs({
                  ...inputs,
                  confirmPassword: e.target.value
                })
              }
            ></input>
          </div>

          <Link
            to="/login"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-primary"
          >
            Already have an Account?
          </Link>

          <div>
            <button
              className="btn btn-block btn-outline btn-primary btn-sm mt-2"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                'Sign Up'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
