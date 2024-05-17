import { usersArray, usersTableHeaders } from "@/constants/data"
import { edit, eye } from "@/assets/icons";
import { Link } from "react-router-dom";
import TableHead from "../TableHead";

const CouponUsersTable = () => {

    return (
        <table className="table-auto w-full border-b border-stone-300 divide-y divide-stone-300 mt-3">
           <TableHead headers={usersTableHeaders} />
            <tbody className="text-stone-950 divide-y divide-stone-300">
                {usersArray.map((user, index) => (
                    <tr key={index}>
                        <td className="px-4 py-2 flex items-center justify-between gap-2 text-left">
                            <Link className="p-[6px] rounded-lg border border-slate-300" to={`/users/${user.OrderID}/edit`}>
                                <img src={edit} alt="edit" />
                            </Link>
                            <Link className="p-[6px] rounded-lg border border-slate-300" to={`/users/${user.OrderID}/view`}>
                                <img src={eye} alt="eye" />
                            </Link>
                            {/* Add an Edit button and handle the edit functionality */}
                        </td>
                        <td className="px-4 py-2">#{user.OrderID}</td>
                        <td className="px-4 py-2">{user.Date}</td>
                        <td className="px-4 py-2">{user.UserName}</td>
                        <td className="px-4 py-2">{user.EmailAddress}</td>
                        <td className="px-4 py-2">{user.Country}</td>
                        <td className="px-4 py-2">
                            <span className={`px-2 text-base font-light rounded border bg-green-50 ${user.UserType === 'Verified'
                                ? 'border-neutral-500 text-neutral-500'
                                : user.UserType === 'Guest'
                                    ? 'text-slate-400 border-slate-400'
                                    : 'text-green-400 border-green-400'
                            }`}>

                            {user.UserType}
                            </span>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default CouponUsersTable