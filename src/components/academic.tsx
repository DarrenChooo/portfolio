import React from "react";
import {
  achievementsData,
  educationData,
} from "./academicData";

const Academic: React.FC = () => {
  return (
    <>
      <p className="text-4xl font-title pt-16 pb-7 font-semibold">Education</p>
      {educationData.map((education) => (
        <div>
          <hr className=" w-auto h-0.5 mt-3 bg-lightblue border-0 rounded"></hr>
          <div className="py-4 space-y-4 pb-8">
            <div className="flex justify-between text-lg font-semibold ">
              <p> {education.year}</p>
              <p>{education.title}</p>
            </div>
            <p>{education.desc}</p>
            <p>{education.extra}</p>
          </div>
        </div>
      ))}
      <p className="text-4xl font-title pt-16 pb-7 font-semibold">Achievements</p>
      {achievementsData.map((education) => (
        <div>
          <hr className=" w-auto h-0.5 mt-3 bg-lightblue border-0 rounded"></hr>
          <div className="py-4 space-y-4 pb-8">
            <div className="flex justify-between text-lg font-semibold ">
              <p> {education.year}</p>
              <p>{education.title}</p>
            </div>
            <p className="max-w-md">{education.desc}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Academic;
