const Title = ({ title, des }) => {
  return (
    <div className="flex flex-col gap-4 font-titleFont mb-14">
      <h3 className="text-xs uppercase font-light text-black tracking-wide">
        {title}
      </h3>
      <h1 className="text-4xl md:text-5xl text-black font-thin capitalize">
        {des}
      </h1>
    </div>
  );
};

export default Title;
