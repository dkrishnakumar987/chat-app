import { useState } from 'react';
import { Link } from 'react-router-dom';
import useLogin from '../../hooks/useLogin';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { loading, login } = useLogin();

  const handleSubmit = async e => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div className="mx-auto flex min-w-96 flex-col items-center justify-center">
      <div className="h-full w-full p-4 bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100">
        <h1 className="text-center text-3xl font-semibold text-gray-300">
          <span className="text-blue-500">ChatScape</span>
        </h1>
        <h1 className="text-center text-2xl font-semibold text-gray-300">
          <span>Login</span>
        </h1>
        <form onSubmit={handleSubmit}>
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
              value={username}
              onChange={e => setUsername(e.target.value)}
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
              value={password}
              onChange={e => setPassword(e.target.value)}
            ></input>
          </div>

          <Link
            to="/signup"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-primary"
          >
            {"Don't"} have an Account?
          </Link>

          <div>
            <button
              className="btn btn-block btn-outline btn-primary btn-sm mt-2"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner "></span>
              ) : (
                'Login'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
