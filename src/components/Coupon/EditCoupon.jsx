import { Breadcrumbs, CouponForm } from ".."
import Title from "../Title"

const EditCoupon = () => {
    return (
        <section className="section">
            <Title>Edit Coupon</Title>
            <Breadcrumbs menu="Coupon" subMenu="Edit Coupon" />
            <div className="pt-4">
                <CouponForm />
            </div>
        </section>
    )
}
export default EditCoupon