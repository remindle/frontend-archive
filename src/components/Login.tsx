import React, { useState } from 'react';

import Button from './button/Button';
import Input from './input/Input';

function Login() {
  const [count, setCount] = useState(0);

  return (
    <section className="flex flex-col flex-grow justify-center">
      <img
        className="hidden lg:block absolute top-0 left-0 mt-16 w-1/5"
        src="src/backgrounds/primary-circle-fade.svg"
        alt=""
      />
      <img
        className="hidden lg:block absolute bottom-0 right-0 mb-20 w-1/6"
        src="src/backgrounds/secondary-circle-fade.svg"
        alt=""
      />
      <div className="container px-4 mx-auto">
        <div className="max-w-md mx-auto py-6 lg:py-8 px-4 lg:px-8 dark:bg-white dark:border rounded-xl text-center">
          <span className="inline-block mb-8 text-xs text-primary font-semibold">
            Sign Up
          </span>
          <h3 className="mb-12 text-3xl font-semibold font-heading text-tetriary-light">
            Create new account
          </h3>
          <form action="#">
            <div className="flex flex-wrap -mx-2">
              <div className="relative w-full lg:w-1/2 px-2 flex flex-wrap mb-6">
                <Input
                  className="relative mb-2 md:mb-0 w-full py-4 pl-4 text-sm border rounded"
                  type="text"
                  placeholder="John"
                />
                <span className="absolute top-0 left-0 ml-4 -mt-2 px-1 inline-block bg-white text-gray-500 text-xs">
                  First name
                </span>
              </div>
              <div className="relative w-full lg:w-1/2 px-2 flex flex-wrap mb-6">
                <Input
                  className="relative mb-2 md:mb-0 w-full py-4 pl-4 text-sm border rounded"
                  type="text"
                  placeholder="Doe"
                />
                <span className="absolute top-0 left-0 ml-4 -mt-2 px-1 inline-block bg-white text-gray-500 text-xs">
                  Last name
                </span>
              </div>
            </div>
            <div className="relative flex flex-wrap mb-6">
              <Input
                className="relative mb-2 md:mb-0 w-full py-4 pl-4 text-sm border rounded"
                type="email"
                placeholder="e.g hello@remindle.io"
              />
              <span className="absolute top-0 left-0 ml-4 -mt-2 px-1 inline-block bg-white text-gray-500 text-xs">
                Email address
              </span>
            </div>
            <div className="relative flex flex-wrap mb-6">
              <Input
                className="relative mb-2 md:mb-0 w-full py-4 pl-4 text-sm border rounded"
                type="password"
                placeholder="********"
              />
              <span className="absolute top-0 left-0 ml-4 -mt-2 px-1 inline-block bg-white text-gray-500 text-xs">
                Password
              </span>
            </div>
            <label className="inline-flex mb-5 text-left">
              <input className="mr-2" type="checkbox" name="terms" value="1" />
              <span className="-mt-1 inline-block text-sm text-gray-500">
                By signing up, you agree to our{" "}
                <a className="text-primary hover:underline" href="#">
                  Terms &amp; Agreements
                </a>
                .
              </span>
            </label>
            <Button className="mb-8">Sign up</Button>
          </form>
          <p className="text-sm text-gray-500">
            <span>Already have an account? </span>
            <a className="text-primary font-semibold hover:underline" href="#">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Login;
