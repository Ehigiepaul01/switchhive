import React from "react";
import Editinput from "../inputs/editinput";
import { editimage } from "@/assets/images";
import { Button } from "../ui";

const GuestUserForm = () => {
  return (
    <div>
      <form action="" method="post" className="w-full ">
        <div className="flex items-center gap-4 w-full">
          <label htmlFor="" className="text-[14px] text-[#A1A1A1] w-full">
            Amount Limit
            <input
              type="text"
              className="w-full border-b-2 border-slate-200 px-2 py-2 pl-[38px] text-sm ring-offset-white placeholder:text-neutral-200 focus-visible:outline-none"
            />
            <p className="text-[10px] text-[#A1A1A1] italic">per day</p>
          </label>
          <label htmlFor="" className="text-[14px] text-[#A1A1A1] w-full">
            Amount Limit
            <input
              type="text"
              className="w-full border-b-2 border-slate-200 px-2 py-2 pl-[38px] text-sm ring-offset-white placeholder:text-neutral-200 focus-visible:outline-none"
            />
            <p className="text-[10px] text-[#A1A1A1] italic">per month</p>
          </label>
        </div>

        <div className="flex flex-col w-1/2 mt-10">
          <p>Update Transaction Limit</p>

          <div className="flex justify-between items-center mt-4">
            <p>Per Day</p>
            <Editinput
              type={"text"}
              icon={editimage}
              placeholder={"$"}
              className={"w-[89%] focus-visible:outline-none"}
            />
          </div>
          <div className="flex justify-between items-center mt-4">
            <p>Per Month</p>
            <Editinput
              type={"text"}
              icon={editimage}
              placeholder={"$"}
              className={"w-[89%] focus-visible:outline-none"}
            />
          </div>
        </div>

        <div className="flex items-center gap-10 mt-10 w-1/2">
        <Button type="submit" variant="outline" className="w-1/3">
          Send
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="18"
            viewBox="0 0 19 18"
            fill="none"
            className="ml-2"
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
        <Button variant="grey" className="w-1/3">
          Cancel
        </Button>
      </div>
      </form>
    </div>
  );
};

export default GuestUserForm;
