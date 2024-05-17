import { CustomTabs, Title } from "@/components";
import { Store, StoreHeader } from "@/components/Products";
import { useState } from "react";

const Products = () => {

  const [tabValue, setTabValue] = useState('Sochitel');

  const handleTabChange = (value) => {
    setTabValue(value);
  };


  // const filterOrders = ordersArray.filter(order => {
  //     switch (tabValue) {
  //         case 'Sochitel':
  //             return order.apiProvider === 'Sochitel';
  //         case 'Xoxoday':
  //             return order.apiProvider === 'Xoxoday';
  //         case 'Ding connect':
  //             return order.apiProvider === 'Ding connect';
  //         case 'Reloadly':
  //             return order.apiProvider === 'Reloadly';
  //         default:
  //             return false;
  //     }
  // })
  
  return (
    <section className="section">
      <Title>Stores</Title>
      <CustomTabs
        tabs={[
          { label: "Sochitel", value: "Sochitel" },
          { label: "Xoxoday", value: "Xoxoday" },
          { label: "Ding Connect", value: "Ding Connect" },
          { label: "Reloadly", value: "Reloadly" },
        ]}
        onTabChange={handleTabChange}
      />
      <StoreHeader />
      <Store />
    </section>
  );
};

export default Products;
