import React from "react";
import EditModal from "../Modal/EditModal";

export default function PostCard({
  author,
  description,
  i,
  posts,
  setPosts,
  editIsOpen,
  setEditIsOpen,
}) {
  // delete post function (to be implemented)
  const deletePost = (index) => {
    const latestPosts = posts.filter((post, index) => i !== index);
    setPosts(latestPosts);
  };

  // edit post function (to be implemented)
  const editPost = (index) => {
    setEditIsOpen(true);
  };

  return (
    <div>
      <div className="bg-white/10 border border-white/20 rounded-xl shadow-lg p-6 text-white w-full max-w-sm transition hover:bg-white/20 hover:shadow-xl">
        {/* Author */}
        <h3 className="text-lg font-semibold mb-2">{author}</h3>

        {/* Description */}
        <p className="text-white/80 text-sm leading-relaxed mb-4">{description}</p>

        {/* Action Buttons */}
        <div className="flex justify-end gap-3">
          <button
            className="border hover:bg-white hover:text-black text-white px-3 py-1 rounded-md text-sm cursor-pointer"
            onClick={() => editPost(i)}
          >
            Edit
          </button>

          <button
            className="border hover:bg-white hover:text-black text-white px-3 py-1 rounded-md text-sm cursor-pointer"
            onClick={() => deletePost(i)}
          >
            Delete
          </button>
        </div>
      </div>
      <EditModal
        editIsOpen={editIsOpen}
        setEditIsOpen={setEditIsOpen}
        posts={posts}
        setPosts={setPosts}
        index={i}
      />
    </div>
  );
}
