import { arrow_right } from "../../assets/icons";

const Breadcrumbs3 = ({ menu, subMenu, subMenu2 = "", breadcrum = "", breadcrum3='', subMenu3='' }) => {
  return (
    <div className="flex items-start justify-start gap-1 mt-1">
      <p className="text-sm font-light leading-tight text-black">{menu}</p>
      <img src={arrow_right} alt="arrow-right" />
      <p className="text-sm font-light leading-tight text-black">{subMenu}</p>
      <img src={breadcrum} alt="arrow-right" />
      <p className="text-sm font-light leading-tight text-black">{subMenu2}</p>
      <img src={breadcrum3} alt="arrow-right" />
      <p className="text-sm font-light leading-tight text-black">{subMenu3}</p>
    </div>
  );
};

export default Breadcrumbs3;
