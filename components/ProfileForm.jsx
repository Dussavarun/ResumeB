"use client";
import { useDispatch, useSelector } from "react-redux";
import { setProfileField } from "../store/slices/userSlice";

export default function ProfileForm() {
  const dispatch = useDispatch();
  // const profile = useSelector((state) => state.user.personalInfo);
  // const profile = useSelector((state) => state.user?.personalInfo || { links: {} });
  const profile = useSelector((state) => state.user?.personalInfo) || { links: {} };

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setProfileField({ field: name, value }));
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-2xl shadow-md space-y-4">
      <h2 className="text-2xl font-semibold text-center mb-2">Profile Details</h2>

      <input
        type="text"
        name="name"
        value={profile.name || ""}
        onChange={handleChange}
        placeholder="Full Name"
        className="w-full p-2 border rounded-lg"
      />

      <input
        type="email"
        name="email"
        value={profile.email || ""}
        onChange={handleChange}
        placeholder="Email Address"
        className="w-full p-2 border rounded-lg"
      />

      <input
        type="text"
        name="phone"
        value={profile.phone || ""}
        onChange={handleChange}
        placeholder="Phone Number"
        className="w-full p-2 border rounded-lg"
      />

      <input
        type="text"
        name="location"
        value={profile.location || ""}
        onChange={handleChange}
        placeholder="Location"
        className="w-full p-2 border rounded-lg"
      />

      <textarea
        name="about"
        value={profile.about || ""}
        onChange={handleChange}
        placeholder="About You"
        className="w-full p-2 border rounded-lg h-24 resize-none"
      />

      <input
        type="text"
        name="linkedin"
        value={profile.links.linkedin || ""}
        onChange={handleChange}
        placeholder="LinkedIn Profile URL"
        className="w-full p-2 border rounded-lg"
      />

      <input
        type="text"
        name="github"
        value={profile.links.github || ""}
        onChange={handleChange}
        placeholder="GitHub Profile URL"
        className="w-full p-2 border rounded-lg"
      />

      <input
        type="text"
        name="portfolio"
        value={profile.links.portfolio || ""}
        onChange={handleChange}
        placeholder="Portfolio Link"
        className="w-full p-2 border rounded-lg"
      />

      <input
        type="text"
        name="leetcode"
        value={profile.links.leetcode || ""}
        onChange={handleChange}
        placeholder="LeetCode Profile"
        className="w-full p-2 border rounded-lg"
      />

      <input
        type="text"
        name="codeforces"
        value={profile.links.codeforces || ""}
        onChange={handleChange}
        placeholder="Codeforces Profile"
        className="w-full p-2 border rounded-lg"
      />
    </div>
  );
}
