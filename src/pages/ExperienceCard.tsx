import React, { ReactNode } from "react";
interface Props {
  title: string;
  subTitle: string;
  icon: ReactNode;
}

const ExperienceCard = ({ title, subTitle, icon }: Props) => {
  return (
    <div className="flex items-center gap-4">
      <span className="w-12 h-12 text-2xl rounded-full border-[1px] border-blue-600 flex items-center justify-center">
        {icon}
      </span>
      <div>
        <h2 className="text-xl font-bold mb-1">{title}</h2>
        <p className="text-base">{subTitle}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
