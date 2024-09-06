import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="flex h-screen">
      {/* Left Side - Image */}
      <div className="w-1/2 bg-gray-100">
        <img src="/src/assets/auth.png" alt="Register" className="object-cover w-full h-full" />
      </div>

      {/* Right Side - Form */}
      <div className="w-1/2 flex flex-col justify-center px-16 bg-white">
        <h2 className="text-3xl font-bold mb-6">Create an Account</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
            <input type="text" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600" placeholder="John Doe" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input type="email" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600" placeholder="example@mail.com" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input type="password" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600" placeholder="********" />
          </div>
          <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-200">Register</button>
        </form>
        <p className="mt-4 text-sm text-gray-600">Already have an account? <Link to="/signin" className="text-indigo-600 hover:underline">Sign In</Link></p>
      </div>
    </div>
  );
};

export default Register;