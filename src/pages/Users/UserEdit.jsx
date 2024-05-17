import { useParams } from 'react-router-dom';
import { Title, Breadcrumbs } from '@/components';
import { useGetUsersByID } from '@/api/user';
import { EditUserForm } from '@/components/Users';
import { TableSkeletonLoader } from '@/components/loading';
import { PageBreadcrumb } from '@/components/custom';


const breadcrumbItems = [
  { to: "/users", label: "User" },
  { label: "Edit User" },
];


const UserEdit = () => {
  const { id } = useParams();

  const { data, isLoading, isError } = useGetUsersByID(id)

  return (
    <div className="section">
      <Title>Users</Title>
      <PageBreadcrumb items={breadcrumbItems} />
      {/* Conditional rendering */}
      {isLoading && <TableSkeletonLoader />}
      {isError && <div>Error fetching data</div>}
      {!isLoading && !isError && (!data) && (
        <div>No User Found</div>
      )}
      {/* Render UsersTable if data is available */}
      {!isLoading && !isError && data && (
        <EditUserForm user={data} />
      )}
    </div>
  )
}

export default UserEdit