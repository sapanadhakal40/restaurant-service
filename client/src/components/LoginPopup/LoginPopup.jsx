/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify';

const LoginPopup = ({ setShowLogin, setShowRegister, setIsLoggedIn, setUser }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        if (email && password) {
            try {
                const response = await axios.post('http://localhost:5000/api/user/login', {
                    email,
                    password,
                });


                console.log('Response:', response.data);

                if (response.data.success) {
                  // Store token and user data
                  localStorage.setItem('token', response.data.token);
                  localStorage.setItem('user', JSON.stringify(response.data.user));
                  
                  // Update state
                  setIsLoggedIn(true);
                  setUser(response.data.user);
                  
                  toast.success('Logged in successfully!');
                  setShowLogin(false);
              }
          } catch (error) {
              console.error('Login error:', error);
              const errorMessage = error.response?.data?.message || 'Error logging in';
              toast.error(errorMessage);
          }
      } else {
          toast.error('Please enter email and password');
      }
  };


    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-80 relative">
                <button
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                    onClick={() => setShowLogin(false)}
                >
                    ✖
                </button>
                <h2 className="text-2xl font-bold mb-4">Login</h2>
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-2 mb-4 border border-gray-300 rounded"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-2 mb-4 border border-gray-300 rounded"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button 
                    className="bg-orange-400 text-white px-4 py-2 rounded hover:bg-orange-600"
                    onClick={handleLogin}
                >
                    Login
                </button>
                
                <p className="text-center text-sm text-gray-600 mt-4">
                    If you don't have an account?{" "}
                    <a 
                        className="font-medium text-blue-600 hover:text-blue-500 underline cursor-pointer"
                        onClick={() => {
                            setShowLogin(false);
                            setShowRegister(true);
                        }}
                    >
                        Create Account
                    </a>
                </p>
            </div>
        </div>
    );
};

export default LoginPopup;