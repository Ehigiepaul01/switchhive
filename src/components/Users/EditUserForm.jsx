import { Button } from "../ui";
import Input from "../inputs/input";
import { useForm } from "react-hook-form";
import { useEditUsers } from "@/api/user";
import { accountsData } from '@/constants/data';
import { clipboard_tick } from '@/assets/icons';
import { ToggleInput } from '@/components';
import { UserEditInput, DeleteUserButton } from '@/components/Users';

const EditUserForm = ({ user }) => {
    const {
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            fullName: user.fullName,
            email: user.email,
            country: user.country,
            type: user.type,
        }
    });

    const {
        isPending,
        mutate,
    } = useEditUsers(reset, user.id);

    const onSubmit = (data) => {
        mutate(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='grid grid-cols-2 gap-4 mt-10'>
                <Input
                    labelStyle={`text-neutral-400 text-sm font-light leading-tight mb-2 mt-0`}
                    className={`h-[39px] px-3 py-[26px] text-base`}
                    label="Name"
                    placeholder="Last Name, First Name"
                    name="fullName"
                    control={control}
                    errors={errors}
                />
                <Input
                    labelStyle={`text-neutral-400 text-sm font-light leading-tight mb-2 mt-0`}
                    className={`h-[39px] px-3 py-[26px] text-base`}
                    label="Email"
                    placeholder="Email"
                    name="email"
                    type="email"
                    control={control}
                    errors={errors}
                />
                <Input
                    labelStyle={`text-neutral-400 text-sm font-light leading-tight mb-2 mt-0`}
                    className={`h-[39px] px-3 py-[26px] text-base`}
                    label="Country"
                    placeholder="Country"
                    name="country"
                    control={control}
                    errors={errors}
                />
                <Input
                    labelStyle={`text-neutral-400 text-sm font-light leading-tight mb-2 mt-0`}
                    className={`h-[39px] px-3 py-[26px] text-base`}
                    label="User Type"
                    placeholder="User Type"
                    name="type"
                    control={control}
                    errors={errors}
                />
                <UserEditInput label="Account Type" value={user.accountType} />
            </div>
            <div className='grid grid-cols-4 gap-3 mb-48 mt-14'>
                {
                    accountsData.map((account, index) => (
                        <div key={index} className='p-2 bg-white border rounded-lg border-neutral-200'>
                            <div className='flex items-center justify-between gap-3 mb-4'>
                                <img src={account.icons} alt={account.currency} />
                                <ToggleInput id={index} />
                            </div>
                            <p className="text-2xl font-medium leading-loose text-stone-950">N 1,300,000</p>
                            <div className="flex items-center justify-between w-full gap-1">
                                <Button size='xs' className="flex-1 leading-18">
                                    Add Funds
                                </Button>
                                <Button variant='destructive' size='xs' className="flex-1 leading-18">
                                    Remove Funds
                                </Button>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="flex items-center gap-4">
                <Button type="submit" disabled={isPending}>
                    <img src={clipboard_tick} alt="clip" className="mr-2 h-[18px] w-[18px]" />
                    {isPending ? 'Editing User...' : 'Save'}
                </Button>
                <DeleteUserButton id={user.id} />
            </div>
        </form>
    );
};

export default EditUserForm;
