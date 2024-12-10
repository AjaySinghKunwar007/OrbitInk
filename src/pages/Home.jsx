import React, { useEffect, useState } from "react";
import databaseService from "../appwrite/database";
import { Container, PostCard } from "../components/index";
import Loader from "../utils/Loader";

function Home() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0); // State to track the rendering progress

  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        setLoading(true);
        const postsData = await databaseService.getPosts();
        if (postsData && postsData.documents.length > 0) {
          setPosts(postsData.documents);
        } else {
          setError("No posts available.");
        }
      } catch (err) {
        console.error("Error fetching posts:", err);
        setError("Failed to fetch posts. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchAllPosts();
  }, []);

  // Incrementally render posts
  useEffect(() => {
    if (posts.length > 0 && currentIndex < posts.length) {
      const timer = setTimeout(() => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 500); // Adjust the delay as needed
      return () => clearTimeout(timer);
    }
  }, [currentIndex, posts]);

  if (loading) {
    return <Loader text={"Loading posts..."} />;
  }

  if (error) {
    return (
      <div className="py-8">
        <Container>
          <p className="text-center text-red-600 font-medium" role="alert">
            {error}
          </p>
        </Container>
      </div>
    );
  }

  return (
    <div className="flex  justify-center   w-full min-h-[100vh]">
      <div className="flex flex-wrap justify-start items-start min-h-full w-[91.5%]">
        {posts.slice(0, currentIndex + 1).map((post) => (
          <PostCard {...post} key={post.$id} className="p-2 w-full md:w-1/4" />
        ))}
      </div>
    </div>
  );
}

export default Home;
