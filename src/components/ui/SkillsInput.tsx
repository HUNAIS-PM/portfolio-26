import React from 'react';

type Props = {
  title: string;
  icon: React.ReactNode;
  color: string;
  percentage: number;
  link?: string;
};

const SkillsInput = ({ title, icon, color, percentage, link }: Props) => {
  const content = (
    <div className="flex flex-col items-center p-4 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 duration-300 cursor-pointer min-w-[120px]">
      <div style={{ color }} className="text-4xl mb-2">
        {icon}
      </div>
      <p className="text-sm font-medium text-center mb-2">{title}</p>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="h-2 rounded-full transition-all duration-500"
          style={{ width: `${percentage}%`, backgroundColor: color }}
        ></div>
      </div>
      <p className="text-xs text-gray-600 mt-1">{percentage}%</p>
    </div>
  );

  return link ? (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  ) : (
    content
  );
};

export default SkillsInput;
