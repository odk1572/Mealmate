import React from 'react';

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-6 bg-white rounded-lg shadow-md max-w-lg w-full">
        <h1 className="text-4xl font-bold text-red-600">Error 404</h1>
        <p className="text-lg text-gray-700 mt-4">Oops! The page you're looking for could not be found.</p>
        <a 
          href="/" 
          className="mt-6 inline-block px-6 py-2 text-white bg-blue-500 rounded-full hover:bg-blue-600 transition"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
