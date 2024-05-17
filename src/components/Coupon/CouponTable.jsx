import { couponTableHeader, couponUserArray } from "@/constants/data"
import TableHead from "../TableHead"
import { edit, bin } from "@/assets/icons"
import { Button } from "../ui"

const CouponTable = ({data}) => {
    console.log(data)
    return (
        <table className="table-auto w-full border-b border-stone-300 divide-y divide-stone-300 mt-3">
            <TableHead headers={couponTableHeader} />
            <tbody className="text-stone-400 divide-y divide-stone-300">
                {
                    data.items.map((coupon, index) => (
                        <tr key={index}>
                            <td className="py-2 px-4">
                                {coupon.code}
                            </td>
                            <td className="py-2 px-4">
                                <Button variant="archived" size="sm">
                                    {coupon.couponType}
                                </Button>
                            </td>
                            <td className="py-2 px-4">
                                {coupon.couponValue}
                            </td>
                            <td className="py-2 px-4">
                                {coupon.couponLimit}
                            </td>
                            <td className="py-2 px-4">
                                {coupon.expiryDate}
                            </td>
                            <td className="py-2 px-4">
                                {coupon.labels}
                            </td>
                            <td className="py-2 px-4">
                                <div className="flex gap-2">
                                    <img
                                        src={bin}
                                        alt="edit"
                                        style={{
                                            cursor: "pointer",
                                        }}
                                    />
                                    <img
                                        src={edit}
                                        alt="edit"
                                        style={{
                                            cursor: "pointer",
                                        }}
                                    />
                                </div>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}
export default CouponTable