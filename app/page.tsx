"use client";

import { useState } from "react";
import Modal from "./components/Modal/Modal";
import Navbar from "./components/Navbar/Narbar";
import ShowPosts from "./components/ShowPosts/ShowPosts";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  console.log("📃 Posts:", posts);
  return (
    <>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <ShowPosts posts={posts} setPosts={setPosts} />

      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        posts={posts}
        setPosts={setPosts}
      />
    </>
  );
}
