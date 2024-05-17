import { CustomTabs } from "@/components";
import {
    InAppMessages,
  NotificationTable,
} from "@/components/Notification";
import { notificationArray } from "@/constants/data";
import { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const InAppMessage = () => {
  const [tabValue, setTabValue] = useState("all");

  const handleTabChange = (value) => {
    setTabValue(value);
  };

  const filteredNotification = notificationArray.filter((notification) => {
    switch (tabValue) {
      case "all":
        return true;
      case "active":
        return notification.status === "Active";
      case "inactive":
        return notification.status === "In Active";
      case "deleted":
        return notification.status === "Deleted";
      case "archived":
        return notification.status === "Archived";
      default:
        return false;
    }
  });
  return (
    <section className="section">
      <InAppMessages />

      <div className="mt-8" />
      <CustomTabs
        tabs={[
          { label: "All", value: "all" },
          { label: "Active", value: "active" },
          { label: "In Active", value: "inactive" },
          { label: "Deleted", value: "deleted" },
          { label: "Archived", value: "archived" },
        ]}
        onTabChange={handleTabChange}
      />
      <NotificationTable filteredNotification={filteredNotification} />

      <div className="flex items-center justify-between w-full">
        
        <h1 className="text-[#ADADAD] ">Showing 1 to <span>{filteredNotification.length}</span> out of <span>{notificationArray.length}</span> records</h1>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </section>
  );
};
export default InAppMessage;
