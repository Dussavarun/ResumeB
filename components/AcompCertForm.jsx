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
