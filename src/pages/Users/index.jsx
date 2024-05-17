import React, { useEffect, useState } from "react";
import { useGetUsers } from "@/api/user";
import { Title } from "@/components";
import { UsersHeader, UsersTable } from "@/components/Users";
import { TableSkeletonLoader } from "@/components/loading";
import { CustomPagination } from "@/components/custom";

const Users = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(1);
  const limit = 12; // Number of users per page

  const { data, isLoading, isError } = useGetUsers(currentPage, limit);

  useEffect(() => {
    // Update totalPages when data is fetched
    if (data) {
      setTotalPages(data.meta.totalPages);
      setTotalItems(data.meta.totalItems);
    }
  }, [data]);

  return (
    <div className="section">
      <Title>Users</Title>
      <UsersHeader />
      {/* Conditional rendering */}
      {isLoading && <TableSkeletonLoader />}
      {isError && <div>Error fetching data</div>}
      {!isLoading && !isError && (!data || data.items.length < 1) && (
        <div>No User Found</div>
      )}
      {/* Render UsersTable if data is available */}
      {!isLoading && !isError && data && data.items.length > 0 && (
        <>
          <UsersTable data={data.items} />
          <CustomPagination
            totalItems={totalItems}
            totalPages={totalPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            limit={limit}
          />
        </>
      )}
    </div>
  );
};

export default Users;
