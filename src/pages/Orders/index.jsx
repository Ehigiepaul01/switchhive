import { useState } from "react";
import { Title } from "@/components"
import { OrdersTable, OrdersHeader } from "@/components/Orders"
import { ordersArray } from "@/constants/data"
import { CustomPopover, CustomTabs } from "@/components/custom";
import { Button, DatePickerWithRange } from "@/components/ui";
import { DownloadIcon } from "@radix-ui/react-icons";

const Orders = () => {
  const [tabValue, setTabValue] = useState('allOrders');

  const handleTabChange = (value) => {
    setTabValue(value);
  };

  const filteredOrders = ordersArray.filter(order => {
    switch (tabValue) {
      case 'allOrders':
        return true;
      case 'successful':
        return order.paymentStatus === 'Successful';
      case 'failed':
        return order.paymentStatus === 'Failed';
      case 'pending':
        return order.paymentStatus === 'Pending';
      default:
        return false;
    }
  });

  return (
    <section className="section">
      <div className="flex items-center justify-between">
        <Title>Orders</Title>
        <div className="flex items-center gap-2">
          <DatePickerWithRange className="border-grey hover:bg-blue-900 hover:text-white" />
          <CustomPopover icon={<DownloadIcon className="h-[24px] w-[24px]" />} variant="outline" style="hover:bg-blue-900 hover:text-white p-2">
            <Button size="xs" variant="ghost" className="justify-start px-2 py-1 rounded-sm">Export as CSV</Button>
            <Button size="xs" variant="ghost" className="justify-start px-2 py-1 rounded-sm">Export as PNG</Button>
            <Button size="xs" variant="ghost" className="justify-start px-2 py-1 rounded-sm">Export as PDF</Button>
            <Button size="xs" variant="ghost" className="justify-start px-2 py-1 rounded-sm">Export as XLS</Button>
          </CustomPopover>
        </div>
      </div>
      <CustomTabs
        tabs={[
          { label: 'All Orders', value: 'allOrders' },
          { label: 'Successful', value: 'successful', className: 'data-[state=active]:border-green-500 border-green-500 data-[state=active]:text-green-500' },
          { label: 'Failed', value: 'failed', className: 'data-[state=active]:border-red-600 border-red-600 data-[state=active]:text-red-600' },
          { label: 'Pending', value: 'pending', className: 'data-[state=active]:border-yellow-500 border-yellow-500 data-[state=active]:text-yellow-500' },
        ]}
        onTabChange={handleTabChange}
      />
      <OrdersHeader />
      <OrdersTable filteredOrders={filteredOrders} tabValue={tabValue} />
    </section>
  )
}

export default Orders