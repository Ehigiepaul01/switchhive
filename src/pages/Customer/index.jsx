import { Breadcrumbs, Title } from "@/components"
import { CustomTabs } from "@/components/custom"
import { useState } from "react"
import { customerArray } from "@/constants/data";
import CustomerTextField from "@/components/Customer/CustomerTextField";


const AccountLimit = () => {
    const [tabValue, setTabValue] = useState('Guest User');

    const handleTabChange = (value) => {
        setTabValue(value);
    }

    const filteredUsers = customerArray.filter(user => {
        switch(tabValue) {
            case 'Guest User':
                return user.userType === 'Guest';
            case 'Registered User':
                return user.userType === 'Registered';
            case 'Verified User':
                return user.userType === 'Verified';
            default:
                return false;
        }
    })

    return (
        <section className="section">
            <Title>Customer</Title>
            <Breadcrumbs menu="Customer" subMenu="Account Limit" nextMenu={tabValue}/>
            <section className="pt-4">
                <CustomTabs
                    tabs={[
                        { label: "Guest Users", value: "Guest User" },
                        { label: "Registered Users", value: "Registered User" },
                        { label: "Verified Users", value: "Verified User" },
                    ]}
                    onTabChange={handleTabChange}
                />
                <CustomerTextField filteredUsers={filteredUsers} />
            </section>
        </section>
    )
}
export default AccountLimit