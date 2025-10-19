// components/ResumePreview/Creative/CreativeTemplate1.tsx
import React from "react";

interface Props { data: any }

export const CreativeTemplate1: React.FC<Props> = ({ data }) => {
  return (
    <div style={{ fontFamily: "Georgia, serif", backgroundColor: "#f0f8ff", padding: "20px" }}>
      <h1 style={{ color: "#38bdf8" }}>{data.name}</h1>
      <p>{data.email}</p>
      <h2>Projects</h2>
      {data.projects?.map((p: any, i: number) => (
        <div key={i}>
          <strong>{p.title}</strong> - {p.description}
        </div>
      ))}
    </div>
  );
};
