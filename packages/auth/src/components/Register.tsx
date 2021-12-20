import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => (
  <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg rounded">
      <h3 className="text-2xl font-bold text-center">Register your account</h3>
      <form action="">
        <div className="mt-4">
          <div>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="fullname"
              placeholder="Full Name"
            />

            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
            />

            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
            />
            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="confirm_password"
              placeholder="Confirm Password"
            />
          </div>
          <div className="flex items-baseline justify-between">
            <button className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">
              Register
            </button>
            <Link to="/auth/login" className="text-sm text-blue-600 hover:underline">
              Want to login?
            </Link>
          </div>
        </div>
      </form>
    </div>
  </div>
);

export default Register;
