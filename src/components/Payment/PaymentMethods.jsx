import { Switch } from "@/components/custom/Switch"
import { Button } from "@/components/ui"
import { getStyleByValue } from "@/utils/helper"
import { BookmarkFilledIcon, ExclamationTriangleIcon } from "@radix-ui/react-icons"
import edit from "@/assets/icons/edit.svg"
import { Link } from "react-router-dom"

const PaymentMethods = ({ paymentData, handleToggleChange }) => {
    return (
        <>
            <div className="flex flex-col gap-6 mb-10">
                {paymentData.map((payment, index) => (
                    <div className="flex justify-between" key={index}>
                        <div className={`pr-2 rounded-[100px] font-medium text-base justify-start items-center gap-1 flex max-w-max
                                    ${getStyleByValue(payment.paymentMode).class} ${payment.enabled ? "" : "bg-zinc-500"}
                                `}>
                            <img src={getStyleByValue(payment.paymentMode).icon} alt={payment.paymentMode} className={`${payment.enabled ? '' : 'grayscale'}`} />
                            <p>{payment.paymentMode}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <ExclamationTriangleIcon className="h-[10px] w-[10px] text-red-500" />
                            <p className="text-red-500 text-xs">Payment Method is {payment.enabled ? 'enabled' : 'disabled'}</p>
                            <Switch id={index} checked={payment.enabled} onCheckedChange={() => handleToggleChange(index)} />
                            <Button size="icon" variant="grey" className="bg-transparent" asChild>
                                <Link to={`/payments/${(payment.paymentMode).toLowerCase()}`}>
                                    <img src={edit} alt="edit icon" className="contrast-0" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
            <Button variant="outline" className="w-[198px]" type="submit">
                Save
                <BookmarkFilledIcon className="h-[18px] w-[18px] bg-white text-blue-900 rounded" />
            </Button>
        </>
    )
}

export default PaymentMethods