import { useState } from "react"
import Editinput from "../inputs/editinput"
import { Button } from "../ui";
import { MixerHorizontalIcon, DotsVerticalIcon, PlusIcon } from "@radix-ui/react-icons";
import { useNavigate } from "react-router-dom";
import { CustomPopover } from "../custom";

const CouponForm = () => {
    const navigate = useNavigate();
    const [selectedValue, setSelectedValue] = useState('');
    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
    }
    return (
        <form action="" method="post">
            <div className="flex flex-col gap-3">
                <div>
                    <label htmlFor="" className="text-neutral-400 text-base font-light">
                        Label
                    </label>
                    <Editinput
                        type={"text"}
                        className={"w-full focus-visible:outline-none"}
                    />
                </div>
                <div>
                    <label htmlFor="" className="text-neutral-400 text-base font-light">
                        Code
                    </label>
                    <Editinput
                        type={"text"}
                        className={"w-full focus-visible:outline-none"}
                    />
                    <p className="text-neutral-400 text-sm italic font-light leading-tight mb-1">This is the code you share with the customer</p>
                </div>     
            </div>

            <div className="pt-3">
                <h2 className="font-bold">Discount Type</h2>
                <div className="flex flex-col gap-3">
                    <div className="pt-2">
                        <div className="flex items-center gap-6 text-sm">
                            <input type="checkbox" />
                            <label>Amount</label>
                        </div>
                        <p className="text-neutral-400 text-sm italic font-light leading-tight mb-1">This is the code you share with the customer</p>
                    </div>
                    <div>
                        <div className="flex items-center gap-4 text-sm">
                            <input type="checkbox" />
                            <label>Percentage</label>
                        </div>
                        <p className="text-neutral-400 text-sm italic font-light leading-tight mb-1">This is the code you share with the customer</p>
                    </div>
                </div>
            </div>

            <div className="pt-3">
                <h2 className="font-bold">Amount</h2>
                <div className="flex gap-8 pt-3">
                    <div> 
                        <label htmlFor="" className="text-neutral-400 text-sm font-light">
                            Amount Off
                        </label>
                        <Editinput
                            type={"text"}
                            className={"w-full focus-visible:outline-none"}
                        />
                    </div>
                    <div> 
                        <label htmlFor="" className="text-neutral-400 text-sm font-light">
                            Currency Type
                        </label>
                        <Editinput
                            type={"text"}
                            className={"w-full focus-visible:outline-none"}
                            placeholder={"USD"}
                        />
                    </div>
                </div>

            </div>
            <div className="pt-3">
                <h2 className="font-bold">Shopping Limit</h2>
                <div className="flex gap-8 pt-3">
                    <div> 
                        <label htmlFor="" className="text-neutral-400 text-sm font-light">
                            Minimum Amount
                        </label>
                        <Editinput
                            type={"text"}
                            className={"w-full focus-visible:outline-none"}
                        />
                    </div>
                    <div> 
                        <label htmlFor="" className="text-neutral-400 text-sm font-light">
                            Maximum Amount
                        </label>
                        <Editinput
                            type={"text"}
                            className={"w-full focus-visible:outline-none"}
                            placeholder={"USD"}
                        />
                    </div>
                </div>

            </div>
            <div className="pt-3">
                <h2 className="font-bold">Coupon Creation</h2>
                <div className="flex gap-8 pt-3">
                    <div> 
                        <label htmlFor="" className="text-neutral-400 text-sm font-light">
                            Created
                        </label>
                        <Editinput
                            type={"text"}
                            className={"w-full focus-visible:outline-none"}
                        />
                    </div>
                    <div> 
                        <label htmlFor="" className="text-neutral-400 text-sm font-light">
                            Use Before
                        </label>
                        <Editinput
                            type={"text"}
                            className={"w-full focus-visible:outline-none"}
                            placeholder={"USD"}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="selectedField">Select an option</label>
                        <select
                            id="selectedField"
                            value={selectedValue}
                            onChange={handleSelectChange}
                        >
                            <option value="">Select...</option>
                            <option value="value1">Value 1</option>
                            <option value="value2">Value 2</option>
                            <option value="value3">Value 3</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="pt-3">
                <h2 className="font-bold">Coupon Duration</h2>
                <div className="flex flex-col gap-3">
                    <div className="pt-2">
                        <div className="flex items-center gap-6 text-sm">
                            <input type="checkbox" />
                            <label>One Time</label>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center gap-4 text-sm">
                            <input type="checkbox" />
                            <label>Until Amount Is Exhausted</label>
                        </div>
                    </div>
                </div>
            </div>

            <h1 className="leading-[24px] pt-3 font-[500]">Eligible Users</h1>
            <div className="flex items-center gap-5 mt-5">
                <Button onClick={() => navigate('/notifications/push-notifications/users-in-app-messages')}>User</Button>
                <Button variant="outline">
                    <MixerHorizontalIcon className="h-[18px] w-[18px]" />
                    Filter
                </Button>
            </div>

            <div className="pt-6 flex flex-col gap-3">
                <h2 className="font-bold">Select Applicable Products</h2>
                <Editinput
                    type={"text"}
                    className={"w-[75%] focus-visible:outline-none"}
                    placeholder={'Choose'}
                />
                <CustomPopover icon={<PlusIcon className="" />} style={`p-3 text-white bg-blue-500 w-[10px] h-[10px]`}>
                    <h5>All Products</h5>
                    <h5>Select Product</h5>
                </CustomPopover>
            </div>
            <div className="flex items-center gap-10 py-16 w-1/2">
                <Button type="submit" variant="outline" className="w-full">
                    Send
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="18"
                        viewBox="0 0 19 18"
                        fill="none"
                        className=""
                    >
                        <path
                            d="M10.1675 4.40625H4.3325C3.05 4.40625 2 5.45625 2 6.73875V15.2587C2 16.3463 2.78 16.8112 3.7325 16.2787L6.68 14.6363C6.995 14.4637 7.505 14.4637 7.8125 14.6363L10.76 16.2787C11.72 16.8037 12.5 16.3463 12.5 15.2587V6.73875C12.5 5.45625 11.45 4.40625 10.1675 4.40625Z"
                            fill="#224191"
                        />
                        <path
                            d="M16.9999 3.8325V12.3525C16.9999 13.44 16.2199 13.8975 15.2674 13.3725L13.8199 12.5625C13.6999 12.495 13.6249 12.3675 13.6249 12.2325V6.7425C13.6249 4.8375 12.0724 3.285 10.1674 3.285H7.11488C6.83738 3.285 6.64238 2.9925 6.76988 2.7525C7.15988 2.01 7.93988 1.5 8.83238 1.5H14.6674C15.9499 1.5 16.9999 2.55 16.9999 3.8325Z"
                            fill="#224191"
                        />
                    </svg>
                </Button>
                <Button variant="grey" className="w-full">
                    Cancel
                </Button>
            </div> 
        </form>
    )
}
export default CouponForm