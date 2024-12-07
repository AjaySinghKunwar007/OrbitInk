import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Button, Input, RTE, Select } from "../index";
import { useSelector } from "react-redux";
import databaseService from "../../appwrite/database";
import storageService from "../../appwrite/storage";

function PostForm({ post }) {
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);
  const [loading,setLoading]=useState(false);
 

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control,
    setValue,
  } = useForm({
    defaultValues: {
      title: post?.title || "",
      slug: post?.$id || "",
      content: post?.content || "",
      status: post?.status || "",
    },
  });
  // Submit handler
  const submit = async (data) => {
    setLoading(true);
    try {
      const file = data.image?.[0]
        ? await storageService.uploadFile(data.image[0])
        : null;
      if (post) {
        // Update existing post
        if (file) {
          await storageService.deleteFile(post.featuredImage);
        }
        const updatedPost = await databaseService.updatePost(post.$id, {
          ...data,
          featuredImage: file ? file.$id : post.featuredImage,
        });
        updatedPost && navigate(`/post/${updatedPost.$id}`);
      } else {
        // Create new post
        const newPost = await databaseService.createPost({
          ...data,
          featuredImage: file?.$id || null,
          userId: userData.$id,
       
        });
        newPost && navigate(`/post/${newPost.$id}`);
      }
    } catch (error) {
      console.error("Error submitting post:", error);
    }finally{
      setLoading(false)
    }
  };
  // Slug transformation function
  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string") {
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, "-") // Replace non-alphanumeric characters with "-"
        .replace(/\s+/g, "-") // Replace spaces with "-"
        .substring(0, 36) // Limit the length to 36 characters
        .replace(/^-+|-+$/g, ""); // Remove leading and trailing hyphens
    }
    return "";
  }, []);

  // Auto-generate slug from title
  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title), { shouldValidate: true });
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [slugTransform, watch, setValue]);

  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
      {/* Left Column */}
      <div className="w-2/3 px-2">
        <Input
          label="Title : "
          placeholder="Enter Title"
          className="block w-full rounded-md px-3 py-1.5 text-base text-gray-200 outline outline-1 -outline-offset-1 outline-gray-600 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          {...register("title", {
            required: "Title is required",
          })}
          error={errors.title?.message}
        />
        <Input divClass="hidden"
          label="Slug : "
          placeholder="Slug"
          className="mb-4"
          {...register("slug", { required: "Slug is required" })}
          onInput={(e) => {
            setValue("slug", slugTransform(e.target.value), {
              shouldValidate: true,
            });
          }}
          error={errors.slug?.message}
        />
        <RTE
          label={"Content : "}
          control={control}
          defaultValue={post?.content || ""}
        />
      </div>
      {/* Right Column */}
      <div className="w-1/3 px-2">
        {/* Image Input */}
        <Input
          label="Featured Image :"
          type="file"
          className="block w-full text-sm text-gray-200 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-gray-700 file:text-gray-300 hover:file:bg-gray-600 focus:file:outline-none focus:file:ring-2 focus:file:ring-indigo-500 "
          accept="image/png, image/jpg, image/jpeg, image/gif"
          {...register("image", {
            required: !post && "Featured image is required",
          })}
          error={errors.image?.message}
        />
        {post?.featuredImage && (
          <div className="w-full mb-3 ">
            <img
              src={storageService.getFilePreview(post.featuredImage)}
              alt={post.title}
              className="rounded-lg max-w-full h-auto border border-gray-700 shadow-lg"
            />
          </div>
        )}
        {/* Status Select */}
        <Select
          label="Status : "
          className="block mb-3 w-full rounded-md px-3 py-1.5 text-base text-gray-200 bg-gray-800 outline outline-1 -outline-offset-1 outline-gray-600 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6 "
          options={["active", "inactive"]}
          {...register("status", {
            required: "Status is required",
          })}
          error={errors.status?.message}
        />
        {/* Submit Button */}
        <Button
          type="submit"
          isLoading={loading}
          loadingText={post ? "updating..." : "submitting..."}
          bgColor={post ? "bg-green-500" : undefined}
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          
        >
          {post ? "Update" : "Submit"}
        </Button>
      </div>
    </form>
  );
}

export default PostForm;
