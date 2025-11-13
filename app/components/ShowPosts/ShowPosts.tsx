"use client";
import React, { useState } from "react";
import PostCard from "./PostCard";

const ShowPosts = ({ posts, setPosts }) => {
  const [editIsOpen, setEditIsOpen] = useState(false);
  return (
    <div>
      {posts.length === 0 ? (
        <p className="text-center text-white/70 pt-10 bg-gray-900">
          No posts available. Add some!
        </p>
      ) : (
        <>
          <div className="grid grid-cols-4 gap-4 px-6 bg-gray-900">
            {posts.map((post, index) => (
              <PostCard
                posts={posts}
                setPosts={setPosts}
                i={index}
                key={index}
                author={post.author}
                description={post.description}
                editIsOpen={editIsOpen}
                setEditIsOpen={setEditIsOpen}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ShowPosts;
