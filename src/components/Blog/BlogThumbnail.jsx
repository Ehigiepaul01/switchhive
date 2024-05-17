import { card } from "@/assets/images";
import { formatDate } from "@/utils/helper";

const BlogThumbnail = ({ data }) => {
    return (
            <div className="grid gap-6 text-base text-stone-950 md:grid-cols-2 lg:grid-cols-3">
                {data.map((blog, index) => (
                    <div key={index} className="flex flex-col items-start justify-start gap-6 p-3 bg-white border border-blue-900 rounded-lg">
                        <img 
                            src={blog.imageUrl || card} 
                            alt="blog image" 
                            loading="lazy"
                           className="w-full h-40 object-cover rounded-lg sm:h-48 md:h-56 lg:h-64 xl:h-72 2xl:h-80"
                        />
                        <div>
                            <p className="font-medium leading-normal ">{blog.title}</p>
                            <p className="font-light mt-28">{blog.author.fullName}</p>
                            <p className="font-light opacity-50">{formatDate(blog.createdAt)}</p>
                        </div>
                    </div>
                ))}
            </div>
    )
}

export default BlogThumbnail