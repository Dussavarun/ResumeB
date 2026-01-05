
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addAccomplishment,
  removeAccomplishment
} from "../store/slices/acomplishmentSlice";
import {
  addCertification,
  removeCertification
} from "../store/slices/certificationSlice";

const AccomplishmentCertificationForm = () => {
  const dispatch = useDispatch();
  const accomplishments = useSelector((state) => state.accomplishments.accomplishments);
  const certifications = useSelector((state) => state.certifications.certifications);

  const [accomplishmentInput, setAccomplishmentInput] = useState("");
  const [certInput, setCertInput] = useState({
    title: "",
    provider: "",
    date: "",
    credentialUrl: ""
  });

  const handleAddAccomplishment = () => {
    if (accomplishmentInput.trim()) {
      dispatch(addAccomplishment({ title: accomplishmentInput }));
      setAccomplishmentInput("");
    }
  };

  const handleAddCertification = () => {
    if (certInput.title.trim()) {
      dispatch(addCertification(certInput));
      setCertInput({ title: "", provider: "", date: "", credentialUrl: "" });
    }
  };

  return (
    <div className="min-h-screen bg-black text-gray-200 p-8 space-y-10">
      {/* Accomplishments Section */}
      <div className="bg-neutral-900 p-6 rounded-2xl shadow-md border border-neutral-800">
        <h2 className="text-2xl font-semibold mb-4 text-white border-b border-neutral-700 pb-2">
          Accomplishments
        </h2>
        <div className="flex items-center space-x-3 mb-5">
          <input
            type="text"
            value={accomplishmentInput}
            onChange={(e) => setAccomplishmentInput(e.target.value)}
            placeholder="Add accomplishment..."
            className="flex-1 px-4 py-2 bg-neutral-800 text-gray-200 rounded-md border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleAddAccomplishment}
            className="px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-medium transition"
          >
            Add
          </button>
        </div>

        <ul className="space-y-2">
          {accomplishments.map((acc, idx) => (
            <li
              key={idx}
              className="flex justify-between items-center bg-neutral-800 px-4 py-2 rounded-md border border-neutral-700"
            >
              <span>{acc.title}</span>
              <button
                onClick={() => dispatch(removeAccomplishment(idx))}
                className="text-red-500 hover:text-red-400 transition"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Certifications Section */}
      <div className="bg-neutral-900 p-6 rounded-2xl shadow-md border border-neutral-800">
        <h2 className="text-2xl font-semibold mb-4 text-white border-b border-neutral-700 pb-2">
          Certifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
          <input
            type="text"
            placeholder="Title"
            value={certInput.title}
            onChange={(e) => setCertInput({ ...certInput, title: e.target.value })}
            className="px-4 py-2 bg-neutral-800 text-gray-200 rounded-md border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Provider"
            value={certInput.provider}
            onChange={(e) => setCertInput({ ...certInput, provider: e.target.value })}
            className="px-4 py-2 bg-neutral-800 text-gray-200 rounded-md border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="date"
            placeholder="Date"
            value={certInput.date}
            onChange={(e) => setCertInput({ ...certInput, date: e.target.value })}
            className="px-4 py-2 bg-neutral-800 text-gray-200 rounded-md border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Credential URL"
            value={certInput.credentialUrl}
            onChange={(e) => setCertInput({ ...certInput, credentialUrl: e.target.value })}
            className="px-4 py-2 bg-neutral-800 text-gray-200 rounded-md border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          onClick={handleAddCertification}
          className="px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-medium transition"
        >
          Add
        </button>

        <ul className="mt-6 space-y-3">
          {certifications.map((cert, idx) => (
            <li
              key={idx}
              className="bg-neutral-800 px-4 py-3 rounded-md border border-neutral-700 flex justify-between items-center"
            >
              <div>
                <p className="font-medium text-white">{cert.title}</p>
                <p className="text-sm text-gray-400">
                  {cert.provider} — {cert.date}
                </p>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline text-sm"
                  >
                    View Credential
                  </a>
                )}
              </div>
              <button
                onClick={() => dispatch(removeCertification(idx))}
                className="text-red-500 hover:text-red-400 transition"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AccomplishmentCertificationForm;

