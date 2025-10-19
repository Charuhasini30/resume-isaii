// components/ResumeForm/TemplateSelector.tsx
"use client";
import React from "react";
import { useAppDispatch, useAppSelector } from "lib/redux/hooks";
import { selectTemplate, setSelectedTemplate, TemplateKey } from "lib/redux/settingsSlice";

const options: { key: TemplateKey; label: string }[] = [
  { key: "ats-1", label: "ATS — Simple (A)" },
  { key: "ats-2", label: "ATS — Clean (B)" },
  { key: "creative-1", label: "Creative — Modern" },
  { key: "creative-2", label: "Creative — Sidebar" },
];

export const TemplateSelector = () => {
  const dispatch = useAppDispatch();
  const selected = useAppSelector(selectTemplate);

  return (
    <div className="flex flex-col gap-2">
      <label className="font-semibold">Choose template</label>
      <select
        value={selected}
        onChange={(e) => dispatch(setSelectedTemplate(e.target.value as TemplateKey))}
        className="p-2 border rounded"
      >
        {options.map((o) => (
          <option key={o.key} value={o.key}>
            {o.label}
          </option>
        ))}
      </select>
      <div className="flex gap-2 mt-2">
        {options.map((o) => (
          <button
            key={o.key}
            className={`p-2 text-sm border rounded ${selected === o.key ? "bg-gray-200" : ""}`}
            onClick={() => dispatch(setSelectedTemplate(o.key))}
          >
            {o.label}
          </button>
        ))}
      </div>
    </div>
  );
};
