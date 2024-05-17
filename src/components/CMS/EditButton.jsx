import { Button } from '../ui'
import useDisclosure from '@/hooks/useDisclosure'
import { reload } from "@/assets/icons";
import { Label } from '../ui/label';
import Input from '../inputs/input';
import { useForm } from "react-hook-form";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

const EditButton = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({});

    const onSubmit = (data) => {
        console.log(data);
    };


    const { onOpen } = useDisclosure();
    return (
        <>
            <Sheet>
                <SheetTrigger asChild>
                    <Button size="icon" variant="grey" onClick={onOpen}>
                        <img src={reload} alt="eye" />
                    </Button>
                </SheetTrigger>
                <SheetContent>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <SheetHeader>
                            <SheetTitle className="flex justify-between">
                                <h5 className='ml-3'>Update Hero Section</h5>
                                <div className="flex items-center gap-4">
                                    <Button variant="outline" size="xs" className="px-2">
                                        Save
                                    </Button>
                                    <Button size="xs"  className="px-2">
                                        Publish
                                    </Button>
                                </div>
                            </SheetTitle>
                        </SheetHeader>
                        <div className="grid gap-4">
                            <Input
                                label="Post Title"
                                placeholder="Add a title"
                                name="title"
                                control={control}
                                errors={errors}
                            />
                        </div>
                    </form>
                </SheetContent>
            </Sheet>

        </>
    )
}

export default EditButton

