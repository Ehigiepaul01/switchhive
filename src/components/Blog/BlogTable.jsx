import { blogTableHeader } from "@/constants/data";
import { folder } from "@/assets/icons";
import { Button } from "../ui";
import TableHead from "../TableHead";
import { DeleteBlogButton, EditBlogButton } from ".";
import { formatDate, shortenSentence } from "@/utils/helper";

const BlogTable = ({ data }) => {
    return (
        <table className="w-full border-b divide-y table-auto border-stone-300 divide-stone-300">
            <TableHead headers={blogTableHeader} />
            <tbody className="divide-y text-stone-950 divide-stone-300">
                {data.map((blog) => (
                    <tr key={blog.id}>
                        <td className="flex items-center gap-2 px-4 py-2 text-left">
                            <Button size="icon" variant="grey">
                                <img src={folder} alt="folder" />
                            </Button>
                            <span>{blog.author.fullName}</span>
                        </td>
                        <td className="px-4 py-2">{formatDate(blog.createdAt)}</td>
                        <td className="px-4 py-2">{shortenSentence(blog.title, 8)}</td>
                        <td className="flex items-center justify-between w-32 gap-2 px-4 py-2 text-left">
                            <DeleteBlogButton {...blog} />
                            <EditBlogButton {...blog} />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default BlogTable