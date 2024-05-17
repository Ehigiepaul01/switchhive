import { Title } from "@/components";
import { Breadcrumbs } from "@/components";

const EditCouponHeader = () => {
  return (
    <div>
      <Title>Coupon</Title>
      <Breadcrumbs menu="Coupon" subMenu="Edit Coupon" />
    </div>
  )
}

export default EditCouponHeader

export const CreateCouponHeader = () => {
  return (
    <div>
      <Title>Coupon</Title>
      <Breadcrumbs menu="Coupon" subMenu="Create Coupon" />
    </div>
  )
}

export const EligibleUserHeader = () => {
  return (
    <div>
      <Title>Coupon</Title>
      <Breadcrumbs menu="Coupon" subMenu="Eligible Users" />
    </div>
  )
}
