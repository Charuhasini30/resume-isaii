// components/ResumePreview/ATS/ATSTemplate2.tsx
import React from "react";

interface Props { data: any }

export const ATSTemplate2: React.FC<Props> = ({ data }) => {
  return (
    <div style={{ fontFamily: "Verdana, sans-serif", padding: "20px", border: "1px solid #ccc" }}>
      <h1>{data.name}</h1>
      <p>{data.email}</p>
      <h2>Education</h2>
      {data.educations?.map((e: any, i: number) => (
        <div key={i}>{e.degree} - {e.institution}</div>
      ))}
    </div>
  );
};
