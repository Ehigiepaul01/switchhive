import { arrow_right } from "../../assets/icons"

const Breadcrumbs = ({ menu, subMenu }) => {
    return (
        <div className="flex items-start justify-start gap-1 mt-1">
            <p className="text-sm font-light leading-tight text-black">{menu}</p>
            <img src={arrow_right} alt='arrow-right' />
            <p className="text-sm font-light leading-tight text-black">{subMenu}</p>
        </div>
    )
}

export default Breadcrumbs

export const UsersBreadcrumbs = ({ menu, subMenu, sub }) => {
    return (
        <div className="flex items-start justify-start gap-1 mt-1">
            <p className="text-sm font-light leading-tight text-black">{menu}</p>
            <img src={arrow_right} alt='arrow-right' />
            <p className="text-sm font-light leading-tight text-black">{subMenu}</p>
            <img src={arrow_right} alt='arrow-right' />
            <p className="text-sm font-light leading-tight text-black">{sub}</p>
        </div>
    )
}