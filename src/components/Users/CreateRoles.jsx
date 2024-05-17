import { Button } from "../ui";
import Input from "../inputs/input";
import { useForm } from "react-hook-form";
import { BookmarkFilledIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";
import RoleCheckbox from "./RoleCheckbox";
import { useCreateRoles } from "@/api/user";

const CreateRoles = ({ menuItems }) => {
    const {
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
    });

    const {
        isPending,
        mutate,
    } = useCreateRoles(reset);

    const onSubmit = (data) => {
        const {roleName, ...rest} = data;
        const selectedRoleObjKey = Object.keys(data).filter(key => data[key])
        const formdata = {
            "name": roleName,
            "permissions": selectedRoleObjKey,
        };
        mutate(formdata);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h6 className="text-black text-xl font-medium leading-[30px]  mb-6">Add New Role</h6>
            <Input
                labelStyle={`text-neutral-400 text-sm font-light leading-tight mb-2 mt-0`}
                className={`h-[39px] px-3 py-3.5 w-full md:w-2/4`}
                label="Role Name"
                type="text"
                placeholder="Role name"
                name="roleName"
                id="roleName"   
                control={control}
                errors={errors}
            />
            <h6 className="text-black text-xl font-medium leading-[30px]  mb-6 mt-2">Access to</h6>
            {menuItems.map((menuItem) => (
                <div key={menuItem.label} className="mb-4">
                    <RoleCheckbox menuItem={menuItem} control={control} errors={errors} />
                </div>
            ))}
            <div className="flex items-center gap-4 mt-10">
                <Button variant="outline" className="w-[198px]" disabled={isPending}>
                    {isPending ? "Creating Role" : "Save"}
                    <BookmarkFilledIcon className="h-[18px] w-[18px] bg-white text-blue-900 rounded " />
                </Button>
                <Button variant="grey" className="w-[198px]">
                    <Link to={`/users/admin-management`}>
                        Cancel
                    </Link>
                </Button>
            </div>
        </form>
    )
}

export default CreateRoles