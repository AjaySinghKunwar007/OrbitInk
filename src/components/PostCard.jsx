import React, { useEffect, useState } from "react";

import storageService from "../appwrite/storage";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import parse from "html-react-parser";
import usersStorageService from "../appwrite/usersStorage"
import usersDatabaseService from "../appwrite/usersDatabase"



function PostCard({ $id, title, featuredImage, $updatedAt ,content,userId}) {
// TODO : fetch the post's creator name;
const [userProfile,setUserProfile]= useState({});
const [error,setError]= useState("");
const [loading,setLoading]= useState(true);
const [profileImage,setProfileImage]=useState(null);

const image= storageService.getFilePreview(featuredImage);
useEffect(()=>{
  const fetchUserProfile=async()=>{
    try {
      const userProfile= await usersDatabaseService.getUser(userId);
      if(userProfile){
        const img=usersStorageService.getFilePreview(userProfile.profileImage)
        setProfileImage(img)
        setUserProfile(userProfile);

      }

    } catch (error) {
      console.log(error)
      setError(error);
    }finally{
    setLoading(false)
    }
   
    }
    fetchUserProfile()
},[])



  return (
    <>
      <article className="flex max-w-sm m-2 flex-col items-start justify-between bg-gray-800 rounded-lg shadow-2xl p-4">
        <div className="relative w-full">
          <img
            src={
              featuredImage
                ? image
                : "/fallback-image.jpg"
            }
            alt={title}
            className="w-full h-48 object-cover rounded-t-lg"
          />
           {!featuredImage && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-700 text-gray-400">
            No Image Available
          </div>
        )}
        </div>
        <div className="flex items-center gap-x-4 text-xs mt-2">
        <time dateTime={$updatedAt} className="text-gray-500">
          {$updatedAt ? new Date($updatedAt).toLocaleDateString() : "Unknown Date"}
        </time> 
          <Link
            to={`/post/${$id}`}
            className="relative z-10 rounded-full bg-gray-700 px-3 py-1.5 my-1 font-medium text-gray-300 hover:bg-gray-600"
          >
            Read more...
          </Link>
        </div>
        <div className="group relative mt-3">
          <div className=" text-lg font-semibold text-white">
            {title}
          </div>
          <div className="mt-2 line-clamp-3 text-sm text-gray-400">
            {parse(content)}
          </div>
        </div>
        <div className="relative mt-4 flex items-center gap-x-4">
          <img
            src={profileImage}
            alt={"profile image"}
            className="h-10 w-10 rounded-full object-cover bg-gray-50"
          />
          <div className="text-sm">
            <p className="font-semibold text-gray-300">
              
            {userProfile.userName}
            </p>
            <p className="text-gray-500">Author</p>
          </div>
        </div>
      </article>
    </>
  );
}

// Prop validation
PostCard.propTypes = {
  $id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  featuredImage: PropTypes.string,
  author: PropTypes.string,
  date: PropTypes.string, // ISO 8601 date format expected
};
export default PostCard;
