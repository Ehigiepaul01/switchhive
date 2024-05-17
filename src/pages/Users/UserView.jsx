import { useParams } from 'react-router-dom';
import { accountsData } from '@/constants/data';
import { Title, Breadcrumbs } from "@/components";
import { UserViewInput } from '@/components/Users';
import { useGetUsersByID } from '@/api/user';
import { TableSkeletonLoader } from '@/components/loading';
import { PageBreadcrumb } from '@/components/custom';

const breadcrumbItems = [
  { to: "/users", label: "User" },
  { label: "View User" },
];

const UserView = () => {
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
        <section>
          <div className='grid grid-cols-2 gap-4 mt-10'>
            <UserViewInput label="User ID" value={data.id} />
            <UserViewInput label="Name" value={data.fullName} />
            <UserViewInput label="Email Address" value={data.email} />
            <UserViewInput label="Country" value={data.country} />
            <UserViewInput label="User Type" value={data.type} />
            <UserViewInput label="Account Type" value={data.accountType} />
          </div>
          <div className='flex items-center gap-3 mt-14'>
            {
              accountsData.map((account, index) => (
                <div key={index} className='p-2 bg-white border rounded-lg border-neutral-200'>
                  <div className='flex items-center gap-3 mb-4'>
                    <img src={account.icons} alt={account.currency} />
                    <p className='text-sm font-light leading-tight text-stone-950'>Account Balance</p>
                  </div>
                  <p className="text-2xl font-medium leading-loose text-stone-950">N 1,300,000</p>
                  <hr className="border-b border-opacity-50 border-b-zinc-400 border-t-transparent"></hr>
                  <p className="mt-2 text-xs font-light leading-none text-zinc-400">Update: October 20, 2023</p>
                </div>
              ))
            }
          </div>
        </section>
      )}
    </div>
  );
}

export default UserView