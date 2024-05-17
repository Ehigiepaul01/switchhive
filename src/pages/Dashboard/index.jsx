import { useState } from "react";
import { Cards, Charts, DashboardHeader, StatisticsTable, TopCountries } from "@/components/Dashboard";
import { CustomTabs } from "@/components";

const Dashboard = () => {
  const [tabValue, setTabValue] = useState('users');

  const handleTabChange = (value) => {
    setTabValue(value);
  };

  return (
    <section className="section">
      <DashboardHeader />
      <Cards />
      <Charts />
      <CustomTabs
        tabs={[
          { label: 'Top Users', value: 'users' },
          { label: 'Top Countries', value: 'countries' },
        ]}
        onTabChange={handleTabChange}
      />
      {
        tabValue === 'users' ? <StatisticsTable /> : <TopCountries />
      }
    </section>
  )
}

export default Dashboard