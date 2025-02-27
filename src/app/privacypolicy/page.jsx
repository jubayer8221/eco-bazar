import React from "react";
import Head from "next/head";

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy - Eco Bazar</title>
        <meta name="description" content="Privacy Policy of Eco Bazar" />
      </Head>
      <div className="container mx-auto px-4 py-8 text-center">
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-4 text-center">
            Privacy Policy
          </h1>
          <p className="mb-6 text-center">
            Welcome to Eco Bazar's Privacy Policy page. Your privacy is
            critically important to us.
          </p>
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2 text-center">
              Information We Collect
            </h2>
            <p className="mb-4">
              We collect various types of information in connection with the
              services we provide, including:
            </p>
            <ul className=" list-inside">
              <li>
                Personal identification information (Name, email address, phone
                number, etc.)
              </li>
              <li>Usage data and cookies</li>
            </ul>
          </section>
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2 text-center">
              How We Use Your Information
            </h2>
            <p className="mb-4">
              We use the collected information for various purposes, such as:
            </p>
            <ul className=" list-inside">
              <li>To provide and maintain our service</li>
              <li>To notify you about changes to our service</li>
              <li>To provide customer support</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-2 text-center">
              Contact Us
            </h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy, please
              contact us:
            </p>
            <ul className=" list-inside">
              <li>By email: support@ecobazar.com</li>
              <li>
                By visiting this page on our website: www.ecobazar.com/contact
              </li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
