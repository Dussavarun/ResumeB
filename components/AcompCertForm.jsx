
// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   addAccomplishment,
//   removeAccomplishment
// } from "../store/slices/acomplishmentSlice";
// import {
//   addCertification,
//   removeCertification
// } from "../store/slices/certificationSlice";

// const AccomplishmentCertificationForm = () => {
//   const dispatch = useDispatch();
//   const accomplishments = useSelector((state) => state.accomplishments.accomplishments);
//   const certifications = useSelector((state) => state.certifications.certifications);

//   const [accomplishmentInput, setAccomplishmentInput] = useState("");
//   const [certInput, setCertInput] = useState({
//     title: "",
//     provider: "",
//     date: "",
//     credentialUrl: ""
//   });

//   const handleAddAccomplishment = () => {
//     if (accomplishmentInput.trim()) {
//       dispatch(addAccomplishment({ title: accomplishmentInput }));
//       setAccomplishmentInput("");
//     }
//   };

//   const handleAddCertification = () => {
//     if (certInput.title.trim()) {
//       dispatch(addCertification(certInput));
//       setCertInput({ title: "", provider: "", date: "", credentialUrl: "" });
//     }
//   };

//   return (
//     <div className="min-h-screen bg-black text-gray-200 p-8 space-y-10">
//       {/* Accomplishments Section */}
//       <div className="bg-neutral-900 p-6 rounded-2xl shadow-md border border-neutral-800">
//         <h2 className="text-2xl font-semibold mb-4 text-white border-b border-neutral-700 pb-2">
//           Accomplishments
//         </h2>
//         <div className="flex items-center space-x-3 mb-5">
//           <input
//             type="text"
//             value={accomplishmentInput}
//             onChange={(e) => setAccomplishmentInput(e.target.value)}
//             placeholder="Add accomplishment..."
//             className="flex-1 px-4 py-2 bg-neutral-800 text-gray-200 rounded-md border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <button
//             onClick={handleAddAccomplishment}
//             className="px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-medium transition"
//           >
//             Add
//           </button>
//         </div>

//         <ul className="space-y-2">
//           {accomplishments.map((acc, idx) => (
//             <li
//               key={idx}
//               className="flex justify-between items-center bg-neutral-800 px-4 py-2 rounded-md border border-neutral-700"
//             >
//               <span>{acc.title}</span>
//               <button
//                 onClick={() => dispatch(removeAccomplishment(idx))}
//                 className="text-red-500 hover:text-red-400 transition"
//               >
//                 Remove
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Certifications Section */}
//       <div className="bg-neutral-900 p-6 rounded-2xl shadow-md border border-neutral-800">
//         <h2 className="text-2xl font-semibold mb-4 text-white border-b border-neutral-700 pb-2">
//           Certifications
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
//           <input
//             type="text"
//             placeholder="Title"
//             value={certInput.title}
//             onChange={(e) => setCertInput({ ...certInput, title: e.target.value })}
//             className="px-4 py-2 bg-neutral-800 text-gray-200 rounded-md border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <input
//             type="text"
//             placeholder="Provider"
//             value={certInput.provider}
//             onChange={(e) => setCertInput({ ...certInput, provider: e.target.value })}
//             className="px-4 py-2 bg-neutral-800 text-gray-200 rounded-md border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <input
//             type="date"
//             placeholder="Date"
//             value={certInput.date}
//             onChange={(e) => setCertInput({ ...certInput, date: e.target.value })}
//             className="px-4 py-2 bg-neutral-800 text-gray-200 rounded-md border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <input
//             type="text"
//             placeholder="Credential URL"
//             value={certInput.credentialUrl}
//             onChange={(e) => setCertInput({ ...certInput, credentialUrl: e.target.value })}
//             className="px-4 py-2 bg-neutral-800 text-gray-200 rounded-md border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <button
//           onClick={handleAddCertification}
//           className="px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-medium transition"
//         >
//           Add
//         </button>

//         <ul className="mt-6 space-y-3">
//           {certifications.map((cert, idx) => (
//             <li
//               key={idx}
//               className="bg-neutral-800 px-4 py-3 rounded-md border border-neutral-700 flex justify-between items-center"
//             >
//               <div>
//                 <p className="font-medium text-white">{cert.title}</p>
//                 <p className="text-sm text-gray-400">
//                   {cert.provider} — {cert.date}
//                 </p>
//                 {cert.credentialUrl && (
//                   <a
//                     href={cert.credentialUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-blue-400 hover:underline text-sm"
//                   >
//                     View Credential
//                   </a>
//                 )}
//               </div>
//               <button
//                 onClick={() => dispatch(removeCertification(idx))}
//                 className="text-red-500 hover:text-red-400 transition"
//               >
//                 Remove
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default AccomplishmentCertificationForm;

"use client";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addAccomplishment,
  removeAccomplishment,
} from "../store/slices/acomplishmentSlice";
import {
  addCertification,
  removeCertification,
} from "../store/slices/certificationSlice";

const AccomplishmentCertificationForm = () => {
  const dispatch = useDispatch();
  const accomplishments = useSelector(
    (state) => state.accomplishments.accomplishments
  );
  const certifications = useSelector(
    (state) => state.certifications.certifications
  );

  const [accomplishmentInput, setAccomplishmentInput] = useState("");
  const [certInput, setCertInput] = useState({
    title: "",
    provider: "",
    date: "",
    credentialUrl: "",
  });

  const handleAddAccomplishment = () => {
    if (!accomplishmentInput.trim()) return;
    dispatch(addAccomplishment({ title: accomplishmentInput }));
    setAccomplishmentInput("");
  };

  const handleAddCertification = () => {
    if (!certInput.title.trim()) return;
    dispatch(addCertification(certInput));
    setCertInput({ title: "", provider: "", date: "", credentialUrl: "" });
  };

  return (
    <div className="min-h-screen bg-white flex justify-center items-start p-8">
      <div
        className="w-full max-w-4xl bg-white p-10 rounded-3xl
        border-[3px] border-black
        shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
        space-y-12"
      >
        {/* Accomplishments */}
        <section className="space-y-6">
          <h2 className="text-4xl font-extrabold text-black text-center border-b-2 border-black pb-4">
            Accomplishments
          </h2>

          <div className="flex gap-4">
            <input
              type="text"
              value={accomplishmentInput}
              onChange={(e) => setAccomplishmentInput(e.target.value)}
              placeholder="Add accomplishment..."
              className="input"
            />

            <button
              onClick={handleAddAccomplishment}
              className="px-6 py-3
              !bg-[#060606] text-white font-semibold
              border-2 border-black rounded-xl
              hover:!bg-[#2ff50e] text-black font-semibold"
            >
              Add
            </button>
          </div>

          {accomplishments.length > 0 && (
            <ul className="space-y-3">
              {accomplishments.map((acc, idx) => (
                <li
                  key={idx}
                  className="flex justify-between items-center
                  bg-white border-2 border-black rounded-xl px-4 py-3"
                >
                  <span className="text-black">{acc.title}</span>
                  <button
                    onClick={() => dispatch(removeAccomplishment(idx))}
                    className="text-black font-bold hover:text-red-600"
                  >
                    ✕
                  </button>
                </li>
              ))}
            </ul>
          )}
        </section>

        {/* Certifications */}
        <section className="space-y-6">
          <h2 className="text-4xl font-extrabold text-black text-center border-b-2 border-black pb-4">
            Certifications
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input
              type="text"
              placeholder="Title"
              value={certInput.title}
              onChange={(e) =>
                setCertInput({ ...certInput, title: e.target.value })
              }
              className="input"
            />

            <input
              type="text"
              placeholder="Provider"
              value={certInput.provider}
              onChange={(e) =>
                setCertInput({ ...certInput, provider: e.target.value })
              }
              className="input"
            />

            <input
              type="date"
              value={certInput.date}
              onChange={(e) =>
                setCertInput({ ...certInput, date: e.target.value })
              }
              className="input"
            />

            <input
              type="text"
              placeholder="Credential URL"
              value={certInput.credentialUrl}
              onChange={(e) =>
                setCertInput({
                  ...certInput,
                  credentialUrl: e.target.value,
                })
              }
              className="input"
            />
          </div>

          <button
            onClick={handleAddCertification}
            className="w-full px-6 py-3
            !bg-[#0c0c0c] text-white font-semibold
            border-2 border-black rounded-xl
            hover:!bg-[#2ff50e] transition-colors"
          >
            Add Certification
          </button>

          {certifications.length > 0 && (
            <ul className="space-y-4">
              {certifications.map((cert, idx) => (
                <li
                  key={idx}
                  className="flex justify-between items-start gap-4
                  bg-white border-2 border-black rounded-xl p-4"
                >
                  <div className="space-y-1">
                    <p className="font-bold text-black">{cert.title}</p>
                    <p className="text-sm text-gray-600">
                      {cert.provider} — {cert.date}
                    </p>
                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black underline text-sm"
                      >
                        View Credential
                      </a>
                    )}
                  </div>

                  <button
                    onClick={() => dispatch(removeCertification(idx))}
                    className="text-black font-bold hover:text-red-600"
                  >
                    ✕
                  </button>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
};

export default AccomplishmentCertificationForm;
