import ExperienceCard from "./ExperienceCard";
import Title from "./Title";
import { MdWork } from "react-icons/md";
import { SiReactivex, SiFreelancer, SiFiverr, SiToptal } from "react-icons/si";

const Experience = () => {
  return (
    <div className="wrapper">
      <Title text="Experience" icon={<MdWork />} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        <ExperienceCard
          title="ReactBD.com"
          subTitle="Web Developer 2022 - Present"
          icon={<SiReactivex />}
        />
        <ExperienceCard
          title="Toptal"
          subTitle="MERN Stack Developer 2021 - present"
          icon={<SiToptal />}
        />
        <ExperienceCard
          title="Freelancer"
          subTitle="MERN Stack Developer 2020 - 2021"
          icon={<SiFreelancer />}
        />

        <ExperienceCard
          title="Fiverr"
          subTitle="MERN Stack Developer 2019 - 2020"
          icon={<SiFiverr />}
        />
      </div>
    </div>
  );
};

export default Experience;
