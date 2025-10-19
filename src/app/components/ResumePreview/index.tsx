// components/ResumePreview/index.tsx
import React from "react";
import { useAppSelector } from "lib/redux/hooks";
import { selectTemplate } from "lib/redux/settingsSlice";
import { ATSTemplate1 } from "./ATS/ATSTemplate1";
import { ATSTemplate2 } from "./ATS/ATSTemplate2";
import { CreativeTemplate1 } from "./Creative/CreativeTemplate1"

export const ResumePreview = ({ resumeData }: { resumeData: any }) => {
  const template = useAppSelector(selectTemplate);

  // choose template component
  switch (template) {
    case "ats-1":
      return <ATSTemplate1 data={resumeData} />;
    case "ats-2":
      // return <ATSTemplate2 data={resumeData} />;
      return <ATSTemplate2 data={resumeData} />; // placeholder
    case "creative-1":
      return <CreativeTemplate1 data={resumeData} />;
    case "creative-2":
      // return <CreativeTemplate2 data={resumeData} />;
      return <CreativeTemplate1 data={resumeData} />; // placeholder
    default:
      return <ATSTemplate1 data={resumeData} />;
  }
};
