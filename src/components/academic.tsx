import React from "react";
import { achievementsData, educationData } from "./academicData";

const Academic: React.FC = () => {
  return (
    <>
      <p className="md:text-4xl text-3xl font-title lg:pt-16 lg:pb-4 pt-4 font-semibold">Education</p>
      {educationData.map((education, index) => (
        <div key={index}>
          <hr className=" w-auto h-0.5 mt-3 bg-lightblue border-0 rounded"></hr>
          <div className="py-4 space-y-4 lg:pb-8 pb-6">
            <div className="flex justify-between text-lg font-semibold ">
              <p className="text-[15px] md:text-lg"> {education.year}</p>
              <p className="text-[15px] md:text-lg">{education.title}</p>
            </div>
            <p className="text-base md:text-lg">{education.desc}</p>
            <p className="text-base md:text-lg">{education.extra}</p>
          </div>
        </div>
      ))}
      <p className="md:text-4xl text-3xl font-title lg:pt-16 lg:pb-4 pt-4 font-semibold">
        Achievements
      </p>
      {achievementsData.map((achievement, index) => (
        <div key={index}>
          <hr className=" w-auto h-0.5 mt-3 bg-lightblue border-0 rounded"></hr>
          <div className="py-4 space-y-4 lg:pb-8 pb-6">
            <div className="flex justify-between text-lg font-semibold ">
              <p className="text-[15px] md:text-lg">{achievement.year}</p>
              <p className="text-[15px] md:text-lg">{achievement.title}</p>
            </div>
            <p className="max-w-md text-base md:text-lg">{achievement.desc}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Academic;
