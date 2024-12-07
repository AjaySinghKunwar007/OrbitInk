import React from "react";
import { PostForm, Container } from "../components/index";

function AddPost() {
  return (
    <div className="py-8">
      <Container>
      <h1 className="text-2xl font-bold text-center mb-4 text-stone-200">Add a New Post</h1>
        <PostForm />
      </Container>
    </div>
  );
}

export default AddPost;
