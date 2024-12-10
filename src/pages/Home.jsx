import React, { useEffect, useState } from "react";
import databaseService from "../appwrite/database";
import { Container, PostCard } from "../components/index";
import Loader from "../utils/Loader";

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
      <Loader/>
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
