// "use client";
// import { useDispatch, useSelector } from "react-redux";
// import { setProfileField } from "../store/slices/userSlice";

// export default function ProfileForm() {
//   const dispatch = useDispatch();
//   // const profile = useSelector((state) => state.user.personalInfo);
//   // const profile = useSelector((state) => state.user?.personalInfo || { links: {} });
//   const profile = useSelector((state) => state.user?.personalInfo) || { links: {} };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     dispatch(setProfileField({ field: name, value }));
//   };

//   return (
//     <div className="w-full max-w-md mx-auto p-6 bg-white rounded-2xl shadow-md space-y-4">
//       <h2 className="text-2xl font-semibold text-center mb-2">Profile Details</h2>

//       <input
//         type="text"
//         name="name"
//         value={profile.name || ""}
//         onChange={handleChange}
//         placeholder="Full Name"
//         className="w-full p-2 border rounded-lg"
//       />

//       <input
//         type="email"
//         name="email"
//         value={profile.email || ""}
//         onChange={handleChange}
//         placeholder="Email Address"
//         className="w-full p-2 border rounded-lg"
//       />

//       <input
//         type="text"
//         name="phone"
//         value={profile.phone || ""}
//         onChange={handleChange}
//         placeholder="Phone Number"
//         className="w-full p-2 border rounded-lg"
//       />

//       <input
//         type="text"
//         name="location"
//         value={profile.location || ""}
//         onChange={handleChange}
//         placeholder="Location"
//         className="w-full p-2 border rounded-lg"
//       />

//       <textarea
//         name="about"
//         value={profile.about || ""}
//         onChange={handleChange}
//         placeholder="About You"
//         className="w-full p-2 border rounded-lg h-24 resize-none"
//       />

//       <input
//         type="text"
//         name="linkedin"
//         value={profile.links.linkedin || ""}
//         onChange={handleChange}
//         placeholder="LinkedIn Profile URL"
//         className="w-full p-2 border rounded-lg"
//       />

//       <input
//         type="text"
//         name="github"
//         value={profile.links.github || ""}
//         onChange={handleChange}
//         placeholder="GitHub Profile URL"
//         className="w-full p-2 border rounded-lg"
//       />

//       <input
//         type="text"
//         name="portfolio"
//         value={profile.links.portfolio || ""}
//         onChange={handleChange}
//         placeholder="Portfolio Link"
//         className="w-full p-2 border rounded-lg"
//       />

//       <input
//         type="text"
//         name="leetcode"
//         value={profile.links.leetcode || ""}
//         onChange={handleChange}
//         placeholder="LeetCode Profile"
//         className="w-full p-2 border rounded-lg"
//       />

//       <input
//         type="text"
//         name="codeforces"
//         value={profile.links.codeforces || ""}
//         onChange={handleChange}
//         placeholder="Codeforces Profile"
//         className="w-full p-2 border rounded-lg"
//       />
//     </div>
//   );
// }

"use client";
import { useDispatch, useSelector } from "react-redux";
import { setProfileField } from "../store/slices/userSlice";

export default function ProfileForm() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user?.personalInfo) || { links: {} };

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setProfileField({ field: name, value }));
  };

  return (
    <div className="min-h-screen bg-black text-gray-200 flex justify-center items-start p-8">
      <div className="w-full max-w-lg bg-neutral-900 p-8 rounded-2xl shadow-lg border border-neutral-800 space-y-5">
        <h2 className="text-3xl font-semibold text-center mb-2 text-white border-b border-neutral-700 pb-3">
          Profile Details
        </h2>

        {/* Basic Info */}
        <div className="space-y-4">
          <input
            type="text"
            name="name"
            value={profile.name || ""}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            name="email"
            value={profile.email || ""}
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="text"
            name="phone"
            value={profile.phone || ""}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="text"
            name="location"
            value={profile.location || ""}
            onChange={handleChange}
            placeholder="Location"
            className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* About Section */}
        <textarea
          name="about"
          value={profile.about || ""}
          onChange={handleChange}
          placeholder="About You"
          className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 h-28 resize-none"
        />

        {/* Links Section */}
        <h3 className="text-xl font-semibold text-white mt-6 border-b border-neutral-700 pb-2">
          Links
        </h3>

        <div className="space-y-4 mt-3">
          <input
            type="text"
            name="linkedin"
            value={profile.links.linkedin || ""}
            onChange={handleChange}
            placeholder="LinkedIn Profile URL"
            className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="text"
            name="github"
            value={profile.links.github || ""}
            onChange={handleChange}
            placeholder="GitHub Profile URL"
            className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="text"
            name="portfolio"
            value={profile.links.portfolio || ""}
            onChange={handleChange}
            placeholder="Portfolio Link"
            className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="text"
            name="leetcode"
            value={profile.links.leetcode || ""}
            onChange={handleChange}
            placeholder="LeetCode Profile"
            className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="text"
            name="codeforces"
            value={profile.links.codeforces || ""}
            onChange={handleChange}
            placeholder="Codeforces Profile"
            className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
  );
}
