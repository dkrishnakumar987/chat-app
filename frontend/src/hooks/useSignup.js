import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

const useSignup = () => {
  const [loading, setLoading] = useState(false);

  const { setAuthUser } = useAuthContext();

  const signup = async ({
    displayName,
    username,
    password,
    confirmPassword
  }) => {
    const success = handleInputErrors({
      displayName,
      username,
      password,
      confirmPassword
    });
    if (!success) return;

    setLoading(true);
    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          displayName,
          username,
          password,
          confirmPassword
        })
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.setItem(
        'chat-user',
        JSON.stringify(data)
      );
      setAuthUser(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

function handleInputErrors({
  displayName,
  username,
  password,
  confirmPassword
}) {
  if (
    !displayName ||
    !username ||
    !password ||
    !confirmPassword
  ) {
    toast.error('All fields are required');
    return false;
  }

  if (password !== confirmPassword) {
    toast.error('Passwords do not match');
    return false;
  }

  if (password.length < 6) {
    toast.error('Password must be at least 6 characters');
    return false;
  }

  return true;
}

export default useSignup;
