import React from 'react';

import Button from '../components/button/Button';
import { Link } from './Link';

export { Page };

function Page({ is404 }: { is404: boolean }) {
  return (
    <section className="container px-4 mx-auto py-20">
      <div className="mx-auto text-center">
        <span className="text-xs font-semibold text-gray-500 uppercase">
          {is404 ? "404" : "500"}
        </span>
        <h2 className="mt-8 mb-10 text-4xl font-semibold font-heading">
          {is404 ? "Page Not Found" : "Internal Server Error"}
        </h2>
        <p className="mb-12 text-xl text-gray-500">
          {is404
            ? "Sorry! We are unable to find the page you are looking for"
            : "Something went wrong."}
        </p>
        <Link href="/" className="inline-block">
          <Button>Go back to Homepage</Button>
        </Link>
      </div>
    </section>
  );
}
