import React from "react";

export default function Navbar({ setIsOpen }) {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gray-900 text-white shadow-md">
      {/* Left Side */}
      <h1 className="text-xl font-semibold tracking-wide">React Poster</h1>

      {/* Right Side */}
      <button
        onClick={() => setIsOpen(true)}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md cursor-pointer transition"
      >
        Add Post
      </button>
    </nav>
  );
}
