// components/ResumePreview/ATS/ATSTemplate1.tsx
import React from "react";

interface Props { data: any }

export const ATSTemplate1: React.FC<Props> = ({ data }) => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>{data.name}</h1>
      <p>{data.email}</p>
      <h2>Work Experience</h2>
      {data.workExperiences?.map((w: any, i: number) => (
        <div key={i}>
          <strong>{w.position}</strong> - {w.company}
        </div>
      ))}
    </div>
  );
};
