import { blogsArray, cmsTableHeader } from "@/constants/data";
import { folder } from "@/assets/icons";
import { Button } from "../ui";
import TableHead from "../TableHead";
import { EditButton, RemoveButton } from ".";

const HeroPage = () => {
    return (
        <table className="w-full mt-3 border-b divide-y table-auto border-stone-300 divide-stone-300">
            <TableHead headers={cmsTableHeader} />
            <tbody className="divide-y text-stone-950 divide-stone-300">
                {blogsArray.map((user, index) => (
                    <tr key={index}>
                        <td className="flex items-center gap-2 px-4 py-2 text-left">
                            <Button size="icon" variant="grey">
                                <img src={folder} alt="trash" />
                            </Button>
                            <span>{user.author}</span>
                        </td>
                        <td className="px-4 py-2">{user.date}</td>
                        <td className="px-4 py-2">{user.title}</td>
                        <td className="flex items-center justify-between gap-2 px-4 py-2 text-left">
                            <RemoveButton />
                            <EditButton />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default HeroPage