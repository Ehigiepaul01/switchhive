import { usersArray, usersTableHeaders } from "@/constants/data"
import { edit, eye } from "@/assets/icons";
import { Link } from "react-router-dom";
import TableHead from "../TableHead";
import { formatDate } from "@/utils/helper";

const UsersTable = ({ data }) => {
    return (
        <table className="w-full mt-3 border-b divide-y table-auto border-stone-300 divide-stone-300">
           <TableHead headers={usersTableHeaders} />
            <tbody className="divide-y text-stone-950 divide-stone-300">
                {data.map((user) => (
                    <tr key={user.id}>
                        <td className="flex items-center justify-between gap-2 px-4 py-2 text-left w-28">
                            <Link className="p-[6px] rounded-lg border border-slate-300" to={`/users/${user.id}/edit`}>
                                <img src={edit} alt="edit" />
                            </Link>
                            <Link className="p-[6px] rounded-lg border border-slate-300" to={`/users/${user.id}/view`}>
                                <img src={eye} alt="eye" />
                            </Link>
                            {/* Add an Edit button and handle the edit functionality */}
                        </td>
                        <td className="px-4 py-2">{user.id.substring(0, 7)}...</td>
                        <td className="px-4 py-2">{formatDate(user.createdAt)}</td>
                        <td className="px-4 py-2">{user.fullName}</td>
                        <td className="px-4 py-2">{user.email}</td>
                        <td className="px-4 py-2">{user.country}</td>
                        <td className="px-4 py-2">
                            <span className={`px-2 text-base font-light rounded border bg-green-50 ${user.type === 'Verified'
                                ? 'border-neutral-500 text-neutral-500'
                                : user.type === 'Guest'
                                    ? 'text-slate-400 border-slate-400'
                                    : 'text-green-400 border-green-400'
                            }`}>

                            {user.type}
                            </span>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default UsersTable