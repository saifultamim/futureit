"use client";

import { useRef, useState } from "react";

import { useRouter } from "next/navigation";
import { MdCloudUpload, MdOutlineClose } from "react-icons/md";
import Image from "next/image";

export default function Profile({ session, student }) {
  const [passwordFormData, setPasswordFormData] = useState({
    userId: 1,
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [uploading, setUploading] = useState(false); // State to manage upload status
  const router = useRouter();
  const fileInputRef = useRef(null);

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    // Check for empty fields
    if (!passwordFormData.currentPassword) {
      newErrors.currentPassword = "Current password is required";
    }
    if (!passwordFormData.newPassword) {
      newErrors.newPassword = "New password is required";
    }
    if (!passwordFormData.confirmPassword) {
      newErrors.confirmPassword = "Confirm password is required";
    }

    // Check if new password and confirm password match
    if (passwordFormData.newPassword !== passwordFormData.confirmPassword) {
      newErrors.confirmPassword = "Password does not match";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const apiUrl = process.env.NEXT_PUBLIC_STUPORTAL_API_URL;

  const passwordChangeFormSubmit = async (event) => {
    event.preventDefault();
  };

  const onFileUploadChange = (e) => {
    const file = e.target.files?.[0]; // Use optional chaining to avoid null reference
    if (file) {
      setImageFile(file); // Save the file for uploading
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result); // Ensure reader.result is correctly typed
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setImagePreview(null);
    setImageFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Clear the file input
    }
  };

  const uploadImage = async () => {
    if (imageFile) {
      setUploading(true);
      const newFileName = `${SUPPORT_POST_STUDENT}-${session?.user?.id}.jpg`;
      const fileData = new FormData();
      fileData.append("image", imageFile, newFileName); // Attach the image file

      try {
        const response = await fetch("/api/file/profile-update", {
          method: "POST",
          body: fileData,
        });

        const data = await response.json();
        console.log(data, "data");
        if (data.success) {
          toast("success", "Image uploaded successfully!");
        } else {
          toast("error", data.error || "Failed to upload image.");
        }
      } catch (error) {
        console.error("Upload error:", error);
        toast("error", "An error occurred while uploading.");
      } finally {
        setUploading(false);
      }
    } else {
      toast("error", "Please select an image file to upload.");
    }
  };

  return (
    <div class="container mx-auto px-4 py-5">
      <div class="mx-auto bg-white rounded-lg shadow-lg">
        <h2 class="text-center text-2xl font-semibold mt-2 text-capitilize pt-3">
          Cooper Jacobs
        </h2>
        <div class="px-6 py-4 flex justify-between flex-wrap">
          <div class="">
            <h3 class="text-md font-semibold ">Personal Information</h3>
            <hr class="my-2" />
            <div class="flex flex-col mt-2">
              <span class="text-sm font-semibold text-black">Name</span>
              <span class="text-gray-800">Cooper Jacobs</span>
            </div>
            <div class="flex flex-col mt-2">
              <span class="text-sm font-semibold text-black">Email</span>
              <span class="text-gray-800">copper45@gmail.com</span>
            </div>
            <div class="flex flex-col mt-2">
              <span class="text-sm font-semibold text-black">Phone</span>
              <span class="text-gray-800">019729847859</span>
            </div>
            {/* Change Avatar Section */}
            <div className="my-8">
              <h4 className="text-xl font-medium tracking-tight text-secondary">
                Change Avatar
              </h4>
              <div className="bg-white max-sm:max-w-md w-full mt-4">
                {/* Image Upload Section */}
                <div className="w-full flex flex-col items-center justify-center">
                  <div
                    className={`relative w-48 h-48 bg-secondary rounded-full border-4 border-gray-300 flex items-center justify-center cursor-pointer shadow-lg ${
                      imagePreview ? "border-gray-500" : ""
                    }`}
                    onClick={() => {
                      if (fileInputRef.current) {
                        fileInputRef.current.click();
                      }
                    }}
                    title="Click to upload image"
                  >
                    {imagePreview ? (
                      <Image
                        className="rounded-full object-cover shadow-lg"
                        src={imagePreview}
                        alt="Uploaded Preview"
                        width={200}
                        height={200}
                      />
                    ) : (
                      <MdCloudUpload className="text-white text-8xl" />
                    )}
                    <input
                      ref={fileInputRef}
                      onChange={onFileUploadChange}
                      className="hidden"
                      type="file"
                      accept="image/*"
                    />
                  </div>

                  {/* Info Text Below Image */}
                  <div className="text-center mt-2">
                    <h3 className="font-bold text-lg uppercase text-gray-500 mb-1">
                      Upload Your Photo
                    </h3>
                    <h5 className="text-gray-400 text-sm">
                      PNG, JPG, JPEG files, 500KB or less
                    </h5>
                  </div>

                  {/* Upload Button Below Text */}
                  <div className="text-center mt-4">
                    <button
                      onClick={uploadImage}
                      disabled={uploading}
                      className={`w-full lg:w-auto bg-[#f36093] text-white text-sm px-6 py-2 hover:bg-secondary rounded-lg transition-all duration-300 ${
                        uploading ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                    >
                      {uploading ? "Uploading..." : "Upload"}
                    </button>
                    {imagePreview && (
                      <button
                        className="mt-2 text-red-600 w-full lg:w-auto"
                        onClick={removeImage}
                        title="Remove image"
                      >
                        <MdOutlineClose className="inline-block" /> Remove Image
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Password change form */}
          <div class="w-2/3">
            <h3 class="text-md font-semibold">Change Password</h3>
            <hr class="my-2" />
            <form class="mt-4" onSubmit={passwordChangeFormSubmit}>
              <div class="mb-4">
                <label
                  class="text-md block text-gray-600 mb-2"
                  for="current-password"
                >
                  Current Password
                </label>
                <input
                  type="password"
                  id="current-password"
                  name="current-password"
                  class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  value={passwordFormData.currentPassword}
                  onChange={(event) =>
                    setPasswordFormData({
                      ...passwordFormData,
                      currentPassword: event.target.value,
                    })
                  }
                />
                {errors.currentPassword && (
                  <stong className="text-red-500 font-semibold">
                    {errors.currentPassword}
                  </stong>
                )}
              </div>
              <div class="mb-4">
                <label
                  class="text-base block text-gray-600 mb-2"
                  for="new-password"
                >
                  New Password
                </label>
                <input
                  type="password"
                  id="new-password"
                  name="new-password"
                  class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  value={passwordFormData.newPassword}
                  onChange={(event) =>
                    setPasswordFormData({
                      ...passwordFormData,
                      newPassword: event.target.value,
                    })
                  }
                />
                {errors.newPassword && (
                  <stong className="text-red-500 font-semibold">
                    {errors.newPassword}
                  </stong>
                )}
              </div>
              <div class="mb-4">
                <label
                  class="text-md block text-gray-600 mb-2"
                  for="confirm-password"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirm-password"
                  name="confirm-password"
                  class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  value={passwordFormData.confirmPassword}
                  onChange={(event) =>
                    setPasswordFormData({
                      ...passwordFormData,
                      confirmPassword: event.target.value,
                    })
                  }
                />
                {errors.confirmPassword && (
                  <stong className="text-red-500 font-semibold">
                    {errors.confirmPassword}
                  </stong>
                )}
              </div>
              <button
                type="submit"
                class="w-full bg-[#f36093] hover:bg-secondary text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Update Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
