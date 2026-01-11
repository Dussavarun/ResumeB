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
    <div className="min-h-screen bg-white flex justify-center items-start p-8">
      <div
        className="w-full max-w-4xl bg-white p-10 rounded-3xl 
border-[3px] border-black 
shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
space-y-8"
      >
        <h2 className="text-4xl font-extrabold text-black text-center border-b-2 border-black pb-4">
          Profile Details
        </h2>

        {/* Basic Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <input
            type="text"
            name="name"
            value={profile.name || ""}
            onChange={handleChange}
            placeholder="Full Name"
            className="input"
          />

          <input
            type="email"
            name="email"
            value={profile.email || ""}
            onChange={handleChange}
            placeholder="Email Address"
            className="input"
          />

          <input
            type="text"
            name="phone"
            value={profile.phone || ""}
            onChange={handleChange}
            placeholder="Phone Number"
            className="input"
          />

          <input
            type="text"
            name="location"
            value={profile.location || ""}
            onChange={handleChange}
            placeholder="Location"
            className="input"
          />
        </div>

        {/* About */}
        <div>
          <label className="block text-black font-semibold mb-2">
            About You
          </label>
          <textarea
            name="about"
            value={profile.about || ""}
            onChange={handleChange}
            placeholder="Write something about yourself..."
           className="w-full px-4 py-3 bg-white text-black placeholder-gray-400 border-2 border-black rounded-xl focus:outline-none focus:ring-2 focus:ring-black
h-32 resize-none"

          />
        </div>

        {/* Links */}
        <h3 className="text-2xl font-bold text-black border-b-2 border-black pb-2">
          Links
        </h3>

        <div className="grid grid-cols-1 gap-4">
          <input
            type="text"
            name="linkedin"
            value={profile.links.linkedin || ""}
            onChange={handleChange}
            placeholder="LinkedIn URL"
            className="input"
          />

          <input
            type="text"
            name="github"
            value={profile.links.github || ""}
            onChange={handleChange}
            placeholder="GitHub URL"
            className="input"
          />

          <input
            type="text"
            name="portfolio"
            value={profile.links.portfolio || ""}
            onChange={handleChange}
            placeholder="Portfolio Website"
            className="input"
          />

          <input
            type="text"
            name="leetcode"
            value={profile.links.leetcode || ""}
            onChange={handleChange}
            placeholder="LeetCode Profile"
            className="input"
          />

          <input
            type="text"
            name="codeforces"
            value={profile.links.codeforces || ""}
            onChange={handleChange}
            placeholder="Codeforces Profile"
            className="input"
          />
        </div>
      </div>
    </div>
  );
}
