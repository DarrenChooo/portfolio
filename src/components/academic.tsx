import React from "react";
import { achievementsData, educationData } from "./academicData";

const Academic: React.FC = () => {
  return (
    <>
      <p className="text-4xl font-title lg:pt-16 lg:pb-4 pt-4 font-semibold">Education</p>
      {educationData.map((education, index) => (
        <div key={index}>
          <hr className=" w-auto h-0.5 mt-3 bg-lightblue border-0 rounded"></hr>
          <div className="py-4 space-y-4 lg:pb-8 pb-6">
            <div className="flex justify-between text-lg font-semibold ">
              <p> {education.year}</p>
              <p>{education.title}</p>
            </div>
            <p>{education.desc}</p>
            <p>{education.extra}</p>
          </div>
        </div>
      ))}
      <p className="text-4xl font-title lg:pt-16 lg:pb-4 pt-4 font-semibold">
        Achievements
      </p>
      {achievementsData.map((achievement, index) => (
        <div key={index}>
          <hr className=" w-auto h-0.5 mt-3 bg-lightblue border-0 rounded"></hr>
          <div className="py-4 space-y-4 lg:pb-8 pb-6">
            <div className="flex justify-between text-lg font-semibold ">
              <p> {achievement.year}</p>
              <p>{achievement.title}</p>
            </div>
            <p className="max-w-md">{achievement.desc}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Academic;
