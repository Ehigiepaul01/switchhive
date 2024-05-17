import { Title } from '@/components'
import { DepayEdits } from '@/components/Payment';
import { PageBreadcrumb } from '@/components/custom'
import React from 'react'


const breadcrumbItems = [
    { to: "/payments", label: "Payment Methods" },
    { label: "Depay Edits" },
];

const Depay = () => {
    return (
        <section className="section">
            <Title>Payments</Title>
            <PageBreadcrumb items={breadcrumbItems} />
            <DepayEdits />
        </section>
    )
}

export default Depay