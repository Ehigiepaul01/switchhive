import { CMSHeader, HeroPage, TermsAndConditions } from "@/components/CMS";
import { useState } from "react";
import { CustomTabs } from "@/components/custom";

const Cms = () => {
  const [tabValue, setTabValue] = useState('heroPage');

  const handleTabChange = (value) => {
    setTabValue(value);
  };

  return (
    <section className="section">
      <CMSHeader />
      <div className="mt-8" />
      <CustomTabs
        tabs={[
          { label: 'Hero Page', value: 'heroPage' },
          { label: 'Terms and Condition', value: 'termsAndCondition' },
        ]}
        onTabChange={handleTabChange}
      />
      {
        tabValue === 'heroPage' ? <HeroPage/> : <TermsAndConditions />
      }
    </section>
  )
}

export default Cms