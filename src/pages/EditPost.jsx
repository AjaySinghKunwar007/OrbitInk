import React, { useEffect, useState } from "react";
import { Container, PostForm } from "../components/index";
import { useNavigate, useParams } from "react-router-dom";
import databaseService from "../appwrite/database";

function EditPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postData = await databaseService.getPost(slug);
        if (postData) {
          setPost(postData);
        } else {
          navigate("/");
        }
      } catch (err) {
        console.error("Error retrieving post:", err);
        setError("Failed to load post. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [slug, navigate]);

  if (loading) {
    return (
      <div className=" h-screen w-full">
        <Container>
          <div className="flex flex-col items-center justify-center h-[80vh] w-full">
            <div
              className="w-32 h-32 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
              role="status"
              aria-live="polite"
            ></div>
            <p className="mt-2 text-lg text-gray-600">Loading post...</p>
          </div>
        </Container>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-8">
        <Container>
          <p role="alert" className="text-center text-red-600 font-medium">
            {error}
          </p>
        </Container>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="py-8">
        <Container>
          <p className="text-center text-gray-500">Post not found.</p>
        </Container>
      </div>
    );
  }

  return (
    <div className="py-8">
      <Container>
        <h1 className="text-2xl font-bold text-center mb-4 text-gray-300">Edit Post</h1>
        <PostForm post={post} />
      </Container>
    </div>
  );
}

export default EditPost;
