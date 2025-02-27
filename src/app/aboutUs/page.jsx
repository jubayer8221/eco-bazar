import React from "react";

const AboutUs = () => {
  return (
    <div className="xl:mt-20 flex flex-col items-center justify-center min-h-screen py-12 bg-gray-100">
      <div className="max-w-4xl px-6 py-8 bg-white shadow-md rounded-lg">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          About Us
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Welcome to Eco Bazar, your number one source for all things
          eco-friendly. We're dedicated to giving you the very best of
          sustainable products, with a focus on quality, customer service, and
          uniqueness.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Founded in 2023, Eco Bazar has come a long way from its beginnings.
          When we first started out, our passion for eco-friendly products drove
          us to start our own business.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          We hope you enjoy our products as much as we enjoy offering them to
          you. If you have any questions or comments, please don't hesitate to
          contact us.
        </p>
        <p className="text-lg text-gray-700">
          Sincerely,
          <br />
          The Eco Bazar Team
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
