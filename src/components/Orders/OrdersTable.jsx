import { ordersTableHeaders } from "../../constants/data";
import TableHead from "../TableHead";
import { getStyleByValue } from "@/utils/helper";
import { CheckCircledIcon, GearIcon, Share2Icon } from "@radix-ui/react-icons";
import { Button } from "../ui";

const OrdersTable = ({ filteredOrders, tabValue }) => {
    const modifiedOrdersTableHeaders = ordersTableHeaders.filter(header => header !== "Actions");
    return (
        <div className="overflow-x-auto scrollbar pb-5 mt-10">
            <table className="table-auto w-full border-b border-stone-300 divide-y divide-stone-300">
                <TableHead headers={tabValue === 'allOrders' || tabValue === 'successful' ? modifiedOrdersTableHeaders : ordersTableHeaders} />
                <tbody className="text-stone-950 divide-y divide-stone-300 text-nowrap">
                    {filteredOrders.map((order, index) => (
                        <tr key={index}>
                            {
                                tabValue === 'pending' || tabValue === 'failed' ? (
                                    <td className="px-4 py-2 flex items-center gap-1">
                                        <Button size="icon" variant="outline" className="border-2 border-gray-300 hover:bg-blue-900 hover:text-white">
                                            <Share2Icon className="h-[24px] w-[24px]" />
                                        </Button>
                                        <Button size="icon" variant="outline" className="border-2 border-gray-300 hover:bg-blue-900 hover:text-white">
                                            <CheckCircledIcon className="h-[24px] w-[24px]" />
                                        </Button>
                                        <Button size="icon" variant="outline" className="border-2 border-gray-300 hover:bg-blue-900 hover:text-white">
                                            <GearIcon className="h-[24px] w-[24px]" />
                                        </Button>
                                    </td>
                                ) : null
                            }
                            <td className="px-4 py-2">
                                <span className=" flex items-center gap-1">
                                    {
                                        tabValue === 'allOrders' || tabValue === 'successful' ? (
                                            <Button size="icon" variant="outline" className="border-2 border-gray-300">
                                                <Share2Icon className="h-[24px] w-[24px] text-blue-900" />
                                            </Button>
                                        ) : null
                                    }
                                    {order.accountID}
                                </span>
                            </td>
                            <td className="px-4 py-2">{order.product}</td>
                            <td className="px-4 py-2">{order.valueOfProduct}</td>
                            <td className="px-4 py-2">{order.date}</td>
                            <td className="px-4 py-2">{order.amount}</td>
                            <td className="px-4 py-2">{order.address}</td>
                            <td className="px-4 py-2">
                                <span
                                    className={`px-2 text-base font-light rounded ${order.paymentStatus === "Successful"
                                        ? "text-green-500 bg-green-50"
                                        : order.paymentStatus === "Pending"
                                            ? "bg-yellow-50 text-yellow-500"
                                            : "bg-red-50 text-red-600"
                                        }`}
                                >
                                    {order.paymentStatus}
                                </span>
                            </td>
                            <td className="px-4 py-2">
                                <span
                                    className={`px-2 text-base font-light rounded border ${order.userType === "Verified"
                                        ? "border-neutral-500 text-neutral-500"
                                        : order.userType === "Guest"
                                            ? "text-slate-400 border-slate-400"
                                            : "text-green-400 border-green-400"
                                        }`}
                                >
                                    {order.userType}
                                </span>
                            </td>
                            <td className="px-4 py-2">{order.swtID}</td>
                            <td className="px-4 py-2">{order.number}</td>
                            <td className="px-4 py-2">{order.transactionID}</td>
                            <td className="py-3">
                                <span
                                    className={`pr-2 rounded-[100px] font-medium text-base justify-start items-center gap-1 flex
                                    ${getStyleByValue(order.paymentMode).class}
                                `}
                                >
                                    <img
                                        src={getStyleByValue(order.paymentMode).icon}
                                        alt={order.paymentMode}
                                    />
                                    {order.paymentMode}
                                </span>
                            </td>
                            <td className="py-3">
                                <span
                                    className={`pr-2 rounded-[100px] font-medium text-base justify-start items-center gap-1 flex
                                    ${getStyleByValue(order.apiProvider).class}
                                `}
                                >
                                    <img
                                        src={getStyleByValue(order.apiProvider).icon}
                                        alt={order.apiProvider}
                                    />
                                    {order.apiProvider}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrdersTable;
