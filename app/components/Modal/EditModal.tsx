"use client";

import { useEffect, useState } from "react";

export default function EditModal({ editIsOpen, setEditIsOpen, posts, setPosts, index }) {
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const obj = posts.find((post, i) => i === index);
    setAuthor(obj.author);
    setDescription(obj.description);
  }, [editIsOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = { author, description };
    // console.log(data);

    const latestPosts = posts.filter((post, i) => i !== index);
    // setPosts([...latestPosts.slice(0, index), data, ...latestPosts.slice(index)]);
    // setEditIsOpen(false);
    console.log([...latestPosts.slice(0, index)]);
  };
  return (
    <div className="">
      {/* Modal */}
      {/* if isOpen is true, then the modal will be visible */}
      {editIsOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black z-50"
          onClick={() => setEditIsOpen(false)} // close when clicking outside box <== how it works is a bit tricky
        >
          {/* Modal Box */}
          <div
            className="relative bg-white/10 border border-white/20 rounded-xl shadow-lg p-8 w-96 text-white"
            onClick={(e) => e.stopPropagation()} // prevent close on modal click
          >
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-white/70 hover:text-white text-xl cursor-pointer"
              onClick={() => setEditIsOpen(false)}
            >
              &times;
            </button>

            <h2 className="text-2xl font-semibold mb-4">Edit Post</h2>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-white/80 mb-1">Author</label>
                <input
                  type="text"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  placeholder="Enter author name"
                  className="w-full px-3 py-2 rounded-md bg-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/40"
                  required
                />
              </div>

              <div>
                <label className="block text-white/80 mb-1">Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Enter description"
                  className="w-full px-3 py-2 rounded-md bg-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/40"
                  required
                />
              </div>

              {/* Buttons */}
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setEditIsOpen(false)}
                  className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-md cursor-pointer"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md cursor-pointer"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
