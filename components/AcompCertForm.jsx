import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addAccomplishment,
  removeAccomplishment,
  updateAccomplishment
} from "./accomplishmentSlice";
import {
  addCertification,
  removeCertification,
  updateCertification
} from "./certificationSlice";

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
    <div className="p-4 space-y-6">
      <div>
        <h2>Accomplishments</h2>
        <input
          type="text"
          value={accomplishmentInput}
          onChange={(e) => setAccomplishmentInput(e.target.value)}
          placeholder="Add accomplishment"
        />
        <button onClick={handleAddAccomplishment}>Add</button>
        <ul>
          {accomplishments.map((acc, idx) => (
            <li key={idx}>
              {acc.title}
              <button onClick={() => dispatch(removeAccomplishment(idx))}>Remove</button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Certifications</h2>
        <input
          type="text"
          placeholder="Title"
          value={certInput.title}
          onChange={(e) => setCertInput({ ...certInput, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Provider"
          value={certInput.provider}
          onChange={(e) => setCertInput({ ...certInput, provider: e.target.value })}
        />
        <input
          type="date"
          placeholder="Date"
          value={certInput.date}
          onChange={(e) => setCertInput({ ...certInput, date: e.target.value })}
        />
        <input
          type="text"
          placeholder="Credential URL"
          value={certInput.credentialUrl}
          onChange={(e) => setCertInput({ ...certInput, credentialUrl: e.target.value })}
        />
        <button onClick={handleAddCertification}>Add</button>
        <ul>
          {certifications.map((cert, idx) => (
            <li key={idx}>
              {cert.title} - {cert.provider} ({cert.date}) 
              <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">Link</a>
              <button onClick={() => dispatch(removeCertification(idx))}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AccomplishmentCertificationForm;
