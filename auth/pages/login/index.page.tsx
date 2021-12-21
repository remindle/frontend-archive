import React from 'react';
import { PageContextBuiltIn } from 'vite-plugin-ssr';

import Button from '../../../components/button/Button';
import Input from '../../../components/input/Input';
import { Link } from '../../../renderer/Link';

function Page() {
  return (
    <section>
      <img
        className="hidden lg:block absolute bottom-0 left-0 mb-32 w-1/5"
        src="/assets/backgrounds/primary-circle-fade.svg"
        alt="primary-circle"
      />
      <img
        className="hidden lg:block absolute top-0 right-0 mt-20 w-1/6"
        src="/assets/backgrounds/secondary-circle-fade.svg"
        alt="secondary-circle"
      />
      <div className="container px-4 mx-auto">
        <div className="max-w-md mx-auto py-6 lg:py-8 px-4 lg:px-8 dark:bg-white dark:border rounded-xl text-center">
          <span className="inline-block mb-8 text-xs text-primary font-semibold">
            Sign In
          </span>
          <h3 className="mb-12 text-3xl font-semibold font-heading text-tetriary-light">
            Log in to your account
          </h3>
          <form action="#">
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
            <Button className="mb-8">Sign in</Button>
          </form>
          <p className="text-sm text-gray-500">
            <span>Don't have an account? </span>
            <Link
              className="text-primary font-semibold hover:underline"
              href="/auth/register"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

async function onBeforeRender(pageContext: PageContextBuiltIn) {
  await delay(500).then(() => console.log("ran on client"));

  return {
    pageContext: {
      documentProps: {
        title: "Login",
      },
    },
  };
}

function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

export { Page, onBeforeRender };
