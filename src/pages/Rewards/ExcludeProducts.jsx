import { Breadcrumbs, CustomTabs, Title } from "@/components"
import { RewardCards, RewardIconsHeader, RewardFilter } from "@/components/Rewards";
import { useState } from "react"

const ExcludeProducts = () => {
    const [tabValue, setTabValue] = useState('all');

    const handleTabChange = (value) => {
        setTabValue(value);
    };

    return (
        <section className="section">
            <Title>Reward</Title>
            <Breadcrumbs menu="Reward" subMenu="Exclude Product" />
            <CustomTabs
                tabs={[
                    { label: 'Gift Card', value: 'giftCard' },
                    { label: 'Mobile Topup', value: 'mobileTopup' },
                    { label: 'Bill Payment', value: 'billPayment' },
                ]}
                onTabChange={handleTabChange}
            />
            <RewardIconsHeader />
            <div className="flex justify-end">
                <RewardFilter />
                <RewardCards />
            </div>
            
        </section>
    )
}
export default ExcludeProducts