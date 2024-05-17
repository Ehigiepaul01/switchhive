import { Title } from "@/components"
import { useState } from "react"
import { PaymentMethods } from "@/components/Payment"

const data = [
    { paymentMode: "Mixpay", enabled: true },
    { paymentMode: "Depay", enabled: false },
    { paymentMode: "Balance", enabled: false },
]

const Payments = () => {
    const [paymentData, setPaymentData] = useState(data);

    const handleToggleChange = (index) => {
        setPaymentData((prevData) => {
            const newData = [...prevData];
            newData[index].enabled = !newData[index].enabled;
            return newData;
        });
    };

    return (
        <section className="section">
            <Title>Payments</Title>
            <p className="mb-8 mt-14">Payments Method</p>
            <PaymentMethods paymentData={paymentData} handleToggleChange={handleToggleChange} />
        </section>
    )
}

export default Payments