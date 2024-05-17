import React from 'react';
import { Tabs as BaseTabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CustomTabs = ({ tabs, onTabChange }) => {
  return (
    <BaseTabs defaultValue={tabs[0].value} className="max-w-[400px] mb-12" onValueChange={(value) => onTabChange(value)}>
      <TabsList>
        {tabs.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value} className={tab?.className}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          {tab.content}
        </TabsContent>
      ))}
    </BaseTabs>
  );
};

export default CustomTabs;
