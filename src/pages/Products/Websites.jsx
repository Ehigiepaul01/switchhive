import { CustomTabs, Title } from "@/components";
import { Website, WebsiteHeader } from "@/components/Products";
import { useState } from "react";

const Websites = () => {

  const [tabValue, setTabValue] = useState('giftCard');

  const handleTabChange = (value) => {
    setTabValue(value);
  };


//   const filterOrders = ordersArray.filter(order => {
//       switch (tabValue) {
//           case 'Gift Card':
//               return order.apiProvider === 'Gift Card';
//           case 'Mobile Top Up':
//               return order.apiProvider === 'Mobile Top Up';
//           case 'Bill Payment':
//               return order.apiProvider === 'Bill Payment';
//           default:
//               return false;
//       }
//   })
  
  return (
    <section className="section">
      <Title>Websites</Title>
      <CustomTabs
        tabs={[
          { label: "Gift Card", value: "Gift Card" },
          { label: "Mobile Top Up", value: "Mobile Top Up" },
          { label: "Bill Payment", value: "Bill Payment" },
        ]}
        onTabChange={handleTabChange}
      />
      <WebsiteHeader />
      <Website />
    </section>
  );
};

export default Websites;
