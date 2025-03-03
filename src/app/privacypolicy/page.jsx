import React from "react";
import Head from "next/head";

const PrivacyPolicy = () => {
  return (
    <div className="mt-20 py-20 bg-gray-50 mx-[300px]">
      <Head>
        <title>Privacy Policy - Eco Bazar</title>
        <meta name="description" content="Privacy Policy of Eco Bazar" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
          <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
            Privacy Policy
          </h1>
          <p className="mb-8 text-center text-gray-600">
            Welcome to Eco Bazar's Privacy Policy page. Your privacy is
            critically important to us.
          </p>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-center text-gray-700">
              Information We Collect
            </h2>
            <p className="mb-4 text-gray-600">
              We collect various types of information in connection with the
              services we provide, including:
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>
                Personal identification information (Name, email address, phone
                number, etc.)
              </li>
              <li>Usage data and cookies</li>
            </ul>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-center text-gray-700">
              How We Use Your Information
            </h2>
            <p className="mb-4 text-gray-600">
              We use the collected information for various purposes, such as:
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>To provide and maintain our service</li>
              <li>To notify you about changes to our service</li>
              <li>To provide customer support</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-center text-gray-700">
              Contact Us
            </h2>
            <p className="mb-4 text-gray-600">
              If you have any questions about this Privacy Policy, please
              contact us:
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>By email: support@ecobazar.com</li>
              <li>
                By visiting this page on our website: www.ecobazar.com/contact
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
