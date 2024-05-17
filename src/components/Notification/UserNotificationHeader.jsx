import React, { useState } from "react";
import { search } from "@/assets/icons";
import { Input, Button } from "@/components/ui";
import { CustomSelect } from "../custom";

const UserNotificationHeader = () => {
  const [selectedValue, setSelectedValue] = useState(null);

  const handleSelect = (value) => {
    setSelectedValue(value);
  };
  return (
    <div className="flex items-center my-2">
      <Input
        type="text"
        icon={search}
        placeholder="Search"
        className="border-gray-200 w-[60%]"
      />
      <div className="flex items-center ml-auto gap-3">
        <CustomSelect
          placeholder="Select Pages"
          options={["one", "two"]}
          onSelect={handleSelect}
          className="bg-blue-900"
        />
        <CustomSelect
          placeholder="Select All"
          options={["one", "two"]}
          onSelect={handleSelect}
        />
        <Button variant="grey">Deselect All</Button>
        <Button>Country</Button>
      </div>
    </div>
  );
};

export default UserNotificationHeader;
