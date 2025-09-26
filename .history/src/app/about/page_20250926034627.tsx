import React from 'react';
import Head from 'next/head';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans antialiased">
      <Head>
        <title>About Us - MyStore</title>
        <meta name="description" content="Learn more about MyStore, our mission, and our team." />
      </Head>

      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* عنوان اصلی */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
              Our Story
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We are a team of passionate people dedicated to bringing you the best products.
            </p>
          </div>

          {/* بخش درباره ما */}
          <div className="bg-white shadow-lg rounded-lg p-8 sm:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Our Mission
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  MyStore was founded with a simple goal: to create a seamless shopping experience for high-quality, ethically-sourced products. We believe that good design and exceptional quality should be accessible to everyone. Our commitment is to our customers and to the planet. We strive to reduce our environmental footprint while providing products that you'll love for years to come.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We meticulously select our partners and suppliers, ensuring that every item in our store meets our strict standards for durability, style, and sustainability. Thank you for being a part of our journey.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <img
                  src="https://via.placeholder.com/600x400"
                  alt="A team of people working together"
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
            </div>
          </div>

          {/* بخش اطلاعات تماس */}
          <div className="bg-white shadow-lg rounded-lg p-8 sm:p-12 mt-12">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Get in Touch
              </h2>
              <p className="text-gray-700 leading-relaxed max-w-xl mx-auto mb-6">
                Have questions or just want to say hi? We'd love to hear from you.
              </p>
              <a
                href="mailto:contact@mystore.com"
                className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-md hover:bg-blue-700 transition-colors"
              >
                Send Us an Email
              </a>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
}