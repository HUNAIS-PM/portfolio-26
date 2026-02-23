import React from "react";
import SkillsInput from "./SkillsInput";
import Title from "./Title";
import { GiSkills } from "react-icons/gi";
import {
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobeindesign,
  SiAdobe,
  SiBlender,
  SiMicrosoft,
  SiGimp,
  SiInkscape,
  SiCanva,
} from "react-icons/si";
import { FiVideo, FiPenTool, FiType, FiEdit, FiMic, FiMusic, FiMonitor } from "react-icons/fi";
import { MdPalette } from "react-icons/md";

const Skills = () => {
  return (
    <div className="wrapper">
      <Title text="Skills" icon={<GiSkills />} />
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <SkillsInput
          title="Photoshop"
          icon={<SiAdobephotoshop />}
          color="#31A8FF"
          percentage={85}
        />
        <SkillsInput
          title="Illustrator"
          icon={<SiAdobeillustrator />}
          color="#FF9A00"
          percentage={80}
        />
        <SkillsInput
          title="InDesign"
          icon={<FiEdit />}
          color="#FF3366"
          percentage={75}
        />
        <SkillsInput
          title="Adobe Creative Suite"
          icon={<SiAdobe />}
          color="#ED1C24"
          percentage={85}
        />
        <SkillsInput
          title="CapCut"
          icon={<FiVideo />}
          color="#FF6B35"
          percentage={65}
        />
        <SkillsInput
          title="DaVinci Resolve"
          icon={<FiVideo />}
          color="#00AEEF"
          percentage={70}
        />
        <SkillsInput
          title="Filmora"
          icon={<FiVideo />}
          color="#FF6B35"
          percentage={65}
        />
        <SkillsInput
          title="Blender"
          icon={<SiBlender />}
          color="#F5792A"
          percentage={60}
        />
        <SkillsInput
          title="Microsoft Office"
          icon={<SiMicrosoft />}
          color="#D83B01"
          percentage={90}
        />
        <SkillsInput
          title="GIMP"
          icon={<SiGimp />}
          color="#5C5543"
          percentage={70}
        />
        <SkillsInput
          title="Inkscape"
          icon={<SiInkscape />}
          color="#000000"
          percentage={65}
        />
        <SkillsInput
          title="CorelDRAW"
          icon={<FiPenTool />}
          color="#C40F0F"
          percentage={60}
        />
        <SkillsInput
          title="Canva"
          icon={<SiCanva />}
          color="#00C4CC"
          percentage={80}
        />
        <SkillsInput
          title="Typography"
          icon={<FiType />}
          color="#333333"
          percentage={75}
        />
        <SkillsInput
          title="Color Theory"
          icon={<MdPalette />}
          color="#FF6B35"
          percentage={75}
        />
        <SkillsInput
          title="Audacity"
          icon={<FiMic />}
          color="#0000FF"
          percentage={70}
        />
        <SkillsInput
          title="FL Studio"
          icon={<FiMusic />}
          color="#FF6600"
          percentage={65}
        />
        <SkillsInput
          title="OBS Studio"
          icon={<FiMonitor />}
          color="#302E31"
          percentage={65}
        />
      </div>
    </div>
  );
};

export default Skills;
