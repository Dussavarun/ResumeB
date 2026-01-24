"use client";
import { useDispatch, useSelector } from "react-redux";
import { setProfileField } from "../store/slices/personalInfoSlice";

export default function ProfileForm() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user?.personalInfo) || {
    links: {},
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setProfileField({ field: name, value }));
  };

  return (
    <div
      className="
        w-full max-w-4xl
        bg-white
        p-4 sm:p-10
        rounded-xl sm:rounded-3xl
        border-2 sm:border-[3px] border-black
        shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
        sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
        space-y-5 sm:space-y-8
      "
    >
      {/* Title (hidden / small on mobile) */}
      <h2
        className="
          hidden sm:block
          text-4xl font-extrabold text-black text-center
          border-b-2 border-black pb-4
        "
      >
        Profile Details
      </h2>

      {/* Mobile title (subtle) */}
      <h2 className="block sm:hidden text-lg font-bold text-black">
        Profile
      </h2>

      {/* Basic Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5">
        <input
          type="text"
          name="name"
          value={profile.name || ""}
          onChange={handleChange}
          placeholder="Full Name"
          className="
            w-full px-3 py-2 sm:px-4 sm:py-3
            bg-white text-black placeholder-gray-400
            border-2 border-black rounded-lg sm:rounded-xl
            text-sm sm:text-base
            focus:outline-none focus:ring-2 focus:ring-black
          "
        />

        <input
          type="email"
          name="email"
          value={profile.email || ""}
          onChange={handleChange}
          placeholder="Email Address"
          className="
            w-full px-3 py-2 sm:px-4 sm:py-3
            bg-white text-black placeholder-gray-400
            border-2 border-black rounded-lg sm:rounded-xl
            text-sm sm:text-base
            focus:outline-none focus:ring-2 focus:ring-black
          "
        />

        <input
          type="text"
          name="phone"
          value={profile.phone || ""}
          onChange={handleChange}
          placeholder="Phone Number"
          className="
            w-full px-3 py-2 sm:px-4 sm:py-3
            bg-white text-black placeholder-gray-400
            border-2 border-black rounded-lg sm:rounded-xl
            text-sm sm:text-base
            focus:outline-none focus:ring-2 focus:ring-black
          "
        />

        <input
          type="text"
          name="location"
          value={profile.location || ""}
          onChange={handleChange}
          placeholder="Location"
          className="
            w-full px-3 py-2 sm:px-4 sm:py-3
            bg-white text-black placeholder-gray-400
            border-2 border-black rounded-lg sm:rounded-xl
            text-sm sm:text-base
            focus:outline-none focus:ring-2 focus:ring-black
          "
        />
      </div>


      {/* Links */}
      <h3
        className="
          text-lg sm:text-2xl font-bold text-black
          border-b-2 border-black pb-1 sm:pb-2
        "
      >
        Links
      </h3>

      <div className="grid grid-cols-1 gap-3 sm:gap-4">
        <input
          type="text"
          name="linkedin"
          value={profile.links.linkedin || ""}
          onChange={handleChange}
          placeholder="LinkedIn URL"
          className="
            w-full px-3 py-2 sm:px-4 sm:py-3
            bg-white text-black placeholder-gray-400
            border-2 border-black rounded-lg sm:rounded-xl
            text-sm sm:text-base
            focus:outline-none focus:ring-2 focus:ring-black
          "
        />

        <input
          type="text"
          name="github"
          value={profile.links.github || ""}
          onChange={handleChange}
          placeholder="GitHub URL"
          className="
            w-full px-3 py-2 sm:px-4 sm:py-3
            bg-white text-black placeholder-gray-400
            border-2 border-black rounded-lg sm:rounded-xl
            text-sm sm:text-base
            focus:outline-none focus:ring-2 focus:ring-black
          "
        />

        <input
          type="text"
          name="portfolio"
          value={profile.links.portfolio || ""}
          onChange={handleChange}
          placeholder="Portfolio Website"
          className="
            w-full px-3 py-2 sm:px-4 sm:py-3
            bg-white text-black placeholder-gray-400
            border-2 border-black rounded-lg sm:rounded-xl
            text-sm sm:text-base
            focus:outline-none focus:ring-2 focus:ring-black
          "
        />

        <input
          type="text"
          name="leetcode"
          value={profile.links.leetcode || ""}
          onChange={handleChange}
          placeholder="LeetCode Profile"
          className="
            w-full px-3 py-2 sm:px-4 sm:py-3
            bg-white text-black placeholder-gray-400
            border-2 border-black rounded-lg sm:rounded-xl
            text-sm sm:text-base
            focus:outline-none focus:ring-2 focus:ring-black
          "
        />

        <input
          type="text"
          name="codeforces"
          value={profile.links.codeforces || ""}
          onChange={handleChange}
          placeholder="Codeforces Profile"
          className="
            w-full px-3 py-2 sm:px-4 sm:py-3
            bg-white text-black placeholder-gray-400
            border-2 border-black rounded-lg sm:rounded-xl
            text-sm sm:text-base
            focus:outline-none focus:ring-2 focus:ring-black
          "
        />
      </div>
    </div>
  );
}
