import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

import usersDatabaseService from "../appwrite/usersDatabase.js";
import { Container, Button, Input } from "../components/index";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import usersStorageService from "../appwrite/usersStorage.js";

function Profile() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [user, setUser] = useState({});
  const [edit, setEdit] = useState(false);
  const userData = useSelector((state) => state.auth.userData);
  const userId = userData.$id;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const getProfile = async () => {
      try {
        const user = await usersDatabaseService.getUser(userId);
       
        
        setUser(user);
        reset({
          userName: user.userName || "",
          bio: user.bio || "",
          firstName: user.firstName || "",
          lastName: user.lastName || "",
          email: user.email || "",
          profileImage: user.profileImage || "",
        });
      } catch (err) {
        setError(err.message || "Profile fetch failed. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    getProfile();
  }, []);
 

  const submit = async (data) => {
    setLoading(true);
    try {
      const fileId = data.profileImage[0]
        ? await usersStorageService.uploadFile(data.profileImage[0])
        : null;
   

      if (fileId) {
        user.profileImage &&
          (await usersStorageService.deleteFile(user.profileImage));
        await usersDatabaseService.updateUser(userId, {
          ...data,
          profileImage: fileId.$id,
        });
      } else {
        await usersDatabaseService.updateUser(userId, { ...data });
      }
      setEdit(false);
    } catch (error) {
      console.error("Error loading profile : ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" py-4 px-[15vw]">
      <Container>
        {loading && (
          <div className=" h-screen w-full">
            <Container>
              <div className="flex flex-col items-center justify-center h-[80vh] w-full">
                <div
                  className="w-32 h-32 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
                  role="status"
                  aria-live="polite"
                ></div>
                <p className="mt-2 text-lg text-gray-600">Loading profile...</p>
              </div>
            </Container>
          </div>
        )}
        {error && <p className="text-center text-red-600">{error}</p>}

        <form onSubmit={handleSubmit(submit)}>
          <div className=" bg-gray-900 ">
            <div className="border-b border-gray-300/10 p-12">
              <div className="flex justify-between align-middle">
                <div>
                  <h2 className="text-base/7 font-semibold text-gray-200">
                    Profile
                  </h2>
                </div>
                {!edit && (
                  <Button
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={() => {
                      setEdit(true);
                    }}
                  >
                    Edit Profile
                  </Button>
                )}
                {edit && (
                  <div className="flex justify-evenly gap-3 ">
                    <Button
                      className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      onClick={() => {
                        setEdit(false);
                      }}
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                    >
                      Save
                    </Button>
                  </div>
                )}
              </div>

              <p className="mt-1 text-sm/6 text-gray-600">
                This information will be displayed publicly so be careful what
                you share.
              </p>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <Input
                  divClass="sm:col-span-4"
                  label="Username"
                  type="text"
                  required
                  disabled={!edit}
                  placeholder={user.userName}
                  className="block w-full rounded-md bg-gray-800 px-3 py-1.5 text-base text-gray-200 outline outline-1 -outline-offset-1 outline-gray-600 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  {...register("userName", {
                    required: "Username is required",
                  })}
                  error={errors.userName?.message}
                />

                <div className="col-span-full">
                  <label
                    htmlFor="about"
                    className="block text-sm/6 font-medium text-gray-200"
                  >
                    About
                  </label>
                  <div className="mt-2">
                    <textarea
                      name="about"
                      id="about"
                      rows="3"
                      className="block w-full rounded-md bg-gray-800 px-3 py-1.5 text-base text-gray-200 outline outline-1 -outline-offset-1 outline-gray-600 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      placeholder={user.bio}
                      {...register("bio")}
                      error={errors.bio?.message}
                      disabled={!edit}
                    ></textarea>
                  </div>
                  {/* <p className="mt-3 text-sm/6 text-gray-600">Write a few sentences about yourself.</p> */}
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="photo"
                    className="block text-sm/6 font-medium text-gray-200"
                  >
                    Photo
                  </label>
                  <div className="mt-2 flex items-center gap-x-3">
                    {user.profileImage ? (
                      <img
                        src={usersStorageService.getFilePreview(
                          user.profileImage
                        )}
                        alt="profile image"
                        className="size-20 text-gray-300 object-cover rounded-full"
                      />
                    ) : (
                      <svg
                        className="size-24 text-gray-300"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}

                    <Input
                      divClass={`sm:col-span-4 ${!edit ? "hidden" : ""}`}
                      label=""
                      type="file"
                     
                      disabled={!edit}
                      className="block w-full text-sm text-gray-200 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-gray-700 file:text-gray-300 hover:file:bg-gray-600 focus:file:outline-none focus:file:ring-2 focus:file:ring-indigo-500 "
                      accept="image/png, image/jpg, image/jpeg, image/gif"
                      {...register("profileImage")}
                      error={errors.profileImage?.message}
                    />
                    <Button
                      onClick={() => {
                        setEdit(true);
                      }}
                      className={`${
                        edit ? "hidden" : ""
                      } rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600`}
                    >
                      Change
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-b border-gray-900/10 p-12">
              <h2 className="text-base/7 font-semibold text-gray-200">
                Personal Information
              </h2>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <Input
                  divClass="sm:col-span-3"
                  label="First name"
                  type="text"
                  disabled={!edit}
                  className="block w-full rounded-md bg-gray-800 px-3 py-1.5 text-base text-gray-200 outline outline-1 -outline-offset-1 outline-gray-600 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  placeholder={user.firstName}
                  {...register("firstName")}
                  error={errors.firstName?.message}
                />
                <Input
                  divClass="sm:col-span-3"
                  label="Last name"
                  type="text"
                  disabled={!edit}
                  className="block w-full rounded-md bg-gray-800 px-3 py-1.5 text-base text-gray-200 outline outline-1 -outline-offset-1 outline-gray-600 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  placeholder={user.lastName}
                  {...register("lastName")}
                  error={errors.lastName?.message}
                />
                <Input
                  divClass="sm:col-span-4"
                  label="Email address"
                  type="text"
                  disabled={true}
                  className="block w-full rounded-md bg-gray-600 px-3 py-1.5 text-base text-gray-200 outline outline-1 -outline-offset-1 outline-gray-600 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  placeholder={user.email}
                  {...register("email")}
                  error={errors.email?.message}
                />
              </div>
            </div>
          </div>
        </form>
      </Container>
    </div>
  );
}

export default Profile;
