import { Button } from '../ui'
import useDisclosure from '@/hooks/useDisclosure'
import { reload } from "@/assets/icons";
import Input from '../inputs/input';
import { useForm } from "react-hook-form";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { useEditBlogs } from '@/api/blog';


const EditBlogButton = ({ id, title, content }) => {
    const { isOpen, toggle } = useDisclosure();
    const {
        isPending,
        mutate,
    } = useEditBlogs(toggle);

    const {
        control,
        handleSubmit,
        register,
        formState: { errors },
    } = useForm({
        defaultValues: {
            title: title,
            content: content,
        }
    });

    const onSubmit = (data) => {
        const formdata = new FormData();
        formdata.append('title', data.title);
        formdata.append('content', data.content);
        formdata.append("imageUrl", data.image[0]);
        mutate({ formdata, id });
    };

    return (
        <>
            <Sheet open={isOpen} onOpenChange={toggle}>
                <SheetTrigger asChild>
                    <Button size="icon" variant="grey">
                        <img src={reload} alt="eye" />
                    </Button>
                </SheetTrigger>
                <SheetContent>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <SheetHeader>
                            <SheetTitle className="flex justify-between">
                                <span className='ml-3'>Update Hero Section</span>
                                <div className="flex items-center gap-4">
                                    <Button variant="outline" size="xs" className="px-2" type="submit" disabled={isPending}>
                                        {isPending ? "Updating..." : "Update"}
                                    </Button>
                                </div>
                            </SheetTitle>
                        </SheetHeader>
                        <div className="grid w-full gap-4">
                            <Input
                                label="Post Title"
                                placeholder="Edit title"
                                name="title"
                                control={control}
                                errors={errors}
                                className="w-[98%]"
                            />
                            <Input
                                textField={true}
                                label="Blog Description"
                                placeholder="Add text here"
                                name="content"
                                control={control}
                                errors={errors}
                                className="w-[98%]"
                            />
                            <Input
                                label="Add Image"
                                name="imageUrl"
                                type="file"
                                register={register}
                                errors={errors}
                                className="text-base w-[98%] font-semibold leading-normal text-blue-900 px-[50px] py-[23px] h-auto"
                            />
                        </div>
                    </form>
                </SheetContent>
            </Sheet>

        </>
    )
}

export default EditBlogButton

