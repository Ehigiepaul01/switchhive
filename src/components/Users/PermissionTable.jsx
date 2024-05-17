import { permissionTableHeaders } from "@/constants/data";
import TableHead from "../TableHead";
import { Button } from '../ui'
import { Link } from 'react-router-dom'
import { edit } from '@/assets/icons'
import { Switch } from "../custom/Switch";
import { TableSkeletonLoader } from "../loading";

const PermissionTable = ({ data, isLoading, isError }) => {
    return (
        <>
            {isLoading && <TableSkeletonLoader />}
            {isError && <div>Error fetching data</div>}
            {!isLoading && !isError && (!data || data.length < 1) && (
                <div>No Admin Found</div>
            )}
            {/* Render AdminsTable if data is available */}
            {!isLoading && !isError && data && data.length > 0 && (
                <table className="w-full mt-3 border-b divide-y table-auto border-stone-300 divide-stone-300">
                    <TableHead headers={permissionTableHeaders} />
                    <tbody className="divide-y text-stone-950 divide-stone-300">
                        {data.map((user) => (
                            <tr key={user.id}>
                                <td className="px-4 py-2">{user.email}</td>
                                <td className="px-4 py-2">{user.firstName} {user.lastName}</td>
                                <td className="flex flex-col justify-center px-4 py-2">
                                    <Switch id={user.id} checked={user.isRevoked} />
                                </td>
                                <td className="px-4 py-2">
                                    <Button size="icon" variant="grey" asChild>
                                        <Link to={`/users/admin-management/${user.id}/edit`}>
                                            <img src={edit} alt="edit" />
                                        </Link>
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </>

    );
};

export default PermissionTable;
