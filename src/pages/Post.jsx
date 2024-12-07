import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import databaseService from "../appwrite/database";
import { useSelector } from "react-redux";
import storageService from "../appwrite/storage";
import { Container, Button } from "../components/index";
import parse from "html-react-parser";
import usersDatabaseService from "../appwrite/usersDatabase";
import usersStorageService from "../appwrite/usersStorage";

function Post() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);
  const [post, setPost] = useState(null);
  const [author, setAuthor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const isAuthor = post && userData ? post.userId === userData.$id : false;

  // Fetch the post on component mount
  useEffect(() => {
    const fetchPost = async () => {
      try {
        if (!slug) {
          setError("Invalid post slug");
          navigate("/");
          return;
        }

        const postData = await databaseService.getPost(slug);
        if (postData) {
          const profile = await usersDatabaseService.getUser(postData.userId);
         

          setPost(postData);
          if (profile) {
            setAuthor(profile);
          }
        } else {
          setError("Post not found");
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
  }, [navigate, slug]);

  const deletePost = async () => {
    setLoading(true);
    try {
      if (post?.featuredImage) {
        await storageService.deleteFile(post.featuredImage);
      }
      await databaseService.deletePost(post.$id);
      navigate("/");
    } catch (err) {
      console.error("Error deleting post:", err);
      setError("Failed to delete post. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  // Render loading spinner
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
  // Render error message
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

  // Render post content

  return (
    <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <Container>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                  {post.title}
                </h1>

                {/* <p class="mt-6 text-xl/8 text-gray-700">
                Aliquet nec orci mattis amet quisque ullamcorper neque, nibh
                sem. At arcu, sit dui mi, nibh dui, dt egestas.
              </p> */}
              </div>
              <div className="flex gap-2 justify-start mt-4  items-center align-middle  ">
                <img
                  src={usersStorageService.getFilePreview(author.profileImage)}
                  alt={author.userName}
                  className="h-12 w-12 rounded-full bg-gray-50 "
                />
                <div className="flex flex-col ">
                  <p className="text-base/7 font-semibold text-indigo-600">
                    {author.userName}
                  </p>
                  <h4 className="text-slate-200 font-thin text-xs">
                    -
                    {post.$updatedAt
                      ? new Date(post.$updatedAt).toLocaleDateString()
                      : "Unknown Date"}
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex flex-col justify-center align-middle gap-4  lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            {isAuthor && (
              <div className="  top-0 right-0 flex justify-center space-x-3 ">
                <Link to={`/edit-post/${post.$id}`}>
                  <Button bgColor="bg-green-500" className="mr-3">
                    Edit
                  </Button>
                </Link>
                <Button
                  bgColor="bg-red-500"
                  onClick={deletePost}
                  isLoading={loading}
                  loadingText={"deleting..."}
                >
                  Delete
                </Button>
              </div>
            )}
            <img
              className="w-full h-screen object-cover rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10"
              src={storageService.getFilePreview(post.featuredImage)}
              alt={post.title}
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base/7 text-white lg:max-w-lg">
                {parse(post.content)}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
export default Post;
