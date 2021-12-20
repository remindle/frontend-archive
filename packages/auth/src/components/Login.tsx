import './Button.css';

import React from 'react';
import { Link } from 'react-router-dom';

const Login = ({ onLogin }) => (
  <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg rounded">
      <h3 className="text-2xl font-bold text-center">Login to your account</h3>
      <form action="">
        <div className="mt-4">
          <div>
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>
          <div className="flex items-baseline justify-between">
            <button className="remote-btn px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">
              Login
            </button>
            <Link to="/auth/register" className="text-sm text-blue-600 hover:underline">
              Want to register?
            </Link>
          </div>
        </div>
      </form>
    </div>
  </div>
);

export default Login;
