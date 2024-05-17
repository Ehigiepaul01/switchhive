import { Title } from "@/components"
import { Button } from "@/components/ui"
import { DashboardIcon, PlusIcon } from '@radix-ui/react-icons'
import { Link } from "react-router-dom"
import { light_blog, dark_blog } from "@/assets/icons"

const BlogHeader = ({removeThumbnail, addThumbnail, activeThumbnail}) => {
    return (
        <div className="flex items-center justify-between">
            <Title>Blog</Title>
            <div className='flex items-center gap-3 ml-auto'>
                <Button onClick={removeThumbnail} variant={activeThumbnail ? 'ghost' : 'default'} size='icon'>
                    <img src={activeThumbnail ? dark_blog : light_blog} alt="thumbnail icon" className="h-[18px] w-[18px]" />
                </Button>
                <Button onClick={addThumbnail} variant={activeThumbnail ? 'default' : 'ghost'} size='icon'>
                    <DashboardIcon className={`h-[18px] w-[18px]  rounded ${activeThumbnail ? 'bg-blue-900 text-white' : ' bg-white text-black'}`} />
                </Button>
                <Button asChild>
                    <Link to="/blog/create">
                        Create Blogpost
                        <PlusIcon className="ml-2 h-[18px] w-[18px] bg-white text-blue-900 rounded" />
                    </Link>
                </Button>
            </div>
        </div>
    )
}

export default BlogHeader