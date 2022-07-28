import Logo from "./Logo";

const MobileTop = ({ name }) => {
  return (
    <div className="sm:hidden dark:bg-darkestAccent/80">
      <div className="flex pl-2 items-center justify-start">
        <Logo />
        <p className="font-heading text-2xl">{name}</p>
      </div>
    </div>
  );
};

export default MobileTop;
