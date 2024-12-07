import React, { useEffect, useState } from "react";
import databaseService from "../appwrite/database";
import { Container, PostCard } from "../components/index";

function Home() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  posts.length>0 && console.log(posts)
  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        setLoading(true);
        const postsData = await databaseService.getPosts();
        if (postsData && postsData.documents.length > 0) {
          setPosts(postsData.documents);
        } else {
          setError("No Internet Connection !!!");
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
          <p className="text-center text-red-600 font-medium" role="alert">
            {error}
          </p>
        </Container>
      </div>
    );
  }

  // if (posts.length === 0) {
  //   return (
  //     <div className="w-full py-8 mt-4 text-center">
  //       <Container>
  //         <h1 className="text-2xl font-bold text-gray-700">
  //           Login to read posts
  //         </h1>
  //       </Container>
  //     </div>
  //   );
  // }
  if(posts.length>0)  {
     return <div className="flex flex-wrap justify-center">
    
    {posts.map((post) => (
      
      <PostCard
        {...post}
        key={post.$id}
        className="p-2 w-full md:w-1/4"
      />
    ))}
  </div>}
 

}

export default Home;
