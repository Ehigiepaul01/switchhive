import { CouponHeader, CouponTable } from "@/components/Coupon";
import { useNavigate } from "react-router-dom"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { couponUserArray } from "@/constants/data";
import { useGetCoupon } from "@/api/coupon";

const Coupons = () => {
  const navigate = useNavigate();
  const { data, isLoading, isError } = useGetCoupon();
 

  return (
    <section className="section">
      <CouponHeader navigate={navigate} />
      {isLoading ? <>Loading</> :  <CouponTable data={data}/>}
      <div className="flex justify-between gap-[50%] items-center w-full text-[#ADADAD] mt-10">
      <h3 className="text-sm font-light">Showing 1 to <span className="font-semibold">{couponUserArray.length}</span> out of <span className="font-semibold">{couponUserArray.length}</span> records</h3>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>            
    </section>
  )
}
export default Coupons