import React from "react";
import Section from "./Section";
import SkillsItem from "./SkillsItem";
import TitleSection from "./TitleSection";
// Icons
import TailwindIcon from "../icons/TailwindIcon";
import SassIcon from "../icons/SassIcon";
import BootstrapIcon from "../icons/BootstrapIcon";
import CssIcon from "../icons/CssIcon";
import HtmlIcon from "../icons/HtmlIcon";
import JsIcon from "../icons/JsIcon";
import NodeIcon from "../icons/NodeIcon";
import ReactIcon from "../icons/ReactIcon";
import ReduxIcon from "../icons/ReduxIcon";
import PythonIcon from "../icons/PythonIcon";
import DjangoIcon from "../icons/DjangoIcon";

const Skills = () => {
  const skillsIcons = {
    html: HtmlIcon,
    css: CssIcon,
    js: JsIcon,
    sass: SassIcon,
    bootstrap: BootstrapIcon,
    tailwind: TailwindIcon,
    node: NodeIcon,
    react: ReactIcon,
    redux: ReduxIcon,
    python: PythonIcon,
    django: DjangoIcon,
  };

  return (
    <Section id="skills" altern>
      <TitleSection>Skills</TitleSection>
      <ul className="mt-16 flex w-[60%] list-none flex-wrap gap-7">
        {Object.keys(skillsIcons).map((skill) => (
          <SkillsItem key={skill}>
            {React.createElement(skillsIcons[skill], {
              className: "grayscale group-hover:grayscale-0 m-5",
            })}
          </SkillsItem>
        ))}
      </ul>
    </Section>
  );
};

export default Skills;
