"use client";

import Link from "next/link";
import React, { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setFeedbackMessage(""); // Clear previous feedback message
    try {
      const response = await fetch(
        "https://your-backend-server.com/api/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );
      const data = await response.json();
      if (response.ok) {
        // Handle successful login
        console.log(data);
        setFeedbackMessage("Login successful!");
      } else {
        // Handle login failure
        setFeedbackMessage("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Error:", error);
      setFeedbackMessage("An error occurred. Please try again later.");
    }
  };

  const handleGoogleLogin = () => {
    // Implement Google login logic here
    console.log("Google login clicked");
  };

  return (
    <div className="py-20 mt-20 md:mt-6 sm:mt-6 flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-gray-900">Login</h1>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-1">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="space-y-1">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Login
          </button>
        </form>
        {feedbackMessage && (
          <div className="mt-4 text-center text-red-500">{feedbackMessage}</div>
        )}
        <div className="flex justify-between mt-4">
          <Link
            href="/forgot-password"
            className="text-sm text-blue-600 hover:underline"
          >
            Forgot Password?
          </Link>
          <Link
            href="/singin"
            className="text-sm text-blue-600 hover:underline"
          >
            Sign Up
          </Link>
        </div>
        <button
          onClick={handleGoogleLogin}
          className="w-full px-4 py-2 mt-4 text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
