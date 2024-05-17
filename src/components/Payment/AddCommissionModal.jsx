import { Modal } from "../custom"
import { Button } from "../ui";
import { useForm } from "react-hook-form";
import Input from "../inputs/input";
import { loginSchema } from "@/schemas/authSchema";
import { yupResolver } from '@hookform/resolvers/yup';
import { useLogin } from "@/api/auth";
import { BookmarkFilledIcon } from "@radix-ui/react-icons";

const AddCommissionModal = ({ isOpen, onClose }) => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(loginSchema),
    });

    const { isPending, mutate } = useLogin();

    const onSubmit = (data) => {
        mutate(data);
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            message="Add Commission"
        >
            <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                <div className="grid grid-cols-2 gap-3">
                    <Input
                        labelStyle={`text-neutral-400 text-sm font-light leading-tight mb-2 mt-0`}
                        className={`h-[39px] px-3 py-3.5`}
                        label="Commission Percentage"
                        type="text"
                        placeholder="2%"
                        name="commissionPercentage"
                        control={control}
                        errors={errors}
                    />
                    <Input
                        labelStyle={`text-neutral-400 text-sm font-light leading-tight mb-2 mt-0`}
                        className={`h-[39px] px-3 py-3.5`}
                        label="Fixed Fees"
                        type="text"
                        placeholder="$2"
                        name="fixedFees"
                        control={control}
                        errors={errors}
                    />
                    <div>
                        <Input
                            labelStyle={`text-neutral-400 text-sm font-light leading-tight mb-2 mt-0`}
                            className={`h-[39px] px-3 py-3.5`}
                            label="Minimum Amount"
                            type="text"
                            placeholder="$2"
                            name="minimumAmount"
                            control={control}
                            errors={errors}
                        />
                        <p className="text-gray-500 text-xs italic">Minimum amount you get from the product</p>
                    </div>
                    <div>
                        <Input
                            labelStyle={`text-neutral-400 text-sm font-light leading-tight mb-2 mt-0`}
                            className={`h-[39px] px-3 py-3.5`}
                            label="Maximum Amount"
                            type="text"
                            placeholder="$2"
                            name="maximumAmount"
                            control={control}
                            errors={errors}
                        />
                        <p className="text-gray-500 text-xs italic">Maximum amount you get from the product</p>
                    </div>
                    <div className="col-span-2">
                        <p className="text-gray-400 mb-5 text-sm">Commission = 5%  + $1 (fixed fees)</p>
                        <Button
                            isLoading={isPending}
                            type="submit"
                            className="w-full"
                        >
                            Save
                            <BookmarkFilledIcon className="h-[18px] w-[18px] text-white rounded" />
                        </Button>
                    </div>
                </div>
            </form>

        </Modal>
    )
}

export default AddCommissionModal