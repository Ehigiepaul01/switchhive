import { Breadcrumbs, TableHead, Title } from "@/components"
import { Button } from "@/components/ui"
import { accountDeleteTableHeaders, accountUserArray } from "@/constants/data"
import { TrashIcon } from "@radix-ui/react-icons"
import { ToggleInput } from "@/components"
import {
    Pagination,
        PaginationContent,
        PaginationEllipsis,
        PaginationItem,
        PaginationLink,
        PaginationNext,
        PaginationPrevious,
} from "@/components/ui/pagination";


const AccountDeletion = () => {
    return (
        <section className="section">
            <Title>Account Deletion</Title>
            <Breadcrumbs menu="Customer" subMenu="Account Deletion" />
            <div className="flex justify-between pt-8 pb-4">
                <Button variant="destructive" size="sm" className="flex gap-2 px-8">
                    <TrashIcon className="h-[18px] w-[18px]" />
                    Delete Account
                </Button>
                <div className="flex gap-3">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                    >
                        <path
                            d="M15.32 10.94L10.52 2.3C9.87498 1.1375 8.98248 0.5 7.99998 0.5C7.01748 0.5 6.12498 1.1375 5.47998 2.3L0.679983 10.94C0.0724832 12.0425 0.00498322 13.1 0.492483 13.9325C0.979983 14.765 1.93998 15.2225 3.19998 15.2225H12.8C14.06 15.2225 15.02 14.765 15.5075 13.9325C15.995 13.1 15.9275 12.035 15.32 10.94ZM7.43748 5.75C7.43748 5.4425 7.69248 5.1875 7.99998 5.1875C8.30748 5.1875 8.56248 5.4425 8.56248 5.75V9.5C8.56248 9.8075 8.30748 10.0625 7.99998 10.0625C7.69248 10.0625 7.43748 9.8075 7.43748 9.5V5.75ZM8.53248 12.2825C8.49498 12.3125 8.45748 12.3425 8.41998 12.3725C8.37498 12.4025 8.32998 12.425 8.28498 12.44C8.23998 12.4625 8.19498 12.4775 8.14248 12.485C8.09748 12.4925 8.04498 12.5 7.99998 12.5C7.95498 12.5 7.90248 12.4925 7.84998 12.485C7.80498 12.4775 7.75998 12.4625 7.71498 12.44C7.66998 12.425 7.62498 12.4025 7.57998 12.3725C7.54248 12.3425 7.50498 12.3125 7.46748 12.2825C7.33248 12.14 7.24998 11.945 7.24998 11.75C7.24998 11.555 7.33248 11.36 7.46748 11.2175C7.50498 11.1875 7.54248 11.1575 7.57998 11.1275C7.62498 11.0975 7.66998 11.075 7.71498 11.06C7.75998 11.0375 7.80498 11.0225 7.84998 11.015C7.94748 10.9925 8.05248 10.9925 8.14248 11.015C8.19498 11.0225 8.23998 11.0375 8.28498 11.06C8.32998 11.075 8.37498 11.0975 8.41998 11.1275C8.45748 11.1575 8.49498 11.1875 8.53248 11.2175C8.66748 11.36 8.74998 11.555 8.74998 11.75C8.74998 11.945 8.66748 12.14 8.53248 12.2825Z"
                            fill="#FF0000"
                        />
                    </svg>
                    <h6 className="text-sm font-semibold text-red-500">Account Deletion is Enabled</h6>
                    <ToggleInput />
                </div>
            </div>
            <h2 className="font-semibold">Account Deletion Requests</h2>
            <table className="w-full mt-3 border-b divide-y table-auto border-stone-300 divide-stone-300">
                <TableHead headers={accountDeleteTableHeaders} />
                <tbody className="divide-y text-stone-950 divide-stone-300">
                    {accountUserArray.map((user, index) => (
                        <tr key={index}>
                            <td className="px-4 py-2">
                                <input
                                    type="checkbox"
                                    name="check"
                                    id="check"
                                />
                            </td>
                            <td className="px-4 py-2 font-semibold">Account Deletion Requests</td>
                            <td className="px-4 py-2">{user.EmailAddress}</td>
                            <td className="px-4 py-2">{user.UserID}</td>
                            <td className="flex gap-2 px-4 py-2">
                                <Button size="sm">Approve</Button>
                                <Button variant="outline2" size="sm">Decline</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex justify-between gap-[75%] items-center w-full text-[#ADADAD] mt-10">
                <h3 className="text-sm font-light">Showing 1 to <span className="font-semibold">10</span> out of <span className="font-semibold">{accountUserArray.length}</span> records</h3>
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
export default AccountDeletion