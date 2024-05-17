import {
  AdminHeader,
  AdminProfileTable,
  PermissionTable,
} from "@/components/Users";
import { CustomTabs } from "@/components";
import { useState } from "react";
import { useGetAdminManagement } from "@/api/user";

const AdminManagement = () => {
  const [tabValue, setTabValue] = useState("adminProfiles");

  const handleTabChange = (value) => {
    setTabValue(value);
  };
  const { data, isLoading, isError } = useGetAdminManagement();

  return (
    <section className="section">
      <AdminHeader title={tabValue} />
      <CustomTabs
        tabs={[
          { label: "Admin Profiles", value: "adminProfiles" },
          { label: "Permissions", value: "permissions" },
        ]}
        onTabChange={handleTabChange}
      />
      {tabValue === "adminProfiles" ? (
        <AdminProfileTable
          data={data}
          isError={isError}
          isLoading={isLoading}
        />
      ) : (
        <PermissionTable data={data} isError={isError} isLoading={isLoading} />
      )}
    </section>
  );
};

export default AdminManagement;
