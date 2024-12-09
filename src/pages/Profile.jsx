import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import usersDatabaseService from "../appwrite/usersDatabase.js";
import { Container, Button, Input } from "../components/index";
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
    <div className="py-4 px-4 sm:px-[15vw]">
      <Container>
        {loading && (
          <div className="h-screen w-full">
            <Container>
              <div className="flex flex-col items-center justify-center h-[80vh] w-full">
                <div
                  className="w-16 h-16 sm:w-32 sm:h-32 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
                  role="status"
                  aria-live="polite"
                ></div>
                <p className="mt-2 text-sm sm:text-lg text-gray-600">
                  Loading profile...
                </p>
              </div>
            </Container>
          </div>
        )}
        {error && <p className="text-center text-red-600">{error}</p>}

        <form onSubmit={handleSubmit(submit)}>
          <div className="bg-gray-900">
            <div className="border-b border-gray-300/10 p-6 sm:p-12">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                <h2 className="text-base/7 font-semibold text-gray-200">
                  Profile
                </h2>
                {!edit ? (
                  <Button
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500"
                    onClick={() => setEdit(true)}
                  >
                    Edit Profile
                  </Button>
                ) : (
                  <div className="flex gap-3">
                    <Button
                      className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500"
                      onClick={() => setEdit(false)}
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white hover:bg-green-500"
                    >
                      Save
                    </Button>
                  </div>
                )}
              </div>

              <p className="mt-1 text-sm/6 text-gray-600">
                This information will be displayed publicly, so be careful what
                you share.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <Input
                  divClass="sm:col-span-4"
                  label="Username"
                  type="text"
                  disabled={!edit}
                  placeholder={user.userName}
                  className="w-full rounded-md bg-gray-800 text-gray-200"
                  {...register("userName", { required: "Username is required" })}
                  error={errors.userName?.message}
                />
                <div className="col-span-full">
                  <label
                    htmlFor="about"
                    className="block text-sm/6 font-medium text-gray-200"
                  >
                    About
                  </label>
                  <textarea
                    id="about"
                    rows="3"
                    className="w-full rounded-md bg-gray-800 text-gray-200"
                    placeholder={user.bio}
                    {...register("bio")}
                    disabled={!edit}
                  ></textarea>
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
                        alt="profile"
                        className="w-12 h-12 sm:w-20 sm:h-20 rounded-full object-cover"
                      />
                    ) : (
                      <svg
                        className="w-12 h-12 sm:w-20 sm:h-20 text-gray-300"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18.685 19.097A9.723..."
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                    <Input
                      divClass={`sm:col-span-4 ${!edit ? "hidden" : ""}`}
                      type="file"
                      className="w-full text-sm text-gray-200 file:bg-gray-700"
                      accept="image/png, image/jpg, image/jpeg, image/gif"
                      {...register("profileImage")}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="border-b border-gray-900/10 p-6 sm:p-12">
              <h2 className="text-base/7 font-semibold text-gray-200">
                Personal Information
              </h2>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <Input
                  divClass="sm:col-span-3"
                  label="First name"
                  type="text"
                  disabled={!edit}
                  className="w-full rounded-md bg-gray-800 text-gray-200"
                  placeholder={user.firstName}
                  {...register("firstName")}
                />
                <Input
                  divClass="sm:col-span-3"
                  label="Last name"
                  type="text"
                  disabled={!edit}
                  className="w-full rounded-md bg-gray-800 text-gray-200"
                  placeholder={user.lastName}
                  {...register("lastName")}
                />
                <Input
                  divClass="sm:col-span-4"
                  label="Email address"
                  type="text"
                  disabled={true}
                  className="w-full rounded-md bg-gray-600 text-gray-200"
                  placeholder={user.email}
                  {...register("email")}
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
