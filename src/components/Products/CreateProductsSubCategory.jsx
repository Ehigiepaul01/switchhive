import { Modal } from '../custom'
import { Button } from '../ui'
import { useForm } from "react-hook-form";
import Input from "../inputs/input";
import { BookmarkFilledIcon } from "@radix-ui/react-icons";
import { useCreateSubCategories } from '@/api/product';

const CreateProductsSubCategory = ({ isOpen, onClose, categoryID }) => {
    const {
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({});

    const { isPending, mutate } = useCreateSubCategories(reset, onClose, categoryID);

    const onSubmit = (data) => {
        mutate(data);
    };
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            message="Create New Sub Category"
        >
            <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                <div className="grid grid-cols-2 gap-3">
                    <Input
                        labelStyle={`text-neutral-400 text-sm font-light leading-tight mb-2 mt-0`}
                        className={`h-[39px] px-3 py-3.5`}
                        label="Name"
                        type="text"
                        placeholder="name"
                        name="name"
                        control={control}
                        errors={errors}
                    />
                    <Input
                        labelStyle={`text-neutral-400 text-sm font-light leading-tight mb-2 mt-0`}
                        className={`h-[39px] px-3 py-3.5`}
                        label="Description"
                        type="text"
                        placeholder="description"
                        name="description"
                        control={control}
                        errors={errors}
                    />
                    <Button
                        isLoading={isPending}
                        type="submit"
                        className="w-full"
                    >
                        Save
                        <BookmarkFilledIcon className="h-[18px] w-[18px] text-white rounded" />
                    </Button>
                </div>
            </form>
        </Modal>
    )
}

export default CreateProductsSubCategory