import React from 'react';
import Head from 'next/head';

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans antialiased">
      <Head>
        <title>Contact Us - MyStore</title>
        <meta name="description" content="Get in touch with the MyStore team. We'd love to hear from you." />
      </Head>

      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          {/* Main heading and description */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're here to help! Please fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>

          {/* Contact form */}
          <div className="bg-white shadow-xl rounded-2xl p-8 sm:p-12">
            <form id="contact-form" method="POST" className="grid grid-cols-1 gap-y-6">
              {/* Name field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-lg bg-gray-50"
                  />
                </div>
              </div>

              {/* Email field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-lg bg-gray-50"
                  />
                </div>
              </div>

              {/* Message field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-lg bg-gray-50"
                  ></textarea>
                </div>
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full bg-blue-600 border border-transparent rounded-lg py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors shadow-lg"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

      {/* Note: In a real project, you would include your Navbar and Footer components here. */}
    </div>
  );
}