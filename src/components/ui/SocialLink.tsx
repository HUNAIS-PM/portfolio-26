import { FiArrowUpRight } from "react-icons/fi";
type Props = {
  title: string;
  link: string;
};

const SocialLink = ({ title, link }: Props) => {
  return (
    <a
      href={link}
      target="blank"
      className="flex items-center gap-1 font-semibold text-lg text-slate-300 hover:text-white group"
    >
      <p className="group-hover:underline underline-offset-4 decoration-blue-600">
        {title}
      </p>
      <FiArrowUpRight className="text-xl translate-x-0 translate-y-0 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
    </a>
  );
};

export default SocialLink;
