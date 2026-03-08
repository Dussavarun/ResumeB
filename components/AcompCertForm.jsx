"use client";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Pencil } from "lucide-react";

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
    (s) => s.accomplishments.accomplishments
  );
  const certifications = useSelector(
    (s) => s.certifications.certifications
  );

  const [accomplishmentInput, setAccomplishmentInput] = useState("");

  const [certInput, setCertInput] = useState({
    title: "",
    provider: "",
    date: "",
    credentialUrl: "",
  });

  const [editingCertIndex, setEditingCertIndex] = useState(null);

  const handleAddAccomplishment = () => {
    if (!accomplishmentInput.trim()) return;
    dispatch(addAccomplishment({ title: accomplishmentInput }));
    setAccomplishmentInput("");
  };

  const handleAddCertification = () => {
    if (!certInput.title.trim()) return;

    if (editingCertIndex !== null) {
      dispatch(removeCertification(editingCertIndex));
      setEditingCertIndex(null);
    }

    dispatch(addCertification(certInput));

    setCertInput({
      title: "",
      provider: "",
      date: "",
      credentialUrl: "",
    });
  };

  const handleEditCertification = (cert, index) => {
    setCertInput({
      title: cert.title || "",
      provider: cert.provider || "",
      date: cert.date || "",
      credentialUrl: cert.credentialUrl || "",
    });

    setEditingCertIndex(index);
  };

  return (
    <div className="w-full max-w-4xl bg-white p-4 sm:p-8 rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-8">

      {/* ACCOMPLISHMENTS */}
      <section className="space-y-4">

        <h2 className="hidden sm:block text-4xl font-extrabold text-black text-center border-b-2 border-black pb-4">
          Accomplishments
        </h2>

        <h2 className="block sm:hidden text-lg font-bold text-black text-center">
          Accomplishments
          <span className="block w-full h-[2px] bg-black mt-2" />
        </h2>

        <div className="flex gap-2">
          <input
            value={accomplishmentInput}
            onChange={(e) => setAccomplishmentInput(e.target.value)}
            placeholder="Add accomplishment"
            className="input py-1.5 text-sm flex-1"
          />
          <button
            onClick={handleAddAccomplishment}
            className="px-3 py-1.5 bg-black text-white text-sm font-semibold border-2 border-black rounded-lg hover:bg-white hover:text-black"
          >
            Add
          </button>
        </div>

        {accomplishments.length > 0 && (
          <ul className="space-y-2">
            {accomplishments.map((acc, idx) => (
              <li
                key={idx}
                className="flex justify-between items-center border-2 border-black rounded-lg px-3 py-2"
              >
                <span className="text-sm text-black">{acc.title}</span>

                <button
                  onClick={() => dispatch(removeAccomplishment(idx))}
                  className="font-bold text-red-600 hover:text-red-800 text-lg leading-none"
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* CERTIFICATIONS */}
      <section className="space-y-4">

        <h2 className="hidden sm:block text-4xl font-extrabold text-black text-center border-b-2 border-black pb-4">
          Certifications
        </h2>

        <h2 className="block sm:hidden text-lg font-bold text-black text-center">
          Certifications
          <span className="block w-full h-[2px] bg-black mt-2" />
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

          <input
            placeholder="Title"
            value={certInput.title}
            onChange={(e) =>
              setCertInput({ ...certInput, title: e.target.value })
            }
            className="input py-1.5 text-sm"
          />

          <input
            placeholder="Provider"
            value={certInput.provider}
            onChange={(e) =>
              setCertInput({ ...certInput, provider: e.target.value })
            }
            className="input py-1.5 text-sm"
          />

          <input
            type="date"
            value={certInput.date}
            onChange={(e) =>
              setCertInput({ ...certInput, date: e.target.value })
            }
            className="input py-1.5 text-sm"
          />

          <input
            placeholder="Credential URL"
            value={certInput.credentialUrl}
            onChange={(e) =>
              setCertInput({
                ...certInput,
                credentialUrl: e.target.value,
              })
            }
            className="input py-1.5 text-sm"
          />

        </div>

        <button
          onClick={handleAddCertification}
          className="w-full py-2 bg-black text-white text-sm font-semibold border-2 border-black rounded-lg hover:bg-white hover:text-black"
        >
          {editingCertIndex !== null ? "Update Certification" : "Add Certification"}
        </button>

        {certifications.length > 0 && (
          <ul className="space-y-3">
            {certifications.map((cert, idx) => (
              <li
                key={idx}
                className="flex justify-between gap-3 border-2 border-black rounded-lg p-3"
              >
                <div className="space-y-1">
                  <p className="font-bold text-sm text-black">
                    {cert.title}
                  </p>

                  <p className="text-xs text-gray-600">
                    {cert.provider}
                    {cert.date ? ` — ${cert.date}` : ""}
                  </p>

                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs underline"
                    >
                      View Credential
                    </a>
                  )}
                </div>

                <div className="flex flex-col items-center gap-1">

                <button
                  onClick={() => handleEdit(cert, idx)}
                  className="text-black font-semibold hover:text-blue-600"
                >
                  ✏️
                </button>

                  <button
                    onClick={() => dispatch(removeCertification(idx))}
                    className="font-bold text-red-600 hover:text-red-800 text-lg leading-none"
                  >
                    ✕
                  </button>

                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default AccomplishmentCertificationForm;