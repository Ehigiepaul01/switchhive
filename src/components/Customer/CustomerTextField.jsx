import { edit} from "@/assets/icons";
import { Button } from "../ui";
import { CopyIcon } from "@radix-ui/react-icons";

const CustomerTextField = ({ filteredUsers }) => {
    return (
        <section className="">
            {
                filteredUsers.map((user, index) => (
                    <form action="" method="post" className="w-full">
                        <div key={index}>
                            <div className="flex justify-between">
                                <div className="flex-col justify-start items-start flex w-full">
                                    <label htmlFor="" className="text-neutral-400 text-sm leading-tight mb-1">Amount Limit</label>
                                    <input type="text" className="w-[95%] border-b-2 border-slate-200 px-2 py-2 pl-[38px] text-sm ring-offset-white placeholder:text-neutral-300 focus-visible:outline-none" placeholder={user.limitPerDay} />
                                    <p className="text-neutral-400 text-sm italic font-light leading-tight mb-1 pt-2">per day</p>
                                </div>
                                <div className="flex-col justify-start items-start flex w-full">
                                    <label htmlFor="" className="text-neutral-400 text-sm leading-tight mb-1">Amount Limit</label>
                                    <input type="text" className="w-[95%] border-b-2 border-slate-200 px-2 py-2 pl-[38px] text-sm ring-offset-white placeholder:text-neutral-300 focus-visible:outline-none" placeholder={user.limitPerMonth} />
                                    <p className="text-neutral-400 text-sm italic font-light leading-tight mb-1 pt-2">per month</p>
                                </div>
                            </div>

                            {
                                user.userType !== 'Guest' ?
                                    <div className="pt-6 flex flex-col gap-4">
                                        <div className="flex-col justify-start items-start flex w-full">
                                            <p className="text-base font-bold leading-tight mb-1">Maximun Single Order</p>
                                            <div className="text-neutral-400 text-base font-light px-6 py-3.5 bg-white rounded-lg border border-neutral-400 w-full flex justify-between">${user.maxSingleOrder}
                                                <img
                                                    src={edit}
                                                    alt="edit"
                                                    style={{
                                                        cursor: "pointer",
                                                    }}
                                                />
                                            </div>
                                            <p className="text-neutral-400 text-sm italic font-light leading-tight mb-1">maximum order per gift card </p>

                                        </div>
                                        <div className="flex-col justify-start items-start flex w-full">
                                            <p className="text-base font-bold leading-tight mb-1">Maximum Balance</p>
                                            <div className="text-neutral-400 text-base font-light px-6 py-3.5 bg-white rounded-lg border border-neutral-400 w-full flex justify-between">${user.maxBalance}
                                                <img
                                                    src={edit}
                                                    alt="edit"
                                                    style={{
                                                        cursor: "pointer",
                                                    }}
                                                />
                                            </div>
                                            <p className="text-neutral-400 text-sm italic font-light leading-tight mb-1">Total sum of money in all 4 accounts cannot exceed this sum</p>

                                        </div>

                                    </div>
                                    :
                                    <div className="hidden"></div>
                            }

                            <div className="pt-6 w-1/2">
                                <h2 className="text-base font-bold leading-tight mb-1 pb-3">Update Transaction Limit</h2>
                                <div className="flex flex-col gap-6">
                                    <div className="flex w-full justify-between">
                                        <p className="text-sm font-bold leading-tight mb-1">Per Day</p>
                                        <div className="text-neutral-400 text-base font-light px-3 py-3.5 bg-white rounded-lg border border-neutral-400 w-2/3 flex justify-between">${user.limitPerDay}
                                             <img
                                                src={edit}
                                                alt="edit"
                                                style={{
                                                    cursor: "pointer",
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="flex w-full justify-between">
                                        <p className="text-sm font-bold leading-tight mb-1">Per Month</p>
                                        <div className="text-neutral-400 text-base font-light px-3 py-3.5 bg-white rounded-lg border border-neutral-400 w-2/3 flex justify-between">${user.limitPerMonth}
                                            <img
                                                src={edit}
                                                alt="edit"
                                                style={{
                                                    cursor: "pointer",
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-8 flex justify-between">
                                    <Button variant="outline" size="sm" className="px-20 flex gap-2">
                                        Save
                                        <CopyIcon className="h-[18px] w-[18px]" />
                                    </Button>
                                    <Button variant="darkerGrey" size="sm" className="px-20">Cancel</Button>
                                </div>
                            </div>
                        </div>
                    </form>
                ))
            }
            
        </section>
    )
}
export default CustomerTextField