import { Breadcrumbs } from "@/components"
import { Title } from "@/components"
import { CouponForm } from "@/components/Coupon"

const CreateCoupon = () => {
    return (
        <section className="section">
            <Title>Create Coupon</Title>
            <Breadcrumbs menu="Coupon" subMenu="Create Coupon" />
            <div className="pt-4">
                <CouponForm />
            </div>
        </section>
    )
}
export default CreateCoupon