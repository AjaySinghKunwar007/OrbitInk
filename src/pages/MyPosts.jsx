import React, { useEffect, useState } from "react";
import databaseService from "../appwrite/database";
import { PostCard, Container } from "../components/index";
import { useSelector } from "react-redux";

function MyPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(""); // Error state
  const userId= useSelector(state=>state.auth.userData.$id)
 
  
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        if(userId){
        const posts = await databaseService.getMyPosts(userId);
        if (posts) {
          setPosts(posts.documents);
        }}
      } catch (error) {
        console.error("Error fetching posts:", error);
        setError("Failed to load posts. Please try again later.");
      } finally {
        setLoading(false); // Stop loading
      }
    };
    fetchPosts(); // Call the async function
  }, []);
  return (
    <div className="w-full py-8">
      <Container>
        {loading && 
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
        }
        {/* Show loading state */}
        {error && <p className="text-center text-red-600">{error}</p>}
        {/* Show error message */}
        {!loading && posts.length === 0 && (
          <p className="text-center text-gray-500">No posts available.</p>
        )}
        <div className="flex flex-wrap justify-center">
          {posts.map((post) => (
            
            <PostCard
              {...post}
              key={post.$id}
              className="p-2 w-full md:w-1/4"
            />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default MyPosts;
