import { arrow_right } from "../../assets/icons";

const BreadcrumbsNew = ({ menu, subMenu, subMenu2 = "", breadcrum =arrow_right }) => {
  return (
    <div className="flex items-start justify-start gap-1 mt-1">
      <p className="text-sm font-light leading-tight text-black">{menu}</p>
      <img src={arrow_right} alt="arrow-right" />
      <p className="text-sm font-light leading-tight text-black">{subMenu}</p>
      <img src={breadcrum} alt="arrow-right" />
      <p className="text-sm font-light leading-tight text-black">{subMenu2}</p>
    </div>
  );
};

export default BreadcrumbsNew;
