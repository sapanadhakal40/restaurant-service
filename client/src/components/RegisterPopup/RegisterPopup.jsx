/* eslint-disable react/prop-types */
import { useState } from 'react'



const RegisterPopup = ({setShowRegister, setShowLogin }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleRegister = () => {
        if (name && email && password === confirmPassword) {
            alert("Registered successfully");
            setShowRegister(false);
        }else{
            alert("Please enter all fields correctly");
        }
    };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-8 rounded-lg shadow-lg w-80 relative">

            <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            onClick={() => setShowRegister(false)}
            >
                ✖
</button>

            <h2 className="text-2xl font-bold mb-4">Create Account</h2>

            <input type='text' placeholder='Name' className='w-full p-2 mb-4 border border-gray-300 rounded'
            value={name}
            onChange={(e) => setName(e.target.value)}
            />

            <input type='email' placeholder='Email' className='w-full p-2 mb-4 border border-gray-300 rounded'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />

            <input type='password' placeholder='Password' className='w-full p-2 mb-4 border border-gray-300 rounded'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />

            <input type='password' placeholder='Confirm Password' className='w-full p-2 mb-4 border border-gray-300 rounded'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <button className='bg-orange-400 text-white px-4 py-2 rounded hover:bg-orange-600'
            onClick={handleRegister}
            >
                Register
           </button>

            <p className='text-center text-sm text-gray-600 mt-4'>
                Already have an account? 
                <a className='font-medium text-blue-600 hover:text-blue-500 underline cursor-pointer'
                onClick={() => {
                    setShowRegister(false);
                    setShowLogin(true);
                }}
                >
                    Login
           </a>
          </p>
         </div>

    </div>
  )
}

export default RegisterPopup
