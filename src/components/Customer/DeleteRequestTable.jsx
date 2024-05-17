import {
  AccountDeletionArray,
  deleteRequestTableHeaders,
} from "@/constants/data";
import TableHead from "../TableHead";
import { Button } from '@/components/ui'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const DeleteRequestTable = () => {
  return (
    <div className="mt-3">
      <p className="font-[500] text-[20px] ">Account Deletion Requests</p>
      <table className="table-auto w-full border-b border-stone-300 divide-y divide-stone-300 mt-3">
        <TableHead headers={deleteRequestTableHeaders} />
        <tbody className="text-stone-950 divide-y divide-stone-300">
          {AccountDeletionArray.map((user, index) => (
            <tr key={index}>
              <td className="px-4 py-2 flex items-center justify-between gap-2 text-left">
                <input type="checkbox" />
              </td>
              <td className="px-4 py-2">{user.request}</td>
              <td className="px-4 py-2">{user.email}</td>
              <td className="px-4 py-2">#{user.UserId}</td>
              <td className="px-4 py-2">
                <span
                  className={`px-2 text-base text-white font-light rounded border bg-[#224191]`}
                >
                  {user.actionbtn1}
                </span>
              </td>
              <td className="px-4 py-2">
                <span
                  className={`px-2 text-base text-[#224191] font-light rounded border bg-[#F7F7F7]`}
                >
                  {user.actionbtn2}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between gap-[50%] items-center w-full text-[#ADADAD] mt-10">
        <small>Showing 1 to 10 out of 60 records</small>
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
    </div>
  );
};

export default DeleteRequestTable;
