import { Title } from '@/components'
import { MixpayEdits } from '@/components/Payment';
import { PageBreadcrumb } from '@/components/custom'
import React from 'react'


const breadcrumbItems = [
    { to: "/payments", label: "Payment Methods" },
    { label: "Mixpay Edits" },
];

const Mixpay = () => {
    return (
        <section className="section">
            <Title>Payments</Title>
            <PageBreadcrumb items={breadcrumbItems} />
            <MixpayEdits />
        </section>
    )
}

export default Mixpay