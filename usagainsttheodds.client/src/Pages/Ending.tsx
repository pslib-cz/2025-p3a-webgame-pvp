import React from "react";
import { Link } from "react-router-dom";

type EndingProps = {
  title: string;
  message: string;
  imageUrl?: string;
  cta?: string;
  variant?: string;
};

const Ending: React.FC<EndingProps> = ({ title, message, imageUrl, cta = "Main Menu", variant }) => {
  return (
    <div className={`ending-page ${variant ?? ""}`} style={{ textAlign: "center", padding: "2rem" }}>
      {imageUrl && (
        <img src={imageUrl} alt={title} style={{ maxWidth: 380, width: "60%", display: "block", margin: "0 auto 1rem" }} />
      )}

      <h1>{title}</h1>
      <p style={{ maxWidth: 700, margin: "0.5rem auto 1.5rem" }}>{message}</p>

      <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
        <button onClick={() => window.location.reload()} className="btn">
          Retry
        </button>
        <Link to="/" className="btn primary">
          {cta}
        </Link>
      </div>
    </div>
  );
};

export default Ending;